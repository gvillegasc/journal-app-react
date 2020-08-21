import React from 'react';

export const JournalEntry = () => {
	return (
		<div className="journal__entry pointer">
			<div
				className="journal__entry-picture"
				style={{
					backgroundSize: 'cover',
					backgroundColor: 'blue',
					backgroundImage:
						'url(https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRMls1RWL101r8l9vOXkCt21N-sHTJajKd3Dg&usqp=CAU)',
				}}
			></div>
			<div className="journal__entry-body">
				<p className="journal__entry-title">Un nuevo dia</p>
				<p className="journal__entry-content">
					Eu minim irure sint enim reprehenderit magna nostrud anim est aliqua
					do aliquip culpa.
				</p>
			</div>

			<div className="journal__entry-date-box">
				<span>Monday</span>
				<h4>28</h4>
			</div>
		</div>
	);
};
