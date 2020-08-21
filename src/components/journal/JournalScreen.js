import React from 'react';
import { Sidebar } from './Sidebar';
import { NoteScreen } from '../notes/NoteScreen';
// import { NothingSelected } from './NothingSelected';

export const JournalScreen = () => {
	return (
		<div className="journal__main-context">
			<Sidebar />

			<main>
				{/* <NothingSelected /> */}
				<NoteScreen />
			</main>
		</div>
	);
};
