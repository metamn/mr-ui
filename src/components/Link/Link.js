/**
* The Link element
*
*/
import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

/**
* The loading container
*/
const Loading = styled.div``;

/**
* The main container
*/
const Container = styled.a`

`;

/**
* The main class
*/
class Link extends React.Component {
	render() {
		const { loading, className } = this.props;

		if (loading) {
			return <Loading className={className}>Loading ...</Loading>;
		}

		return <Container className={className} />;
	}
}

/**
* The prop types
*/
Link.propTypes = {
	/**
	* Component is loading?
	*/
	loading: PropTypes.bool
};

/**
* Default props
*/
Link.defaultProps = {
	loading: false
};

export default Link;
