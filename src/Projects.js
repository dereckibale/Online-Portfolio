import React from 'react'
import {useState} from 'react'
import PA from './ProjectAttendance'
const Project = () => {

  const [projectAttendance, setProjectattendance] = useState(true)
  const [todolist, setTodolist] = useState(false)
  const [chatwebapp, setChatwebapp] = useState(false)
  const [robotictanggero, setRobotictanggero] = useState(false)
  const [sensorevaluator, setSensorevaluator] = useState(false)
  const [colorbox, setColorbox] = useState(false)
  const [calculator, setCalculator] = useState(false)

  const ProjectAttendance = () => {
    setProjectattendance(true)
    setTodolist(false)
    setChatwebapp(false)
    setRobotictanggero(false)
    setSensorevaluator(false)
    setColorbox(false)
    setCalculator(false)
    console.log("ProjectAttendance")
  }
  const Todolist = () => {
    setProjectattendance(false)
    setTodolist(true)
    setChatwebapp(false)
    setRobotictanggero(false)
    setSensorevaluator(false)
    setColorbox(false)
    setCalculator(false)
    console.log("Todolist")
  }
  const Chatwebapp = () => {
    setProjectattendance(false)
    setTodolist(false)
    setChatwebapp(true)
    setRobotictanggero(false)
    setSensorevaluator(false)
    setColorbox(false)
    setCalculator(false)
    console.log("Chatwebapp")
  }
  const Robotictanggero = () => {
    setProjectattendance(false)
    setTodolist(false)
    setChatwebapp(false)
    setRobotictanggero(true)
    setSensorevaluator(false)
    setColorbox(false)
    setCalculator(false)
    console.log("Robotictanggero")
  }
  const Sensorevaluator = () => {
    setProjectattendance(false)
    setTodolist(false)
    setChatwebapp(false)
    setRobotictanggero(false)
    setSensorevaluator(true)
    setColorbox(false)
    setCalculator(false)
    console.log("Sensorevaluator")
  }
  const Colorbox = () => {
    setProjectattendance(false)
    setTodolist(false)
    setChatwebapp(false)
    setRobotictanggero(false)
    setSensorevaluator(false)
    setColorbox(true)
    setCalculator(false)
    console.log("Colorbox")
  }
  const Calculator = () => {
    setProjectattendance(false)
    setTodolist(false)
    setChatwebapp(false)
    setRobotictanggero(false)
    setSensorevaluator(false)
    setColorbox(false)
    setCalculator(true)
    console.log("Calculator")
  }
  return (
    <>
      {(!projectAttendance && !todolist && !chatwebapp && !robotictanggero && !sensorevaluator && !colorbox && !calculator) && (
      <>
        <div className="project-list">List of Projects</div>
        <ul className="list-of-projects">
          <p className="Project-Attendance" onClick={ProjectAttendance}>Project Attendance</p>
          <p className="To-do-list" onClick={Todolist}>To-do-list</p>
          <p className="Chat-WebApp" onClick={Chatwebapp}>Chat-WebApp</p>
          <p className="Robotic-Tanggero" onClick={Robotictanggero}>Robotic-Tanggero</p>
          <p className="Sensor-Evaluator" onClick={Sensorevaluator}>Sensor Evaluator</p>
          <p className="Color-Box" onClick={Colorbox}>Color-Box</p>
          <p className="Calculator" onClick={Calculator}>Calculator</p>
        </ul>
      </>
      )}

      {projectAttendance && <PA 
                            setProjectattendance={setProjectattendance}/>
      }
    </>
    
  )
}

export default Project
