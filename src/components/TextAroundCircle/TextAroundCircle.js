/**
 * Text Around Circle
 *
 * Displays a text like beeing wrapped around a circle.
 *
 */
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

/**
 * The main container
 */
const Container = styled.div`
`;

/**
 * A loading container
 */
const Loading = styled.div``;

/**
 * The main class
 */
class TextAroundCircle extends React.Component {
	render() {
		const {text, loading, className} = this.props;

		if (loading) {
			return (
				<Loading className={className}>Loading ...</Loading>
			)
		}

		return (
			<Container className={className}>{text}</Container>
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
