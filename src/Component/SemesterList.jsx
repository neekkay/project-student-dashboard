import React from "react";

function SemesterList({ handleSemesterClick, selectedSemester }) {
	
	const semesters = [
		"Winter 2026",
		"Fall 2026",
		"Summer 2026",
		"Spring 2026",
		"Winter 2025",
		"Fall 2025",
		"Summer 2025",
		"Spring 2025",
		"Winter 2024",
		"Fall 2024",
		"Summer 2024",
		"Spring 2024",
		"Winter 2023",
		"Fall 2023",
		"Summer 2023",
		"Spring 2023"
	];

	return (
		<aside className="semester-list">
			<h2>Choose a class by Start Date</h2>
			<ul>
				{semesters.map(semester => (
					<li
					 key={semester}
					 className={selectedSemester === semester ? "clickable selected" : "clickable"}
					 onClick={() => handleSemesterClick(semester)}>
						{semester}
					</li>
				))}
			</ul>
		</aside>
	);
}

export default SemesterList;
