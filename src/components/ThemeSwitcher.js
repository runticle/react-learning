import React from 'react'
import { useTheme } from '../Theme/ThemeContext'

export const ThemeSwitcher = () => {
    const [darkTheme, toggleTheme] = useTheme()

    console.log('Theme', darkTheme, toggleTheme)


    const pstyle = {
        color: darkTheme ? 'white' : 'black',
        backgroundColor: darkTheme ? 'black' : 'white',
    }
    return (
        <div>
            <p style={pstyle}>
                Hello world
            </p>
            <button onClick={toggleTheme} >Toggle Theme</button>
        </div>
    )
}