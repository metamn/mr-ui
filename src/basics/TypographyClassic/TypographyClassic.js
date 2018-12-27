/**
* Classic typography
*
*/
import React from "react"
import PropTypes from "prop-types"
import styled, { css } from "styled-components"

import ReactMarkdown from 'react-markdown'
import sample from './SampleText.md'
import typographicGrid from './typographic-grid'

/**
* The loading container
*/
const Loading = styled.div``

/**
* The main container
*/
const Container = styled.div`
	overflow-x: hidden;

	@media (max-width: 767px) {
		font-size: ${props => props.typographicGrid.mobile.fontSize};
		line-height: ${props => props.typographicGrid.mobile.lineHeight};
		padding: ${props => props.typographicGrid.mobile.lem};
	}

	@media (min-width: 768px) and (max-width: 1023px) {
		font-size: ${props => props.typographicGrid.tablet.fontSize};
		line-height: ${props => props.typographicGrid.tablet.lineHeight};
		padding: ${props => props.typographicGrid.tablet.lem};
		background: aqua;
	}

	@media (min-width: 1024px) and (max-width: 1365px) {
		font-size: ${props => props.typographicGrid.tabletL.fontSize};
		line-height: ${props => props.typographicGrid.tabletL.lineHeight};
		padding: ${props => props.typographicGrid.tabletL.lem};
		background: pink;
	}

	@media (min-width: 1366px) and (max-width: 1559px) {
		font-size: ${props => props.typographicGrid.laptop.fontSize};
		line-height: ${props => props.typographicGrid.laptop.lineHeight};
		padding: ${props => props.typographicGrid.laptop.lem};
		background: lightblue;
	}

	@media (min-width: 1600px) {
		font-size: ${props => props.typographicGrid.desktop.fontSize};
		line-height: ${props => props.typographicGrid.desktop.lineHeight};
		padding: ${props => props.typographicGrid.desktop.lem};
		//padding: 1.25em;
	}
`

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
				typographicGrid={typographicGrid}
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
