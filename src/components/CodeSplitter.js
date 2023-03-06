import React, { Suspense, useState } from 'react'


// lazy takes a function than returns a THENABLE promise. importing is such a thing.
const LazyBoy = React.lazy(() => import('./LazyBoy'))


export default function CodeSplitter() {
    const [showLazy, setShowLazy] = useState(false)

    if (!showLazy) return (
        <div>
            <button onClick={() => setShowLazy(true)}>Show Lazy Boy</button>
        </div>
    )

    return (
        // thiis lovely suspense component will show the fallback until it's contents has loaded.
        // probably wonderful for images or tables full of data etc.
        <Suspense fallback={<Loading />}>
            <LazyBoy />
        </Suspense>
    )
}

function Loading() {
    return (
        <p>
            Loading...
        </p>
    )
}