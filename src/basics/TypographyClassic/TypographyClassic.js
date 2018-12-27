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
import Repeat from './../../helpers'

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
	}

	${props => props.styleHeadings && css`
		padding: 0 !important;

		> * {
			font-size: 1em;
			font-weight: normal;
			margin: 0;
			padding: 0;
		}
	`}
`

/**
 * The vertical rhytm container
 */
const Rhytm = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	display: ${props => props.rhytm ? 'block' : 'none'};
`

/**
 * A vertical line
 */
const Line = styled.div`
	width: 100%;
	border-bottom: 1px solid;
	box-sizing: border-box;

	@media (max-width: 767px) {
		height: ${props => props.typographicGrid.mobile.lem};
	}

	@media (min-width: 768px) and (max-width: 1023px) {
		height: ${props => props.typographicGrid.tablet.lem};
	}

	@media (min-width: 1024px) and (max-width: 1365px) {
		height: ${props => props.typographicGrid.tabletL.lem};
	}

	@media (min-width: 1366px) and (max-width: 1559px) {
		height: ${props => props.typographicGrid.laptop.lem};
	}

	@media (min-width: 1600px) {
		height: ${props => props.typographicGrid.desktop.lem};
	}
`

/**
* The main class
*/
class TypographyClassic extends React.Component {
	render() {
		const { styleHeadings, rhytm, loading, className } = this.props

		if (loading) {
			return <Loading className={className}>Loading ...</Loading>
		}

		return (
			<>
				<Container
					className={className}
					typographicGrid={typographicGrid}
					styleHeadings={styleHeadings}
				>
					<ReactMarkdown source={sample} />
				</Container>
				<Rhytm rhytm={rhytm}>
					<Repeat numberOfTimes={100} startAt={0}>
						{(i) => <Line
									key={i}
									typographicGrid={typographicGrid}
								/>
						}
					</Repeat>
				</Rhytm>
			</>
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
