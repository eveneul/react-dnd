import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import { defaultTheme } from './theme';

const GlobalStyle = createGlobalStyle`
	* {margin: 0; padding: 0; box-sizing: border-box}
	body {background-color: ${(props) => props.theme.bgColor}}
	ul, ol {list-style: none}
	a {color: inherit; text-decoration:none;}
`;

const root = ReactDOM.createRoot(
	document.getElementById('root') as HTMLElement
);
root.render(
	<>
		<ThemeProvider theme={defaultTheme}>
			<GlobalStyle />
			<App />
		</ThemeProvider>
	</>
);
