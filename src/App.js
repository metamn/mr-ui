import React, { Component } from 'react';
import styled, { css } from 'styled-components';
import ReactMarkdown from 'react-markdown';

import 'normalize.css'
import md from './App.md';

const Container = styled.div`
	width: 100%;
	height: 100;
	padding: 1.25em;
	align-self: flex-start;
	font-family: monospace;
`;

class App extends Component {
	render() {
		return (
			<Container>
				<ReactMarkdown source={md} />
			</Container>
		)
	}
}

export default App;
