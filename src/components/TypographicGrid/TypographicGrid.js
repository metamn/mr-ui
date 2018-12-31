/**
* A classic typographic grid
*
*/
import React from "react";
import PropTypes from "prop-types";
import styled, { css, createGlobalStyle } from "styled-components";
import Repeat from './../../helpers'


/**
* The loading container
*/
const Loading = styled.div``;


/**
* Set up the global typographic grid
*/
const GlobalStyle = createGlobalStyle`
	body {
		font-size: 100%;
		line-height: 1.25;
		--lem: 1.25em;

		box-sizing: border-box;

		*,
		*::before,
		*::after {
			box-sizing: inherit;
		}
	}
`

/**
* The rhythm container
*/
const Rhythm = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
`

/**
* The vertical rhythm container
*/
const VerticalRhythm = styled(Rhythm)`
	display: ${props => props.displayVerticalRhytm ? 'flex' : 'none'};
	flex-wrap: wrap;
`

/**
* The horizontal rhythm container
*/
const HorizontalRhythm = styled(Rhythm)`
	display: ${props => props.displayHorizontalRhytm ? 'block' : 'none'};
`

/**
* A line in the grid
*/
const Line = styled.div`
	box-sizing: border-box;
	border-color: ${props => props.lineColor ? props.lineColor : 'transparent'};
	border-width: 1px;
`

/**
* A vertical rhythm line
*/
const VerticalRhythmLine = styled(Line)`
	width: var(--lem);
	height: 100%;
	border-right-style: solid;
`

/**
* A horizontal rhythm line
*/
const HorizontalRhythmLine = styled(Line)`
	width: 100%;
	height: var(--lem);
	border-bottom-style: solid;
`

/**
* The main container
*/
const Container = styled.div``;


/**
* The main class
*/
class TypographicGrid extends React.Component {
	render() {
		const {
			displayVerticalRhytm,
			displayHorizontalRhytm,
			numberOfHorizontalLines,
			numberOfVerticalLines,
			lineColor,
			loading,
			className,
		} = this.props;

		if (loading) {
			return <Loading className={className}>Loading ...</Loading>;
		}

		return (
			<>
				<GlobalStyle />
				<Container className='typographic-grid'>
					{displayHorizontalRhytm &&
						<HorizontalRhythm
							className='horizontal-lines'
							displayHorizontalRhytm={displayHorizontalRhytm}
							>
							<Repeat numberOfTimes={numberOfHorizontalLines} startAt={0}>
								{(i) => <HorizontalRhythmLine
											key={i}
											lineColor={lineColor}
										/>
								}
							</Repeat>
						</HorizontalRhythm>
					}
					{displayVerticalRhytm &&
						<VerticalRhythm
							className='vertical-lines'
							displayVerticalRhytm={displayVerticalRhytm}
							>
							<Repeat numberOfTimes={numberOfVerticalLines} startAt={0}>
								{(i) => <VerticalRhythmLine
											key={i}
											lineColor={lineColor}
										/>
								}
							</Repeat>
						</VerticalRhythm>
					}
				</Container>
			</>
		)
	}
}

/**
* The prop types
*/
TypographicGrid.propTypes = {
	/**
	* Component is loading?
	*/
	loading: PropTypes.bool,
	/**
	* Display horizontal lines?
	*/
	displayHorizontalRhytm: PropTypes.bool,
	/**
	* Display vertica lines?
	*/
	displayVerticalRhytm: PropTypes.bool,
	/**
	* Number of horizontal lines on the grid
	*/
	numberOfHorizontalLines: PropTypes.number,
	/**
	* Number of vertical lines on the grid
	*/
	numberOfVerticalLines: PropTypes.number,
	/**
	 * The color of the grid line
	 */
	lineColor: PropTypes.string,
};

/**
* Default props
*/
TypographicGrid.defaultProps = {
	loading: false,
	displayHorizontalRhytm: true,
	displayVerticalRhytm: true,
	numberOfHorizontalLines: 50,
	numberOfVerticalLines: 100,
	lineColor: 'lightgrey',
};

export default TypographicGrid;
