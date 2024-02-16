import React from 'react'
import from './Button.jsx'
import noProjectImage from '../assests/no-projects.png'

export default function NoProjectSelected() {
  return (
    <div className="mt-24 text-center w-2/3">
      <img
      src={noProjectImage}
      alt="An empty task list"
      className="w-16 h-16 object-contain" />
      <h2 className="text-xl font-bold text-stone-500 my-4">No project Selected</h2>
      <p> Select a project or get started with a new one</p>
      <Button>Create new project</Button>
    </div>
  )
}
