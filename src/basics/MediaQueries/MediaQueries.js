/**
 * Component description
 *
 */
import React from "react";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";
import Responsive from 'react-responsive';

const Desktop = props => <Responsive {...props} minWidth={992} />;
const Tablet = props => <Responsive {...props} minWidth={768} maxWidth={991} />;
const Mobile = props => <Responsive {...props} maxWidth={767} />;

/**
 * The loading container
 */
const Loading = styled.div``;

/**
 * The main class
 */
class MediaQueries extends React.Component {
	render() {
		const { loading, className } = this.props;

		if (loading) {
			return <Loading className={className}>Loading ...</Loading>;
		}

		return (
			<>
				<Desktop>Desktop or laptop</Desktop>
				<Tablet>Tablet</Tablet>
    			<Mobile>Mobile</Mobile>
			</>
		)
	}
}

/**
 * The prop types
 */
MediaQueries.propTypes = {
  /**
	 * Component is loading?
	 */
  loading: PropTypes.bool
};

/**
 * Default props
 */
MediaQueries.defaultProps = {
  loading: false
};

export default MediaQueries;
