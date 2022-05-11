import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
	[K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
	[SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
	[SubKey in K]: Maybe<T[SubKey]>;
};
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
	ID: string;
	String: string;
	Boolean: boolean;
	Int: number;
	Float: number;
	/** Date custom scalar type */
	Date: any;
	/** A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the `date-time` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
	DateTime: any;
	/** A field whose value conforms to the standard internet email address format as specified in RFC822: https://www.w3.org/Protocols/rfc822/. */
	EmailAddress: any;
	/** The `JSONObject` scalar type represents JSON objects as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
	JSONObject: any;
	/** Integers that will have a value of 0 or more. */
	UnsignedInt: any;
};

export type CreateDeviceInput = {
	name: Scalars['String'];
};

export type DeleteAccountPayload = {
	__typename?: 'DeleteAccountPayload';
	count?: Maybe<Scalars['Int']>;
	errors?: Maybe<Array<Maybe<ErrorPayload>>>;
};

export type DeleteDevicePayload = {
	__typename?: 'DeleteDevicePayload';
	count?: Maybe<Scalars['Int']>;
	errors?: Maybe<Array<Maybe<ErrorPayload>>>;
};

export type Device = {
	__typename?: 'Device';
	active: Scalars['Boolean'];
	createdAt: Scalars['Date'];
	id: Scalars['ID'];
	name: Scalars['String'];
	updatedAt: Scalars['Date'];
	user: User;
	verified: Scalars['Boolean'];
	version: Scalars['Int'];
};

export type DeviceEdge = {
	__typename?: 'DeviceEdge';
	cursor: Scalars['String'];
	node: Device;
};

export type DevicePayload = {
	__typename?: 'DevicePayload';
	device?: Maybe<Device>;
	errors?: Maybe<Array<Maybe<ErrorPayload>>>;
};

export type DevicesConnection = {
	__typename?: 'DevicesConnection';
	edges: Array<DeviceEdge>;
	pageInfo: PageInfo;
	totalCount: Scalars['Int'];
};

