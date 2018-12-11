/**
 * Component description
 *
 */
import React from "react";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";

/**
 * The loading container
 */
const Loading = styled.div``;

/**
 * The main container
 */
const Container = styled.div``;

/**
 * The main class
 */
class Typography extends React.Component {
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
Typography.propTypes = {
  /**
	 * Component is loading?
	 */
  loading: PropTypes.bool
};

/**
 * Default props
 */
Typography.defaultProps = {
  loading: false
};

export default Typography;
