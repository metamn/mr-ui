/**
* Hockney-style layout
*
*/
import React from "react";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";

import typographicGrid from './typographic-grid'
import Repeat from './../../helpers'


/**
* The loading container
*/
const Loading = styled.div``;

/**
 * The responsive container
 */
const ResponsiveContainer = styled.div`
	font-size: 100%;
	line-height: 1.25;
	--lem: 1.25em;

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
	height: var(--lem);
`

/**
 * The vertical rhytm container
 */
const VerticalRhytm = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	display: ${props => props.verticalRhytm ? 'flex' : 'none'};
	flex-wrap: wrap;
`

/**
 * A vertical line
 */
const VerticalLine = styled(ResponsiveContainer)`
	height: 100%;
	border-right: 1px solid;
	box-sizing: border-box;
	width: var(--lem);
`

/**
 * The grid lines container
 */
const GridLines = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	display: ${props => props.gridLines ? 'flex' : 'none'};
	flex-wrap: wrap;
`

/**
 * A grid line
 */
const GridLine = styled(ResponsiveContainer)`
	height: 100%;
	border-right: 1px solid red;
	box-sizing: border-box;
	width: var(--grid-column-width);
`


const Logo = styled(ResponsiveContainer)`
	width: calc(var(--lem) * 14);
	height: calc(var(--lem) * 3);
	background: black;
`

const HamburgerMenu = styled(ResponsiveContainer)`
	width: calc(var(--lem) * 1);
	height: calc(var(--lem) * 1);
	background: black;
`

const Header = styled.div`
`

/**
* The main container
*/
const Container = styled(ResponsiveContainer)`
	> * {
		box-sizing: border-box;
	}

	align-self: flex-start;
	width: 100%;

	display: grid;
	--grid-column-width: calc(var(--lem) * 16);

	@media (min-width: 320px) {
		grid-template-columns: [col-1] 320px;
	}

	@media (min-width: 640px) {
		grid-template-columns: [col-1] 320px [col-2] 320px;
	}

	@media (min-width: 960px) {
		grid-template-columns: [col-1] 320px [col-2] 320px [col-3] 320px;
	}

	@media (min-width: 1280px) {
		grid-template-columns: [col-1] 320px [col-2] 320px [col-3] 320px [col-4] 320px;
	}

	@media (min-width: 1600px) {
		grid-template-columns: [col-1] 320px [col-2] 320px [col-3] 320px [col-4] 320px [col-5] 320px;
	}

	@media (min-width: 1920px) {
		grid-template-columns: [col-1] 320px [col-2] 320px [col-3] 320px [col-4] 320px [col-5] 320px [col-6] 320px;
	}
`

/**
* The main class
*/
class LayoutHockney extends React.Component {
	render() {
		const { gridLines, rhytm, verticalRhytm, loading, className } = this.props;

		if (loading) {
			return <Loading className={className}>Loading ...</Loading>;
		}

		return (
			<Container
				className={className}
				typographicGrid={typographicGrid}
				>
				<Header>
					<Logo typographicGrid={typographicGrid} />
					<HamburgerMenu typographicGrid={typographicGrid}/>
				</Header>
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
					<Repeat numberOfTimes={550} startAt={0}>
						{(i) => <VerticalLine
									key={i}
									typographicGrid={typographicGrid}
								/>
						}
					</Repeat>
				</VerticalRhytm>
				<GridLines gridLines={gridLines}>
					<Repeat numberOfTimes={6} startAt={0}>
						{(i) => <GridLine
									key={i}
									typographicGrid={typographicGrid}
								/>
						}
					</Repeat>
				</GridLines>
			</Container>
		)
	}
}

/**
* The prop types
*/
LayoutHockney.propTypes = {
	/**
	* Component is loading?
	*/
	loading: PropTypes.bool,
	rhytm: PropTypes.bool,
	verticalRhytm: PropTypes.bool,
	gridLines: PropTypes.bool,
};

/**
* Default props
*/
LayoutHockney.defaultProps = {
	loading: false,
	rhytm: true,
	verticalRhytm: true,
	gridLines: true,
};

export default LayoutHockney;
