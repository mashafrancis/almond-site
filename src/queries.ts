import { gql } from '@apollo/client';

const GET_ALL_POSTS = gql`
	query AllPosts {
		posts(first: 20, where: { orderby: { field: DATE, order: DESC } }) {
			edges {
				node {
					title
					excerpt
					slug
					date
					tags {
						edges {
							node {
								id
								name
							}
						}
					}
					featuredImage {
						node {
							sourceUrl
						}
					}
					author {
						node {
							name
							firstName
							lastName
							avatar {
								url
							}
						}
					}
				}
			}
		}
	}
`;

export { GET_ALL_POSTS };
