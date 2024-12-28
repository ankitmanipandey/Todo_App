import React from 'react'
import light_bg from './assets/light_bg.jpg'
import dark_bg from './assets/dark_bg.jpg'

export default function Background({ isDark }) {
    return (
        <div>
            <img src={isDark ? dark_bg : light_bg}
                alt="backgroundImage"
                className='absolute top-0 left-0 h-full w-full object-cover'
            />
        </div>
    )
}
