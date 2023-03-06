import './App.css';
import ThemeProvider from './Theme/ThemeContext';

import { ThemeSwitcher } from './components/ThemeSwitcher';
import { MemoExample } from './components/MemoExample';
import ErrorBoundaries from './components/ErrorBoundaries';
import CodeSplitter from './components/CodeSplitter';
import UseTransition from './components/UseTransition';

function App() {
  return (
    <ThemeProvider>
      <ThemeSwitcher />
      <MemoExample />
      <ErrorBoundaries />
      <CodeSplitter />
      <UseTransition />
    </ThemeProvider>
  );
}



export default App;