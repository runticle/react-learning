import './App.css';
import ThemeProvider from './Theme/ThemeContext';

import { ThemeSwitcher } from './components/ThemeSwitcher';
import { MemoExample } from './components/MemoExample';
import ErrorBoundaries from './components/ErrorBoundaries';
import CodeSplitter from './components/CodeSplitter';

function App() {
  return (
    <ThemeProvider>
      <ThemeSwitcher />
      <MemoExample />
      <ErrorBoundaries />
      <CodeSplitter />
    </ThemeProvider>
  );
}



export default App;