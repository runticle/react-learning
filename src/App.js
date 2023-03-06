import './App.css';
import ThemeProvider from './Theme/ThemeContext';

import { ThemeSwitcher } from './components/ThemeSwitcher';

function App() {
  return (
    <ThemeProvider>
      <ThemeSwitcher />
    </ThemeProvider>
  );
}



export default App;