import React, { Suspense, useState } from 'react'


// lazy takes a function than returns a THENABLE promise. importing is such a thing.
// Sleep just to demonstrate loading in suspense
const LazyBoy = React.lazy(() => sleep(1000).then(() => import('./LazyBoy')))

export default function CodeSplitter() {
    const [showLazy, setShowLazy] = useState(false)

    return (
        <div>
            <h1>
                Code Splitter
            </h1>
            <button onClick={() => setShowLazy(prev => !prev)}>Toggle Lazy Boy</button>
            {
                // this lovely suspense component will show the fallback until it's contents has loaded.
                // probably wonderful for images or tables full of data etc.
                showLazy ? <Suspense fallback={<Loading />}>
                    <LazyBoy />
                </Suspense> : null
            }
        </div>
    )
}

function Loading() {
    return (
        <p>
            Loading...
        </p>
    )
}

function sleep(time) {
    return new Promise(resolve => {
        setTimeout(resolve, time)
    })
}