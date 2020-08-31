import React from 'react';
import { NotesAppBar } from './NotesAppBar';
import { useSelector } from 'react-redux';
import { useForm } from '../../hooks/useForm';

export const NoteScreen = () => {
	const { active: note } = useSelector((state) => state.notes);

	const [formValues, handleInputChange] = useForm(note);

	const { body, title } = formValues;

	return (
		<div className="notes__main-content">
			<NotesAppBar />

			<div className="notes__content">
				<input
					type="text"
					placeholder="Some awesome title"
					className="notes__title-input"
					autoComplete="off"
					value={title}
					onChange={handleInputChange}
				></input>

				<textarea
					placeholder="What happened todas"
					className="notes__textarea"
					value={body}
					onChange={handleInputChange}
				></textarea>

				{note.url && (
					<div className="notes__image">
						<img
							src="https://ichef.bbci.co.uk/news/410/cpsprodpb/113AC/production/_113427507_solar_orbiter_eui-fullsun01.jpg"
							alt="imagen"
						/>
					</div>
				)}
			</div>
		</div>
	);
};
