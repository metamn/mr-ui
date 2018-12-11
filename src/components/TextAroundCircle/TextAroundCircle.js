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

	/**
	 * Align center otherwise half of the text is won't be visible
	 */
	${props => props.isDemo && css`
		margin: 0 auto;
	`};

`;


/**
 * The character container
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
		const {text, loading, className} = this.props;
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
				width={'20em'}
				height={'20em'}
				className={className}
				>
				<Repeat numberOfTimes={charsLength} startAt={0}>
					{(i) => <Char
								key={i}
								index={i}
								charsLength={charsLength}
								width={'20em'}
								height={'20em'}
								>
								{chars[i]}
							</Char>
					}
				</Repeat>
			</Container>
		)
	}
}

/**
 * The prop types
 */
TextAroundCircle.propTypes = {
	text: PropTypes.string,
	loading: PropTypes.boolean,
	className: PropTypes.string,
};

/**
 * Export the complete class
 */
export default TextAroundCircle;
