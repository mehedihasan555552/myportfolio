import {createGlobalStyle} from 'styled-components'

export const lightTheme = {
    body: 'white',
    fontColor: '#000'
}

export const darkTheme = {
    body: '#293745',
    fontColor: '#fff' 
    
}

export const GlobalStyle = createGlobalStyle `

body {
    background-color: ${(props) => props.theme.body};
}

`