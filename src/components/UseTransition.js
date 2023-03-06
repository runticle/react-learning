import React, { useState, useTransition } from 'react'

export default function UseTransition() {
    const [isPending, startTransition] = useTransition()
    const [value, setValue] = useState("")
    const [list, setList] = useState([])

    function handleChange(e) {
        // we want to be quick
        setValue(e.target.value)
        // this is all low priority
        // it basically tells react to wait until nothing is happening to do this 
        startTransition(() => {
            const l = []
            for (let i = 0; i < 5000; i++) {
                l.push(e.target.value)
            }
            setList(l)
        })
    }

    return (
        <div>
            <h1>
                UseTransition
            </h1>
            <input type="text" value={value} onChange={handleChange} />

            {
                isPending ? <p>Loading...</p> : list.map((item, index) => <div key={index}>{item}</div>)
            }
        </div>
    )
}