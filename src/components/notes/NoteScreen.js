import React from 'react';
import { NotesAppBar } from './NotesAppBar';

export const NoteScreen = () => {
	return (
		<div className="notes__main-content">
			<NotesAppBar />

			<div className="notes__content">
				<input
					type="text"
					placeholder="Some awesome title"
					className="notes__title-input"
					autoComplete="off"
				></input>

				<textarea
					placeholder="What happened todas"
					className="notes__textarea"
				></textarea>

				<div className="notes__image">
					<img
						src="https://ichef.bbci.co.uk/news/410/cpsprodpb/113AC/production/_113427507_solar_orbiter_eui-fullsun01.jpg"
						alt="imagen"
					/>
				</div>
			</div>
		</div>
	);
};
