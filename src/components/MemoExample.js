import React, { useMemo, useState } from 'react'

export const MemoExample = () => {
    const [value, setValue] = useState()
    const [count, setCount] = useState()

    console.log("Rendering Memo")

    // This will only fire once
    // we could add dependencies, and it would fire again when those deps change.
    useMemo(() => {
        console.log('Running another expensive function')

        let i = 0

        while (i < 100000000) {
            i++
        }

        setCount(i)
    }, [])

    return (
        <div>
            <input onChange={(e) => setValue(e.target.value)} value={value} />
            <p>{count}</p>
            <ExpensiveComponent />
        </div>
    )
}

// using a memo here means that it DOESNT rerender every time the input above changes. Juicy eh.
const ExpensiveComponent = React.memo(() => {
    console.log('rendering expensive component')

    const expensiveFunction = () => {
        let i = 0

        while (i < 100000000) {
            i++
        }

        return i
    }

    const count = expensiveFunction()

    return (
        <p>
            {count}
        </p>
    )
})