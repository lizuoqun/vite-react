import React, {useContext, useState} from 'react';
import {Button} from 'antd';

interface ThemeContextType {
  theme: string;
  setTheme: (theme: string) => void;
}

const ThemeContext = React.createContext<ThemeContextType>({} as ThemeContextType);

const Child = () => {
  const themeContext = useContext(ThemeContext);
  return <>
    <h1 style={themeContext.styles}>Child</h1>
    <Button type="primary" onClick={() => console.log(themeContext)}>getTheme</Button>
  </>;
};

const Parent = () => {
  const themeContext = useContext(ThemeContext);
  return <>
    <h1 style={themeContext.styles}>Parent</h1>
    <hr/>
    <Child/>
  </>;
};

const useContextHook = () => {
  const [theme, setTheme] = useState<string>('light');
  const styles = {
    backgroundColor: theme === 'light' ? 'white' : 'black',
    color: theme === 'light' ? 'black' : 'white'
  };
  return <>
    <h1 style={styles}>useContextHook</h1>
    <Button type="primary" onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>toggleTheme</Button>
    <hr/>
    <ThemeContext value={{theme, styles, setTheme}}>
      <Parent/>
    </ThemeContext>
  </>;
};

export default useContextHook;
