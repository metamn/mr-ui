/**
 * Text Around Circle
 *
 * Displays a text like beeing wrapped around a circle.
 *
 */
import React from 'react';
import PropTypes from 'prop-types';
import styled, {css} from 'styled-components';

import Repeat from './../../framework';


/**
 * The loading container
 */
const Loading = styled.div``;


/**
 * The main container
 */
const Container = styled.div`
	position: relative;
	display: flex;
	width: ${props => props.width ? props.width : 'auto'};
	height: ${props => props.height ? props.height : 'auto'};
`;

/**
 * The characters container
 * - it is needed to reposition the rotated chars
 * - otherwise they will be positioned outside the main container
 */
const CharsContainer = styled.div`
	width: 100%;
	height: 100%;
	transform: translateX(calc(${props => props.width} / 2));
`;


/**
 * A single character container
 */
const Char = styled.div`
	--angleSpan: 360deg;
	--angleOffset: 0deg;
	--angleOfChar: calc(var(--angleSpan) / ${props => props.charsLength});
	--deg: calc(var(--angleOffset) + var(--angleOfChar) * ${props => props.index});

	position: absolute;
	width: 1em;
	height: ${props => props.height ? props.height : 'auto'};
	transform: rotate(var(--deg));
`;


/**
 * The main class
 */
class TextAroundCircle extends React.Component {
	render() {
		const {text, width, height, loading, className} = this.props;
		const chars=[...text];
		const charsLength = chars.length;

		if (loading) {
			return (
				<Loading className={className}>Loading ...</Loading>
			)
		}

		return (
			<Container
				isDemo={true}
				width={width}
				height={height}
				className={className}
				>
				<CharsContainer width={width}>
					<Repeat numberOfTimes={charsLength} startAt={0}>
						{(i) => <Char
									key={i}
									index={i}
									charsLength={charsLength}
									width={width}
									height={height}
									>
									{chars[i]}
								</Char>
						}
					</Repeat>
				</CharsContainer>
			</Container>
		)
	}
}

/**
 * The prop types
 */
TextAroundCircle.propTypes = {
	/**
	 * The text to be displayed
	 */
	text: PropTypes.string.isRequired,
	/**
	 * The width of the container.
	 */
	width: PropTypes.string,
	/**
	 * The height of the container.
	 */
	height: PropTypes.string,
	/**
	 * Component is loading?
	 */
	loading: PropTypes.bool,
	/**
	 * Additional classname to add to the component
	 */
	className: PropTypes.string,
};

/**
 * Default props
 */
TextAroundCircle.defaultProps = {
	loading: false,
	className: '',
};

/**
 * Export the complete class
 */
export default TextAroundCircle;
