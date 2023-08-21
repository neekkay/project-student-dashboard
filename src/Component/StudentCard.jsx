import React from "react";

export default function StudentCard({student}) {
	return (
		<div className="student-card">
			<div className="student-image">
				<img src={student.profilePhoto} alt={`${student.name}'s Profile`} />
			</div>
			<div className="student-details">
				<h2>{student.name}</h2>
				<p>Email: {student.email}</p>
				<p>Birthday: {student.dob}</p>
			</div>
		</div>
	)
}