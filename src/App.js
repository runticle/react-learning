import './App.css';
import ThemeProvider from './Theme/ThemeContext';

import { ThemeSwitcher } from './components/ThemeSwitcher';
import { MemoExample } from './components/MemoExample';
import ErrorBoundaries from './components/ErrorBoundaries';

function App() {
  return (
    <ThemeProvider>
      <ThemeSwitcher />
      <MemoExample />
      <ErrorBoundaries />
    </ThemeProvider>
  );
}



export default App;