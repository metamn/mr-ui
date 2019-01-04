import React, { Component } from 'react';
import styled, { css } from 'styled-components';
import ReactMarkdown from 'react-markdown';

import 'normalize.css'
import md from './Colors.md';
import ColorSpaces from './ColorSpaces.md';

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

class Colors extends Component {
	render() {
		const {mdSource} = this.props
		let source = ''

		if (mdSource == 'Colors') {
			source = md;
		}

		if (mdSource == 'ColorSpaces') {
			source = ColorSpaces;
		}

		return (
			<Container>
				<ReactMarkdown source={source} />
			</Container>
		)
	}
}

export default Colors;
