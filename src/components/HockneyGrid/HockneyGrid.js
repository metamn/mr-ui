/**
* The Hockney grid
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
 * Sets up the global column size
 */
const GlobalStyle = createGlobalStyle`
	body {
		--lem: 1.25em;
		--grid-column-width: calc(var(--lem) * 16);
	}
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
	display: ${props => props.displayGridLines ? 'flex' : 'none'};
	flex-wrap: wrap;
`

/**
 * A grid line
 */
const GridLine = styled.div`
	width: var(--grid-column-width);
	height: 100%;
	border-right: 1px solid;
	border-color: ${props => props.lineColor ? props.lineColor : 'transparent'};
	box-sizing: border-box;
`

/**
* The main container
*/
const Container = styled.div`
	width: 100%;

	display: grid;
	justify-items: start;

	@media (min-width: var(--grid-column-width)) {
		grid-template-columns: [col-1] var(--grid-column-width)
	}

	@media (min-width: 640px) {
		grid-template-columns: [col-1] var(--grid-column-width) [col-2] var(--grid-column-width)
	}

	@media (min-width: 960px) {
		grid-template-columns: [col-1] var(--grid-column-width) [col-2] var(--grid-column-width) [col-3] var(--grid-column-width)
	}

	@media (min-width: 1280px) {
		grid-template-columns: [col-1] var(--grid-column-width) [col-2] var(--grid-column-width) [col-3] var(--grid-column-width) [col-4] var(--grid-column-width)
	}

	@media (min-width: 1600px) {
		grid-template-columns: [col-1] var(--grid-column-width) [col-2] var(--grid-column-width) [col-3] var(--grid-column-width) [col-4] var(--grid-column-width) [col-5] var(--grid-column-width)
	}

	@media (min-width: 1920px) {
		grid-template-columns: [col-1] var(--grid-column-width) [col-2] var(--grid-column-width) [col-3] var(--grid-column-width) [col-4] var(--grid-column-width) [col-5] var(--grid-column-width) [col-6] var(--grid-column-width)
	}
`;

/**
* The main class
*/
class HockneyGrid extends React.Component {
	render() {
		const {
			loading,
			className,
			displayGridLines,
			lineColor,
			children,
		} = this.props;

		if (loading) {
			return <Loading className={className}>Loading ...</Loading>;
		}

		return (
			<>
			<GlobalStyle />
			{displayGridLines &&
				<GridLines
					className='hockney-grid'
					displayGridLines={displayGridLines}
					>
					<Repeat numberOfTimes={6} startAt={0}>
						{(i) => <GridLine
									key={i}
									lineColor={lineColor}
								/>
						}
					</Repeat>
				</GridLines>
			}
			<Container
				className='hockney-grid-container'
				>
				{children}
			</Container>
			</>
		)
	}
}

/**
* The prop types
*/
HockneyGrid.propTypes = {
	/**
	* Component is loading?
	*/
	loading: PropTypes.bool,
	/**
	* Display grid lines?
	*/
	displayGridLines: PropTypes.bool,
	/**
	 * The color of the grid line
	 */
	lineColor: PropTypes.string,
};

/**
* Default props
*/
HockneyGrid.defaultProps = {
	loading: false,
	displayGridLines: true,
	lineColor: 'red',
};

export default HockneyGrid;
