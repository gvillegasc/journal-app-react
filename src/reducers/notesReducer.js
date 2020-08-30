// {
//     notes: [],
//     active: [],
//     active: {
//         id: '12332dsafdansdna12',
//         title: '',
//         body: '',
//         imageUrl: '',
//         date: 2020-02-10
//     }
// }

import { types } from '../types/types';

const initialState = {
	notes: [],
	active: null,
};

export const notesReducer = (state = initialState, action) => {
	switch (action.type) {
		case types.notesActive:
			return {
				...state,
				active: {
					...action.payload,
				},
			};

		default:
			return state;
	}
};
