import React, { Component } from 'react';
import styled, { css } from 'styled-components';
import CSSReset from './components/CSSReset'

import ReactMarkdown from 'react-markdown';
import md from './App.md';

import LayoutHockney from './basics/LayoutHockney'

const Container = styled.div`
	width: 100%;
	height: 100;
	padding: 1.25em;

	align-self: flex-start;
	margin-right: auto;

	font-family: monospace;
	font-size: 150%;
	max-width: 45em;
	line-height: 1.5;
`;

class App extends Component {
	render() {
		return (
			<>
				<CSSReset/>
				<LayoutHockney/>
			</>
		)
	}
}

export default App;
