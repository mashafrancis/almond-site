import { ReactNode } from 'react';

export interface ModalProps {
	isModalOpen: boolean;
	renderHeader: ReactNode | string | null;
	renderContent?: ReactNode;
	renderDialogText?: ReactNode;
	fullScreen?: boolean;
	onClose: (e?) => void;
	submitButtonName?: string;
	disabled?: boolean;
	onSubmit?: (e?) => void;
	onDismiss?: (e?) => void;
	innerRef?: any;
}
