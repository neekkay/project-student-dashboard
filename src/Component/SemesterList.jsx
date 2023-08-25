import React from "react";
  
 function SemesterList ({handleSemesterClick, selectedSemester}) {
	const semesters = [
		"Winter2026",
		"Fall2026",
		"Summer2026",
		"Spring2026",
		"Winter2025",
		"Fall2025",
		"Summer2025",
		"Spring2025",
		"Winter2024",
		"Fall2024",
		"Summer2024",
		"Spring2024",
		"Winter2023",
		"Fall2023",
		"Summer2023",
		"Spring2023"	
	];

	return (
		<aside className="semester-list">
			<h2>Choose a class by Start Date</h2>
			<ul>
				<li key = {semester} onClick={() => handleSemesterClick(semester)}>{semester}
			</li>
			</ul>
		</aside>
	)
}
export default SemesterList;