import React from 'react';
import { Sidebar } from './Sidebar';
import { NothingSelected } from './NothingSelected';

export const JournalScreen = () => {
	return (
		<div className="journal__main-context">
			<Sidebar />

			<main>
				<NothingSelected />
			</main>
		</div>
	);
};
