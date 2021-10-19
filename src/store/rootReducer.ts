import { AnyAction, combineReducers } from 'redux';
// reducers
import authentication from '@modules/authentication';
import internalServerError from '@modules/internalServerError';
import snack from '@modules/snack';
import user from '@modules/user';
import userRoles from '@modules/userRoles';
import redirect from '@modules/redirect';
// types
import { State as User, LOG_OUT_USER } from '@modules/user/types';
import { State as Authentication } from '@modules/authentication/types';
import { State as UserRoles } from '@modules/userRoles/types';
import { State as Redirect } from '@modules/redirect/types';

export type IRootState = {
	internalServerError: any;
	snack: any;
	user: User;
	userRoles: UserRoles;
	activityLogs: any;
	authentication: Authentication;
	redirect: Redirect;
};

const appReducer = combineReducers({
	internalServerError,
	snack,
	user,
	userRoles,
	authentication,
	redirect,
});

const rootReducer = (
	state: ReturnType<typeof appReducer> | any,
	action: AnyAction
) => {
	if (action.type === LOG_OUT_USER) {
		return {
			...state,
			internalServerError: {
				error: false,
			},
		};
	}

	return appReducer(state, action);
};

export type OurStore = IRootState;

export default rootReducer;
