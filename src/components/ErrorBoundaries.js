import React from 'react'

// used to log error info
// componentDidCatch()

// used to render a fallback UI when error is thrown
// static getDerivedStateFromError()

// render, constructor and lifecycle of all children. NOT INSIDE THE COMPONENT ITSELF

export default function ErrorBoundaries() {
    return (
        <>
            <ErrorBoundary>
                <Errorneous name="David" />
            </ErrorBoundary>
            <ErrorBoundary>
                <Errorneous name="Error" />
            </ErrorBoundary>
        </>
    )
}

class ErrorBoundary extends React.Component {
    state = {
        hasError: false
    }

    static getDerivedStateFromError(error) {
        return {
            hasError: true
        }
    }

    componentDidCatch(error, info) {
        console.log(error)
        console.log(info)
    }

    render() {
        if (this.state.hasError) {
            return (
                <div>
                    <p>
                        We have an Error!
                    </p>
                    <p>

                    </p>
                </div>
            )
        }

        return this.props.children
    }
}



function Errorneous({ name }) {
    if (name === 'Error') {
        throw new Error('You made a mistake BRO')
    }

    return (
        <div>
            {name}
        </div>
    )
}