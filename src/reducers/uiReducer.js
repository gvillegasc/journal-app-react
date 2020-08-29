import { types } from '../types/types';

const initialState = {
	loading: false,
	msgError: null,
};

export const uiReducer = (state = initialState, action) => {
	switch (action.type) {
		case types.uiSetError:
			return {
				...state,
				msgError: action.payload,
			};

		case types.uiRemoveSetError:
			return {
				...state,
				msgError: false,
			};

		default:
			return state;
	}
};
