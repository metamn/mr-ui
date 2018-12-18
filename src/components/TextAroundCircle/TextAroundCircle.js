/**
 * Text Around Circle
 *
 * Displays a text like beeing wrapped around a circle.
 *
 */
import React from 'react';
import PropTypes from 'prop-types';
import styled, {css} from 'styled-components';

import Repeat from './../../helpers';


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
	width: ${props => props.size ? props.size : 'auto'};
	height: ${props => props.size ? props.size : 'auto'};
	overflow: hidden;
`;


/**
 * The characters container
 * - it is needed to reposition the rotated chars
 * - otherwise they will be positioned outside the main container
 */
const CharsContainer = styled.div`
	width: 100%;
	height: 100%;
	transform: translateX(calc(${props => props.size} / 2));
`;


/**
 * A single character container
 */
const Char = styled.div`
	--angleSpan: ${props => props.angleSpan ? props.angleSpan : '360deg'};
	--angleOffset: ${props => props.angleOffset ? props.angleOffset : '0deg'};
	--angleOfChar: calc(var(--angleSpan) / ${props => props.charsLength});
	--deg: calc(var(--angleOffset) + var(--angleOfChar) * ${props => props.index});

	position: absolute;
	height: ${props => props.size ? props.size : 'auto'};
	transform: rotate(var(--deg, 0deg));
`;


/**
 * The main class
 */
class TextAroundCircle extends React.Component {
	render() {
		const {text, size, angleSpan, angleOffset, loading, className} = this.props;
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
				size={size}
				className={className}
				>
				<CharsContainer size={size}>
					<Repeat numberOfTimes={charsLength} startAt={0}>
						{(i) => <Char
									key={i}
									index={i}
									charsLength={charsLength}
									size={size}
									angleSpan={angleSpan}
									angleOffset={angleOffset}
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
	 * The size of rectangle (the container).
	 * - It's more about the height than the width
	 * - If the text overflows the container it will automatically truncated
	 */
	size: PropTypes.string,

	/**
	 * The span of the circle.
	 * - If it's `180deg` then it is a half circle.
	 */
	angleSpan: PropTypes.string,

	/**
	 * The offset of the first char on the circle.
	 */
	angleSpan: PropTypes.string,

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
	size: '20em',
	angleSpan: '360deg',
	angleOffset: '0deg',
};

/**
 * Export the complete class
 */
export default TextAroundCircle;
