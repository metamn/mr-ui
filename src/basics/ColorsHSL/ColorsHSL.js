/**
* HSL colors component
*
*/
import React from "react";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";

import ReactMarkdown from 'react-markdown';
import text from './ColorsHSL.md';

import ColorPicker from '@mapbox/react-colorpickr'
import chroma from 'chroma-js'

import Repeat from './../../helpers'

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
	background: ${props => props.backgroundColor};
	color: ${props => props.textColor};

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
 * The color swatch container
 */
const SwatchContainer = styled.div`
	//grid-row: 3;
	//grid-column: 1 / 3;

	display: flex;
	flex-wrap: wrap;
`

/**
 * A color swatch
 */
const Swatch = styled(Text)`
	background: ${props => props.backgroundColor};
	color: ${props => props.textColor};

	width: calc(10 * 1.25em);
	height: calc(5 * 1.25em);

	margin: 1.25em
	margin-bottom: 0;
`

/**
 * The color pickers container
 */
const Pickers = styled.div`
	display: flex;
	flex-wrap: wrap;
`

/**
 * The color picker
 */
const Picker = styled.div`
	padding: 1.25em;
`


/**
* The main class
*/
class ColorsHSL extends React.Component {
	constructor(props) {
		super(props)

		this.state = {
			backgroundColor: 'hsla(180, 85%, 85%, 1)',
			textColor: 'hsla(180, 85%, 0%, 1)',
		}
	}

	changeBackgroundColor = (color) => {
		this.setState(
			{
				backgroundColor: `#${color.hex}`
			}
		);
	}

	changeTextColor = (color) => {
		this.setState(
			{
				textColor: `#${color.hex}`
			}
		);
	}

	scaleColor(color1, color2, property, step, direction) {
		const palette = []

		let contrast = this.colorContrast(color1, color2)
		let propertyToScale = chroma(color1).get(property)

		while ((contrast >= 4.5) && (propertyToScale >= step) && (propertyToScale <= 1)) {
			propertyToScale = (direction == 'up') ? propertyToScale + step : propertyToScale - step
			color1 = chroma(color1).set(property, propertyToScale)
			contrast = this.colorContrast(color1, color2)

			if (contrast >= 4.5) {
				palette.push({
					backgroundColor: color1,
					textColor: color2,
				})
			}
		}

		return palette;
	}

	generateMonochromePalette(backgroundColor, textColor) {
		let palette = []

		palette = [
			...this.scaleColor(backgroundColor, textColor, 'hsl.s', 0.1),
			...this.scaleColor(backgroundColor, textColor, 'hsl.l', 0.1),
			...this.scaleColor(textColor, backgroundColor, 'hsl.l', 0.1, 'up')
		]

		return palette;
	}

	colorContrast(backgroundColor, textColor) {
		const contrast = chroma.contrast(chroma(backgroundColor), chroma(textColor))
		return contrast.toFixed(1)
	}

	render() {
		const { loading, className } = this.props;
		const { backgroundColor, textColor} = this.state;

		const monochromePalette = this.generateMonochromePalette(backgroundColor, textColor);

		if (loading) {
			return <Loading className={className}>Loading ...</Loading>;
		}

		return (
			<Container
				className={className}
				>
				<Text
					backgroundColor={backgroundColor}
					textColor={textColor}
					>
					color contrast: {this.colorContrast(backgroundColor, textColor)}
					<ReactMarkdown source={text} />
				</Text>
				<Pickers>
					<Picker>
						background color:
						<ColorPicker
							initialValue={backgroundColor}
							onChange={this.changeBackgroundColor}
						/>
					</Picker>
					<Picker>
						text color:
						<ColorPicker
							initialValue={textColor}
							onChange={this.changeTextColor}
						/>
					</Picker>
				</Pickers>
				<TextInverted
					backgroundColor={backgroundColor}
					textColor={textColor}
					>
					color contrast: {this.colorContrast(textColor, backgroundColor)}
					<ReactMarkdown source={text} />
				</TextInverted>
				<SwatchContainer>
					<Repeat numberOfTimes={monochromePalette.length} startAt={0}>
						{(i) => <Swatch
									key={i}
									backgroundColor={monochromePalette[i].backgroundColor}
									textColor={monochromePalette[i].textColor}
								>
								color contrast: {this.colorContrast(monochromePalette[i].textColor, monochromePalette[i].backgroundColor)}
								<p>This is a text swatch for the monochrome palette</p>
								</Swatch>
						}
					</Repeat>
				</SwatchContainer>
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
