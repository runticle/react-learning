import React, { useContext, useState } from 'react'

const ThemeContext = React.createContext()
const ThemeUpdateContext = React.createContext()

export function useTheme() {
    const theme = useContext(ThemeContext)
    const update = useContext(ThemeUpdateContext)

    return [theme, update]
}

export default function ThemeProvider({ children }) {
    const [darkTheme, setDarkTheme] = useState(false) // default to light theme

    function toggleTheme() {
        setDarkTheme(prev => !prev)
    }

    return (
        // so we wrap everything in a themecontext, which provides access to the value of darkTheme to any child who wants it.
        // then we also wrap in ThemUpdateContext, which provides access to the toggle switch to any child.
        // then we expose a useTheme custom hook which physically gives access to any child who wants it
        // then we wrap our App component in the ThemeProvider and we're good. 
        <ThemeContext.Provider value={darkTheme} >
            <ThemeUpdateContext.Provider value={toggleTheme}>
                {children}
            </ThemeUpdateContext.Provider>
        </ThemeContext.Provider>
    )
}