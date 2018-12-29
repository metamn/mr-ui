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
	height: 1.25em;
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
	width: 1.25em;
`

/**
 * A responsive CSS grid
 */
function ResponsiveGrid({...props}) {
	return {
		display: 'grid',
	}
}

/**
* The main container
*/
const Container = styled(ResponsiveContainer)`
	> * {
		box-sizing: border-box;
	}

	${ResponsiveGrid()}
`

/**
* The main class
*/
class LayoutHockney extends React.Component {
	render() {
		const { rhytm, verticalRhytm, loading, className } = this.props;

		if (loading) {
			return <Loading className={className}>Loading ...</Loading>;
		}

		return (
			<Container
				className={className}
				typographicGrid={typographicGrid}
				>
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
	verticalRhytm: PropTypes.bool
};

/**
* Default props
*/
LayoutHockney.defaultProps = {
	loading: false,
	rhytm: true,
	verticalRhytm: true,
};

export default LayoutHockney;
