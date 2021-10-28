# Install dependencies only when needed
FROM node:alpine AS deps
# Check https://github.com/nodejs/docker-node/tree/b4117f9333da4138b03a546ec926ef50a31506c3#nodealpine to understand why libc6-compat might be needed.
# set labels
LABEL maintainer="Francis Masha" MAINTAINER="Francis Masha <francismasha96@gmail.com>"
LABEL application="almond"
RUN apk add --no-cache libc6-compat
ENV APP_HOME=/home/node/app
RUN mkdir -p $APP_HOME && chown -R node:node $APP_HOME
WORKDIR $APP_HOME
# Set non-root user and folder
USER node
# Copy source code (and all other relevant files)
COPY --chown=node:node package.json yarn.lock ./
RUN yarn set version berry
RUN yarn install

# Rebuild the source code only when needed
FROM node:alpine AS builder
ENV APP_HOME=/home/node/app
RUN mkdir -p $APP_HOME && chown -R node:node $APP_HOME
WORKDIR $APP_HOME
# Set non-root user and folder
USER node
# Copy source code (and all other relevant files)
COPY --chown=node:node . ./
COPY --from=deps $APP_HOME/node_modules ./node_modules
RUN yarn build

# Production image, copy all the files and run next
FROM node:alpine AS runner
WORKDIR /app
ENV NODE_ENV production

RUN addgroup -g 1001 -S nodejs
RUN adduser -S nextjs -u 1001

# You only need to copy next.config.js if you are NOT using the default configuration
# COPY --from=builder /app/next.config.js ./
COPY --from=builder $APP_HOME/public ./public
COPY --from=builder --chown=nextjs:nodejs $APP_HOME/.next ./.next
COPY --from=deps $APP_HOME/node_modules ./node_modules
COPY --from=builder $APP_HOME/package.json ./package.json

USER nextjs

EXPOSE 3000

# Next.js collects completely anonymous telemetry data about general usage.
# Learn more here: https://nextjs.org/telemetry
# Uncomment the following line in case you want to disable telemetry.
# ENV NEXT_TELEMETRY_DISABLED 1

CMD ["yarn", "start"]
