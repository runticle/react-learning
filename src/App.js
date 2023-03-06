import './App.css';
import ThemeProvider from './Theme/ThemeContext';

import { ThemeSwitcher } from './components/ThemeSwitcher';
import { MemoExample } from './components/MemoExample';

function App() {
  return (
    <ThemeProvider>
      <ThemeSwitcher />
      <MemoExample />
    </ThemeProvider>
  );
}



export default App;