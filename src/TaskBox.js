import React, { useState } from 'react'
export default function TaskBox({ setToDo, toDo }) {
    const [task, setTask] = useState("")
    const handleOnChange = (e) => {
        setTask(e.target.value)
    }
    const handleEnterKey = (event) => {
        if (event.key === "Enter")
            handleAddClick();
    }
    const handleAddClick = () => {
        if (task.trim() === '') return
        setToDo((prev) => [...prev, { task: task, id: toDo.length }])
        setTask('')
    }

    return (
        <div className='absolute w-full bottom-20 md:bottom-10 flex justify-center px-4'>
            <div className='z-10 relative w-9/12'>
                <input
                    type="text"
                    value={task}
                    onChange={handleOnChange}
                    onKeyDown={handleEnterKey}
                    placeholder="Try typing 'Practice for Web Dev Project'"
                    className='w-full h-12 bg-black opacity-70 text-white p-5 pr-16 text-lg outline-none rounded-md'
                />
                <button className='absolute right-2 top-1/2 transform -translate-y-1/2 h-10 w-10 text-xl text-white rounded-full hover:border-green-400 flex items-center justify-center border' onClick={handleAddClick}><i className="fa-regular fa-floppy-disk"></i></button>
            </div>
        </div>
    )
}
