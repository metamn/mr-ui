/**
* Classic typography
*
*/
import React from "react"
import PropTypes from "prop-types"
import styled, { css } from "styled-components"

import ReactMarkdown from 'react-markdown'
import text from "./TypographyClassic.md"
import typographicGrid from './typographic-grid'
import Repeat from './../../helpers'

/**
* The loading container
*/
const Loading = styled.div``

/**
 * The responsive container
 */
const ResponsiveContainer = styled.div`
	@media (max-width: 767px) {
		font-size: ${props => props.typographicGrid.mobile.fontSize};
		line-height: ${props => props.typographicGrid.lineHeight};
	}

	@media (min-width: 768px) and (max-width: 1023px) {
		font-size: ${props => props.typographicGrid.tablet.fontSize};
		line-height: ${props => props.typographicGrid.lineHeight};
	}

	@media (min-width: 1024px) and (max-width: 1365px) {
		font-size: ${props => props.typographicGrid.tabletL.fontSize};
		line-height: ${props => props.typographicGrid.lineHeight};
	}

	@media (min-width: 1366px) and (max-width: 1559px) {
		font-size: ${props => props.typographicGrid.laptop.fontSize};
		line-height: ${props => props.typographicGrid.lineHeight};
	}

	@media (min-width: 1600px) {
		font-size: ${props => props.typographicGrid.desktop.fontSize};
		line-height: ${props => props.typographicGrid.lineHeight};
	}
`

/**
* The main container
*/
const Container = styled(ResponsiveContainer)`
	overflow-x: hidden;
	padding: 1.25em;

	@media (min-width: 768px) and (max-width: 1023px) {
		background: aqua;
	}

	@media (min-width: 1024px) and (max-width: 1365px) {
		background: pink;
	}

	@media (min-width: 1366px) and (max-width: 1559px) {
		background: lightblue;
	}

	${props => props.resetAll && css`
		h1, h2, h3, blockquote, pre {
			font-size: 1em;
			font-weight: normal;
		}

		> *, blockquote p {
			margin: 0;
			padding: 0;
			box-sizing: border-box;
		}
	`}

	${props => props.styleHeadings && css`
		h1 { font-size:1.5em; padding:1.45833em 0; }
		h2 { font-size:1.33333em; padding:1.25em 0; }
		h3 { font-size:1.16667em; padding:1.51785em 0; }
	`}

	${props => props.parapgraphMargins && css`
		p {
			+ p {
				margin-top: 2.5em;
			}
		}
	`}

	${props => props.verticalRhytm && css`
		p {
			+ p {
				margin-left: 2.5em;
			}
		}

		ul, ol {
			margin-left: 5em;
			max-width: calc(1.25em * 15);
		}
	`}
`

/**
 * The horizontal rhytm container
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
 * A horizontal line
 */
const Line = styled(ResponsiveContainer)`
	width: 100%;
	border-bottom: 1px solid;
	box-sizing: border-box;
	height: 1.25em;
`

const VerticalRhytm = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	display: ${props => props.verticalRhytm ? 'flex' : 'none'};
	flex-wrap: wrap;
`

const VerticalLine = styled(ResponsiveContainer)`
	height: 100%;
	border-right: 1px solid;
	box-sizing: border-box;
	width: 1.25em;
`

/**
* The main class
*/
class TypographyClassic extends React.Component {
	render() {
		const { verticalRhytm, parapgraphMargins, resetAll, styleHeadings, rhytm, loading, className } = this.props

		if (loading) {
			return <Loading className={className}>Loading ...</Loading>
		}

		return (
			<>
				<Container
					className={className}
					typographicGrid={typographicGrid}
					resetAll={resetAll}
					styleHeadings={styleHeadings}
					parapgraphMargins={parapgraphMargins}
					verticalRhytm={verticalRhytm}
					>
					<ReactMarkdown source={text} />
				</Container>
				<Rhytm rhytm={rhytm}>
					<Repeat numberOfTimes={200} startAt={0}>
						{(i) => <Line
									key={i}
									typographicGrid={typographicGrid}
								/>
						}
					</Repeat>
				</Rhytm>
				<VerticalRhytm verticalRhytm={verticalRhytm}>
					<Repeat numberOfTimes={100} startAt={0}>
						{(i) => <VerticalLine
									key={i}
									typographicGrid={typographicGrid}
								/>
						}
					</Repeat>
				</VerticalRhytm>
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
