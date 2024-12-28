import React from 'react'

export default function ({ isDark, setIsDark }) {
    const date = new Date();
    const handleDarkMode = () => {
        setIsDark(!isDark)
    }
    return (
        <div>
            <div className='relative h-10 text-white flex justify-between'>
                <h1 className={`text-2xl mx-9 ${isDark ? "text-white" : "text-black"}`}>My Day</h1>
                <div className='h-10 mx-10 flex items-center text-xl'>
                    <button onClick={handleDarkMode}>
                        <i className={`fa-regular ${isDark ? "fa-sun" : "fa-moon"} ${isDark ? "text-white" : "text-black"}`}></i>
                    </button>
                </div>
            </div>
            <div className={`h-10 relative text-md mx-8 ${isDark ? "text-white" : "text-black"}`}>{date.toLocaleDateString()}</div>
        </div>
    )
}
