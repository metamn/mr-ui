/**
* Component description
*
*/
import React from "react";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";
import styledContainerQuery from 'styled-container-query';

/**
* The loading container
*/
const Loading = styled.div``;

/**
* The Logo container
*/
const Logo = styled.div``;

/**
* The main container
* - all children containers must be defined in advance otherwise they'll reset the queries put in the parent.
*/
const Container = styledContainerQuery.div`
	width: ${props => props.width ? props.width : 'auto'};
	min-height: 90vh;

	display: flex;
	justify-content: center;
	align-items: center;

	border: 1px solid;
	padding: 1.25em;
	margin: 1.25em;
	box-sizing: border-box;

	// Default style
	${Logo} {
		color: red;
	}

	&:container(min-width: 320px) {
		${Logo} {
			color: blue;
		}
	}

	&:container(min-width: 769px) {
		${Logo} {
			color: green;
		}
	}
`;


/**
* The main class
*/
class ElementQueries extends React.Component {
	render() {
		const { width, loading, className } = this.props;

		if (loading) {
			return <Loading className={className}>Loading ...</Loading>;
		}

		return (
			<Container
				width={width}
				className={className}
			>
				<Logo>
					By default I'm red. If my container goes above 320px I'm blue. Above 769px I'm greeeen.
					Change my container size with Knobs.
				</Logo>
			</Container>
		)
	}
}

/**
* The prop types
*/
ElementQueries.propTypes = {
	/**
	* Component is loading?
	*/
	loading: PropTypes.bool,

	/**
	 * The container's width
	 */
	width: PropTypes.sting,
};

/**
* Default props
*/
ElementQueries.defaultProps = {
	loading: false,
	width: '300px',
};

export default ElementQueries;
