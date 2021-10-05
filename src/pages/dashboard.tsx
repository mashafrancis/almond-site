import DashboardContainer from 'views/DashboardContainer';
import dynamic from 'next/dynamic';
import { ReactNode } from 'react';
// import {user} from "../store/authorize";
// import {Dispatch} from "redux";
// import {getUserDetails} from "@modules/user";

// Dynamically import the AuthGuard component.
const AuthGuard = dynamic<{ readonly customText: ReactNode }>(() =>
	import('../components/AuthGuard').then((mod) => mod.AuthGuard)
);

const DashboardPage = (): JSX.Element => {
	return (
		<AuthGuard customText={undefined}>
			<DashboardContainer />
		</AuthGuard>
	);
};

// export const getServerSideProps = user({
// 	callback: async (_, store) => {
// 		const { dispatch }: { dispatch: Dispatch } = store
// 		await dispatch(getUserDetails())
//
// 		return {
// 			props: {
// 				frogs: store.getState().frogsReducer.frogs,
// 			},
// 		}
// 	},
// })

export default DashboardPage;
