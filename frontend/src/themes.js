import {createGlobalStyle} from 'styled-components'

export const lightTheme = {
    body: '#fff',
    fontColor: '#000'
}

export const darkTheme = {
    body: '#323232',
    fontColor: '#fff' 
    
}

export const GlobalStyle = createGlobalStyle `

body {
    background-color: ${(props) => props.theme.body};
}

`