import React from "react";

export default function StudentList({student}) {
  return (
	 <div className="student">
         <img
           src={student.profilePhoto}
           alt={`${student.names.preferredName}'s profile`}
           className="student-image"
         />
         <div className="student-details">
           <h2>{student.names.preferredName}</h2>
           <p>{student.username}</p>
           <p>{student.dob}</p>
         </div>
         </div> 
        




    
  );
}
