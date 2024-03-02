import React from 'react'

const ProjectAttendance = ({setProjectattendance}) => {
  return (
    <>
    <p className="go-back" onClick={() => setProjectattendance(false)}>Go Back to Projects list</p>
    <div className='project-container'>
      <div >
        <p>ProjectAttendance</p>
      </div>
    </div>
    </>
    
  )
}

export default ProjectAttendance
