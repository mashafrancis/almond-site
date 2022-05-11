import { gql } from '@apollo/client';

const LOGIN = gql`
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

const GET_GOOGLE_AUTH_URL = gql`
	query getGoogleAuthURL {
		getGoogleAuthURL
	}
`;

const GOOGLE_AUTH = gql`
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

export { LOGIN, GET_GOOGLE_AUTH_URL, GOOGLE_AUTH };
