import React from 'react'

export default function Student({student}) {
	
  return (
	<div>
	  <h3>{student.codewars}: </h3>
	  <p>{student.codewars.current.total}</p>
	</div>
  )
}
