# React Practice

Just a few examples of the Reacty things I've learnt since returning to the `codelyf`

## Context

React Context is useful to grant access to child components without having to pass props down in some ugly chain. 
A ThemeSwitcher is a good example. We can use React context to create a provider that wraps around our App component.
With a little hocus pocus we can make a ThemeSwitcher component (the provider) and a customer useTheme hook. This useTheme hook returns `[darkTheme, toggleTheme]` and any Child component of the provider can import it and use it.

## Memo

React.memo can be used to greatly improve performance. We use React.memo to wrap a Component we want to Memoize. This component will only be rerendered if it needs to, instead of every time it's parent rerenders for example. You can avoid doing this by wrapping the expensive component in a "provider" and using `{children}` syntax. 

The useMemo hook is useful for wrapping a function that we only need to fire once, or whenever a certain dependency changes.

Important to note that if possible, probably try to avoid using memo. It uses temporary caching and is _not_ guaranteed to work every time, if we use it too much.

## Error Boundaries

A nice way to handle errors in the application. Make a class component to wrap around parts of code you want to protect. We use `componentDidCatch` for logging errors and maybe sending them to a bug service. We use `static getDerivedStateFromError` to render a fallback UI when we catch an error. 

We need to be careful where we put our ErrorBoundary  as it will not render the any of the children if it encounters an error, which could lead to use hiding a lot of useful working components.

Any error from any of it's child components will bubble up to the Boundary. An error _inside_ the boundary will not be caught, and will instead bubble up to the next boundary above in the DOM. 

## CodeSplitting

A useful mechanic for saving on performance. Apps are often bundled into a single file by tools like webpack. Webpack would follow the imports and merge all code into one file. Apps can be huge, and this can be silly. So we can split bundles. We can define boundaries where code should be 'split' into more bundles. 

We can use syntax like dynamic imports which webpack will automatically split. `import('./algebra').then(algerbra => { // do some algebra })` 

Or we can use `React.lazy`. A good example is for our Routes. It has been said that users are used to having to wait for a new page to load. Obviously with React using SinglePageApp tings, these 'page loads' can be pretty instant. But if we wrap our different routes in the lazy HOC, all the code from those routes and beyond will be bundled separately, and loaded when the user first loads the page. After the initial load, the bundle is already loaded and subsequent loads will be rapid. 

Using lazy should use default exports. If you need to, just make another file that exports the component you need by default. You can also achieve it with a `.then(module => ({ default: module.YourModule }))`. 

We should use the `Suspense` component, to render a fallback (often "Loading...") component while we wait for the dynamic import.

## UseTransition

This is a hook (concept is also available in class componenents) which essentially tells React to set the priority of some piece of code to low. It will then basically do everything else until it has nothing do and then the low priority code will run. You wrap a low priority function in `startTransition(() => ...)`. Very simple. You also get `isPending` from the hook `const [isPending, startTransition] = useTransition()`. This can be used to render a Loading... while the user waits.

Don't overuse it. It tends to make your component render more times as you render once the high priority code runs and then again once the transition finishes. 