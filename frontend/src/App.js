import Home from './components/Home'
import React,{useState} from 'react';
import {lightTheme, darkTheme,GlobalStyle} from './themes'
import styled, {ThemeProvider} from 'styled-components'


const StyledApp = styled.div`
color : ${props => props.theme.fontColor};
`;

function App() {

  const [theme,setTheme] = useState('light')

  const themeToggler = ()=> {
    theme === 'light' ? setTheme('dark') : setTheme('light')
  }
  

  return (
  
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <GlobalStyle/>
    <StyledApp>
     <button className='togglebtn' onClick={() => themeToggler()}><img src={require("./picture/toggle.png").default} className='project-img1'/></button>
       <Home/>
       
    </StyledApp>
      
    </ThemeProvider>
   
    
   
  
  );
}

export default App;
