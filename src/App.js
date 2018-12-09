import React, { Component } from 'react';
import styled, { css } from 'styled-components';
import 'normalize.css'

const Container = styled.div`
	overflow: hidden;
	background-color: lightyellow;
	width: ${props => props.width ? props.width : 'auto'};
`;

class App extends Component {
	render() {
		const width = this.props.width;

		return (
			<Container width={width}>
			'app'
			</Container>
		);
	}
}

export default App;
