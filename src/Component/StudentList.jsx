import React from "react";

export function capitalizeInitial(str) {
  if (!str) return "";
  return str.charAt(0).toUpperCase() + ".";
}

export function formatDate(dateString) {
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  return new Date(dateString).toLocaleDateString(undefined, options);
}

export default function StudentList({student}) {
  return (
	 <div className="student">
         <img
           src={student.profilePhoto}
           alt={`${student.names.preferredName}'s profile`}
           className="student-image"
         />
         <div className="student-details">
           <h2>
            {student.names.preferredName} {" "}
            {capitalizeInitial(student.names.middleName)}{" "}
           {student.names.surname}
           </h2>
           <p>{student.username}</p>
           <p>{formatDate(student.dob)}</p>
         </div>
         </div> 
        




    
  );
}
