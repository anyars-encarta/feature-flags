import useLocalStorage from './useLocalStorage';
import './styles.css';

const LightDarkMode = () => {
  const [theme, setTheme] = useLocalStorage('theme', 'dark');

  const handleToggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <div className="light-dark-mode" data-theme={theme}>
      <div className="container">
        <p>Hello World !</p>
        <button type="button" onClick={handleToggleTheme}>Change Theme</button>
      </div>
    </div>
  );
};

export default LightDarkMode;