export type ErrorPayload = {
	__typename?: 'ErrorPayload';
	field?: Maybe<Scalars['String']>;
	message?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type LoginUserInput = {
	email: Scalars['EmailAddress'];
	password: Scalars['String'];
};

export type Mutation = {
	__typename?: 'Mutation';
	createDevice: DevicePayload;
	deleteAccount: DeleteAccountPayload;
	deleteDevice: DeleteDevicePayload;
	login: UserPayload;
	logout: Scalars['Boolean'];
	refreshToken: UserPayload;
	signup: UserPayload;
	updateDevice: DevicePayload;
	updateEmail: UserPayload;
	updatePassword: UserPayload;
	updateProfile: UserPayload;
};

export type MutationCreateDeviceArgs = {
	data: CreateDeviceInput;
};

export type MutationDeleteDeviceArgs = {
	id: Scalars['ID'];
};

export type MutationLoginArgs = {
	data: LoginUserInput;
};

export type MutationSignupArgs = {
	data: SignupUserInput;
};

export type MutationUpdateDeviceArgs = {
	data: UpdateDeviceInput;
	id: Scalars['ID'];
};

export type MutationUpdateEmailArgs = {
	data?: InputMaybe<UpdateEmailInput>;
};

export type MutationUpdatePasswordArgs = {
	data?: InputMaybe<UpdatePasswordInput>;
};

export type MutationUpdateProfileArgs = {
	data: UpdateProfileInput;
};

export type PageInfo = {
	__typename?: 'PageInfo';
	endCursor: Scalars['String'];
	hasNextPage: Scalars['Boolean'];
	hasPreviousPage: Scalars['Boolean'];
	startCursor: Scalars['String'];
};

export type Query = {
	__typename?: 'Query';
	device: Device;
	deviceCount: Scalars['Int'];
	devices?: Maybe<DevicesConnection>;
	getGoogleAuthURL: Scalars['String'];
	googleAuth: UserPayload;
	me: User;
	myDevice?: Maybe<DevicesConnection>;
	user: User;
	userCount: Scalars['Int'];
	users?: Maybe<UsersConnection>;
};

export type QueryDeviceArgs = {
	id: Scalars['ID'];
};

export type QueryDeviceCountArgs = {
	filterBy?: InputMaybe<Scalars['JSONObject']>;
	q?: InputMaybe<Scalars['String']>;
};

export type QueryDevicesArgs = {
	after?: InputMaybe<Scalars['String']>;
	before?: InputMaybe<Scalars['String']>;
	filterBy?: InputMaybe<Scalars['JSONObject']>;
	first?: InputMaybe<Scalars['Int']>;
	last?: InputMaybe<Scalars['Int']>;
	orderBy?: InputMaybe<Scalars['String']>;
	q?: InputMaybe<Scalars['String']>;
};

export type QueryGoogleAuthArgs = {
	input?: InputMaybe<SocialAuthInput>;
};

export type QueryMyDeviceArgs = {
	after?: InputMaybe<Scalars['String']>;
	before?: InputMaybe<Scalars['String']>;
	filterBy?: InputMaybe<Scalars['JSONObject']>;
	first?: InputMaybe<Scalars['Int']>;
	last?: InputMaybe<Scalars['Int']>;
	orderBy?: InputMaybe<Scalars['String']>;
	q?: InputMaybe<Scalars['String']>;
};

export type QueryUserArgs = {
	id: Scalars['ID'];
};

export type QueryUserCountArgs = {
	filterBy?: InputMaybe<Scalars['JSONObject']>;
	q?: InputMaybe<Scalars['String']>;
};

export type QueryUsersArgs = {
	after?: InputMaybe<Scalars['String']>;
	before?: InputMaybe<Scalars['String']>;
	filterBy?: InputMaybe<Scalars['JSONObject']>;
	first?: InputMaybe<Scalars['Int']>;
	last?: InputMaybe<Scalars['Int']>;
	orderBy?: InputMaybe<Scalars['String']>;
	q?: InputMaybe<Scalars['String']>;
};

export enum Roles {
	Admin = 'ADMIN',
	Developer = 'DEVELOPER',
	User = 'USER',
}

export type SignupUserInput = {
	email: Scalars['EmailAddress'];
	firstName: Scalars['String'];
	lastName: Scalars['String'];
	password: Scalars['String'];
};

export type SocialAuthInput = {
	code: Scalars['String'];
};

export type Subscription = {
	__typename?: 'Subscription';
	deviceAdded: Device;
};

export type UpdateDeviceInput = {
	active?: InputMaybe<Scalars['Boolean']>;
	name?: InputMaybe<Scalars['String']>;
	verified?: InputMaybe<Scalars['Boolean']>;
};

export type UpdateEmailInput = {
	currentPassword: Scalars['String'];
	email: Scalars['EmailAddress'];
};

export type UpdatePasswordInput = {
	confirmPassword: Scalars['String'];
	currentPassword: Scalars['String'];
	newPassword: Scalars['String'];
};

export type UpdateProfileInput = {
	active?: InputMaybe<Scalars['Boolean']>;
	avatar?: InputMaybe<Scalars['String']>;
	email?: InputMaybe<Scalars['EmailAddress']>;
	firstName?: InputMaybe<Scalars['String']>;
	lastName?: InputMaybe<Scalars['String']>;
	verified?: InputMaybe<Scalars['Boolean']>;
};

export type User = {
	__typename?: 'User';
	active: Scalars['Boolean'];
	avatar: Scalars['String'];
	createdAt: Scalars['Date'];
	devices?: Maybe<DevicesConnection>;
	email: Scalars['EmailAddress'];
	firstName: Scalars['String'];
	googleId: Scalars['String'];
	id: Scalars['ID'];
	lastName: Scalars['String'];
	password: Scalars['String'];
	role: Roles;
	updatedAt: Scalars['Date'];
	verified: Scalars['Boolean'];
	version: Scalars['Int'];
};

export type UserDevicesArgs = {
	after?: InputMaybe<Scalars['String']>;
	before?: InputMaybe<Scalars['String']>;
	filterBy?: InputMaybe<Scalars['JSONObject']>;
	first?: InputMaybe<Scalars['Int']>;
	last?: InputMaybe<Scalars['Int']>;
	orderBy?: InputMaybe<Scalars['String']>;
	q?: InputMaybe<Scalars['String']>;
};

export type UserEdge = {
	__typename?: 'UserEdge';
	cursor: Scalars['String'];
	node: User;
};

export type UserPayload = {
	__typename?: 'UserPayload';
	errors?: Maybe<Array<Maybe<ErrorPayload>>>;
	user?: Maybe<User>;
};

export type UsersConnection = {
	__typename?: 'UsersConnection';
	edges: Array<UserEdge>;
	pageInfo: PageInfo;
	totalCount: Scalars['Int'];
};

export type LoginMutationVariables = Exact<{
	email: Scalars['EmailAddress'];
	password: Scalars['String'];
}>;

export type LoginMutation = {
	__typename?: 'Mutation';
	login: {
		__typename?: 'UserPayload';
		user?: {
			__typename?: 'User';
			id: string;
			firstName: string;
			lastName: string;
			email: any;
			active: boolean;
			verified: boolean;
			createdAt: any;
			updatedAt: any;
		} | null;
		errors?: Array<{
			__typename?: 'ErrorPayload';
			field?: string | null;
			message?: Array<string | null> | null;
		} | null> | null;
	};
};

export type GetGoogleAuthUrlQueryVariables = Exact<{ [key: string]: never }>;

export type GetGoogleAuthUrlQuery = {
	__typename?: 'Query';
	getGoogleAuthURL: string;
};

export type GoogleAuthQueryVariables = Exact<{
	code: Scalars['String'];
}>;

export type GoogleAuthQuery = {
	__typename?: 'Query';
	googleAuth: {
		__typename?: 'UserPayload';
		user?: {
			__typename?: 'User';
			id: string;
			firstName: string;
			lastName: string;
			email: any;
			active: boolean;
			verified: boolean;
			createdAt: any;
			updatedAt: any;
		} | null;
		errors?: Array<{
			__typename?: 'ErrorPayload';
			field?: string | null;
			message?: Array<string | null> | null;
		} | null> | null;
	};
};

export const LoginDocument = gql`
	mutation login($email: EmailAddress!, $password: String!) {
		login(data: { email: $email, password: $password }) {
			user {
				id
				firstName
				lastName
				email
				active
				verified
				createdAt
				updatedAt
			}
			errors {
				field
				message
			}
		}
	}
`;
export type LoginMutationFn = Apollo.MutationFunction<
	LoginMutation,
	LoginMutationVariables
>;
export type LoginMutationResult = Apollo.MutationResult<LoginMutation>;
export type LoginMutationOptions = Apollo.BaseMutationOptions<
	LoginMutation,
	LoginMutationVariables
>;
export const GetGoogleAuthUrlDocument = gql`
	query getGoogleAuthURL {
		getGoogleAuthURL
	}
`;
export type GetGoogleAuthUrlQueryResult = Apollo.QueryResult<
	GetGoogleAuthUrlQuery,
	GetGoogleAuthUrlQueryVariables
>;
export const GoogleAuthDocument = gql`
	query googleAuth($code: String!) {
		googleAuth(input: { code: $code }) {
			user {
				id
				firstName
				lastName
				email
				active
				verified
				createdAt
				updatedAt
			}
			errors {
				field
				message
			}
		}
	}
`;
export type GoogleAuthQueryResult = Apollo.QueryResult<
	GoogleAuthQuery,
	GoogleAuthQueryVariables
>;
