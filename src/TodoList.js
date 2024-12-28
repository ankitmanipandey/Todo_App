import React, { useState } from 'react'

export default function TodoList({ task, id, setToDo }) {
    const [isChecked, setIsChecked] = useState(false)
    const handleSpanClick = (e) => {
        setIsChecked(e.target.checked)
    }
    const handleDeleteBtn = () => {
        setToDo((prev) => {
            const updatedToDo = prev.filter((item) => item.id !== id);
            localStorage.setItem('todo', JSON.stringify(updatedToDo))
            return updatedToDo.map((item, index) => ({ ...item, id: index }));
        });
    };
    return (
        <div className='h-16 bg-black opacity-70 flex justify-between my-2 rounded-md'>
            <div className='flex gap-4 my-auto items-center'>
                <span className='mx-2' >
                    <input type="checkbox" className='w-9 h-4' onClick={handleSpanClick} />
                </span>
                <div></div>
                <li className={`list-none text-white text-lg ${isChecked ? "line-through" : "decoration-none"}`}>
                    {task}
                </li>
            </div>
            <div className='mx-10 my-auto flex'>
                <button className='w-4 px-5 py-3 flex border justify-center items-center rounded-full hover:border-red-900' onClick={handleDeleteBtn}>
                    <i className="fa-solid fa-trash text-white"></i>
                </button>
            </div>
        </div>
    )
}
