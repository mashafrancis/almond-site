import { ReactNode } from 'react';
import {
	Button,
	Dialog,
	DialogActions,
	DialogContent, DialogContentText,
	DialogTitle,
	IconButton,
	styled,
} from '@mui/material';
import { Close } from '@mui/icons-material';
import { ModalProps } from '@components/atoms/Modal/interfaces';

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
	'& .MuDialogContent-root': {
		padding: theme.spacing(2),
	},
	'& .MuDialogActions-root': {
		padding: theme.spacing(1),
	},
	'& .MuiDialog-paper': {
		borderRadius: 12
	}
}));

export interface DialogTitleProps {
	id: string;
	children?: ReactNode;
	onClose: () => void;
}

const BootstrapDialogTitle = ({children, onClose, ...other}: DialogTitleProps) => (
		<DialogTitle sx={{ m: 0, p: 2, backgroundColor: theme => theme.palette.primary.main, color: (theme) => theme.palette.common.white, }} {...other}>
			{children}
			{onClose ? (
				<IconButton
					aria-label="close"
					onClick={onClose}
					sx={{
						position: 'absolute',
						right: 8,
						top: 8,
						color: (theme) => theme.palette.common.white,
					}}
				>
					<Close />
				</IconButton>
			) : null}
		</DialogTitle>
	);

const Modal = ({
	isModalOpen,
	renderContent,
	fullScreen,
	onClose,
	renderHeader,
	submitButtonName,
	onSubmit,
	onDismiss,
	disabled = false,
	renderDialogText,
}: ModalProps): JSX.Element => {
	return (
		<BootstrapDialog
			onClose={onClose}
			aria-labelledby="customized-dialog-title"
			open={isModalOpen}
			fullScreen={fullScreen}
			maxWidth="xs"
		>
			<BootstrapDialogTitle id="customized-dialog-title" onClose={onClose}>
				{renderHeader}
			</BootstrapDialogTitle>
			<DialogContent dividers>
				<DialogContentText
					gutterBottom
				>
					{renderDialogText}
				</DialogContentText>
				{renderContent}
			</DialogContent>
			<DialogActions>
				<Button variant="text" color="primary" onClick={onDismiss}>
					DISMISS
				</Button>
				{
					disabled && <Button autoFocus onClick={onSubmit} disabled={disabled}>
						{submitButtonName}
					</Button>
				}
			</DialogActions>
		</BootstrapDialog>
	);
};

export default Modal;
