/* eslint-disable react/no-unescaped-entities */
import { Box, Grid, TextField, Button } from '@mui/material';
import { GoogleIcon, DividerWithText } from '@components/atoms';
import { useDispatch } from 'react-redux';
import useFormState from '@hooks/useFormState';
import { loginAccount } from '@modules/authentication';
import validate from 'validate.js';

const schema = {
	email: {
		presence: { allowEmpty: false, message: 'is required' },
		email: true,
		length: {
			maximum: 300,
		},
	},
};

const Form = (): JSX.Element => {
	const dispatch = useDispatch();

	const { values, isValid, errors, hasError, handleFormChange, handleSubmit } =
		useFormState({
			onSubmit: ({ email, password }) =>
				dispatch(loginAccount({ email, password })),
			formErrors: (formValues) => validate(formValues, schema),
		});

	const handleLogin = () =>
		window.location.replace(
			`${process.env.NEXT_PUBLIC_ALMOND_API}/auth/google`
		);

	return (
		<Box>
			<form name="email-login" onSubmit={handleSubmit}>
				<Grid container spacing={4}>
					<Grid item xs={12}>
						<TextField
							placeholder="Email"
							label="Email *"
							variant="outlined"
							size="medium"
							name="email"
							fullWidth
							helperText={hasError('email') ? errors.email[0] : null}
							error={hasError('email')}
							onChange={handleFormChange}
							type="email"
							value={values.email || ''}
						/>
					</Grid>

					<Grid item container xs={12}>
						<Box
							display="flex"
							flexDirection={{ xs: 'column', sm: 'row' }}
							alignItems={{ xs: 'stretched', sm: 'center' }}
							justifyContent={'space-between'}
							width={1}
							maxWidth={600}
							margin={'0 auto'}
						>
							<Button
								size="large"
								variant="contained"
								type="submit"
								color="primary"
								fullWidth
								disabled={!isValid}
							>
								Continue with Email
							</Button>
						</Box>
					</Grid>

					<Grid item xs={12}>
						<DividerWithText>OR</DividerWithText>
					</Grid>

					<Grid item xs={12}>
						<Button
							size="large"
							variant="outlined"
							fullWidth
							startIcon={<GoogleIcon />}
							onClick={handleLogin}
						>
							Continue with Google
						</Button>
					</Grid>
				</Grid>
			</form>
		</Box>
	);
};

export default Form;
