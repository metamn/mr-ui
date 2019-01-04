/**
* HSL colors component
*
*/
import React from "react";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";

import ReactMarkdown from 'react-markdown';
import text from './ColorsHSL.md';

import { ChromePicker } from 'react-color';
import chroma from 'chroma-js'

/**
* The loading container
*/
const Loading = styled.div``;

/**
* The main container
*/
const Container = styled.div`
	align-self: flex-start;
	width: 100%;
	height: 100%;
	margin: 1.25em;

	background: ${props => props.backgroundColor};
	color: ${props => props.textColor};

	font-family: monospace;
	font-size: 150%;

	display: grid;

	@media (min-width: 1024px) {
		grid-template-columns: 1fr 1fr;
		grid-gap: 1.25em;
	}
`;

/**
 * The text container
 */
const Text = styled.div`
	border: 1px solid;
	padding: 1.25em;
`


/**
 * The inverted text container
 */
const TextInverted = styled(Text)`
	background: ${props => props.textColor};
	color: ${props => props.backgroundColor};
`

/**
 * The color pickers container
 */
const Pickers = styled.div``


/**
* The main class
*/
class ColorsHSL extends React.Component {
	constructor(props) {
		super(props)

		this.state = {
			backgroundColor: 'hsla(180, 85%, 85%, 1)',
			textColor: 'black',
		}
	}

	pickBackgroundColor = (color) => {
		console.log(color.hex);
		this.setState(
			{
				backgroundColor: color.hex
			}
		);
	}

	colorContrast(backgroundColor, textColor) {
		const contrast = chroma.contrast(chroma(backgroundColor), chroma(textColor))
		return contrast.toFixed(1)
	}

	render() {
		const { loading, className } = this.props;
		const { backgroundColor, textColor} = this.state;

		if (loading) {
			return <Loading className={className}>Loading ...</Loading>;
		}

		return (
			<Container
				className={className}
				backgroundColor={backgroundColor}
				textColor={textColor}
				>
				<Text>
					color contrast: {this.colorContrast(backgroundColor, textColor)}
					<ReactMarkdown source={text} />
				</Text>
				<Pickers>
					<ChromePicker
						color={backgroundColor}
						onChangeComplete={this.pickBackgroundColor}
					/>
				</Pickers>
				<TextInverted
					backgroundColor={backgroundColor}
					textColor={textColor}
					>
					color contrast: {this.colorContrast(textColor, backgroundColor)}
					<ReactMarkdown source={text} />
				</TextInverted>
			</Container>
		)
	}
}

/**
* The prop types
*/
ColorsHSL.propTypes = {
	/**
	* Component is loading?
	*/
	loading: PropTypes.bool
};

/**
* Default props
*/
ColorsHSL.defaultProps = {
	loading: false
};

export default ColorsHSL;