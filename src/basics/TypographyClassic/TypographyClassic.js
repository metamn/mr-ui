/**
* Classic typography
*
*/
import React from "react"
import PropTypes from "prop-types"
import styled, { css } from "styled-components"

import ReactMarkdown from 'react-markdown'
import sample from './SampleText.md'

/**
* The loading container
*/
const Loading = styled.div``

/**
* The main container
*/
const Container = styled.div``

/**
* The main class
*/
class TypographyClassic extends React.Component {
	render() {
		const { loading, className } = this.props

		if (loading) {
			return <Loading className={className}>Loading ...</Loading>
		}

		return (
			<Container
				className={className}
			>
			<ReactMarkdown source={sample} />
			</Container>
		);
	}
}

/**
* The prop types
*/
TypographyClassic.propTypes = {
	/**
	* Component is loading?
	*/
	loading: PropTypes.bool
};

/**
* Default props
*/
TypographyClassic.defaultProps = {
	loading: false
};

export default TypographyClassic;
