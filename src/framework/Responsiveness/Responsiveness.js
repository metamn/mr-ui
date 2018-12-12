/**
 * Element queries with styled components demo
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
 * The child container
 */
const Child = styled.div`
	padding: 1.25em;

	&::before {
		content: 'Default size. Parent container is less than 500px wide';
	}
`;

/**
 * The main container
 */
const Container = styledContainerQuery.div`
	width: ${props => props.width || "350px"};
	min-height: ${props => props.height || "100px"};

	display: flex;
	justify-content: center;
	align-items: center;

	border: 1px solid;

	&:container(min-width: 500px) {
		${Child}::before {
      		content: 'Modified size. Parent container is more than 500px wide';
    	}
	}
`;

/**
 * The main class
 */
class Responsiveness extends React.Component {
  render() {
    const { width, height, loading } = this.props;

    if (loading) {
      return <Loading>Loading ...</Loading>;
    }

    return (
		<Container
			className='container'
			width={width}
			height={height}
		>
			<Child className='child'/>
		</Container>
	);
  }
}

/**
 * The prop types
 */
Responsiveness.propTypes = {
  /**
	 * Component is loading?
	 */
  loading: PropTypes.bool,
  /**
   * The container width;
   */
  width: PropTypes.string,
  /**
   * The container height
   */
  height: PropTypes.string,
};

/**
 * Default props
 */
Responsiveness.defaultProps = {
  loading: false,
  width: '350px',
  height: '100px',
};

export default Responsiveness;
