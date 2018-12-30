/**
* Hockney-style layout
*
*/
import React from "react";
import PropTypes from "prop-types";
import styled, { css, createGlobalStyle } from "styled-components";

import TypographicGrid from './../../components/TypographicGrid'
import typographicGrid from './typographic-grid'
import Repeat from './../../helpers'

import ReactMarkdown from 'react-markdown'
import markdownText from "./LayoutHockney.md"


/**
* The loading container
*/
const Loading = styled.div``;

/**
 * Set up the global typographic grid
 */
const GlobalStyle = createGlobalStyle`
	body {
		--grid-column-width: calc(var(--lem) * 16); // again, the scrollbar makes this less :(
	}
`

/**
 * The responsive container
 */
const ResponsiveContainer = styled.div`
	@media (max-width: 767px) {
		font-size: ${props => props.typographicGrid.mobile.fontSize};
	}

	@media (min-width: 768px) and (max-width: 1023px) {
		font-size: ${props => props.typographicGrid.tablet.fontSize};
	}

	@media (min-width: 1024px) and (max-width: 1365px) {
		font-size: ${props => props.typographicGrid.tabletL.fontSize};
	}

	@media (min-width: 1366px) and (max-width: 1559px) {
		font-size: ${props => props.typographicGrid.laptop.fontSize};
	}

	@media (min-width: 1600px) {
		font-size: ${props => props.typographicGrid.desktop.fontSize};
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
	display: ${props => props.gridLines ? 'flex' : 'none'};
	flex-wrap: wrap;
`

/**
 * A grid line
 */
const GridLine = styled.div`
	width: var(--grid-column-width);
	height: 100%;
	border-right: 1px solid red;
	box-sizing: border-box;
`


const Logo = styled.div`
	width: calc(var(--lem) * 13);
	height: calc(var(--lem) * 2);
	background: black;
	color: white;
`

const HamburgerMenu = styled.div`
	width: calc(var(--lem) * 2);
	height: calc(var(--lem) * 2);
	margin-left: var(--lem);
	background: black;
	color: white;
`

const Header = styled.div`
	display: grid;
	justify-items: stretch;

	@media (min-width: 320px) {
		margin: 0 auto;

		${Logo},
		${HamburgerMenu} {
			grid-row: 1;
		}
	}

	@media (min-width: 1920px) {
		grid-column: 2;
	}
`

const Menu = styled.div`
	width: var(--grid-column-width);
	background: black;
	color: white;
	grid-column: 1;

	@media (min-width: 320px) {
		margin: 0 auto;
	}

	@media (min-width: 960px) {
		width: calc( 2 * var(--grid-column-width));
		grid-column: 2 / 3;
		grid-row: 1;

		ul {
			display: flex;

			li + li {
				margin-left: var(--lem);
			}
		}
	}

`

const Content = styled.div`
	background: black;
	color: white;
	grid-column: 1;

	@media (min-width: 320px) {
		width: var(--grid-column-width);
		margin: 0 auto;
	}

	@media (min-width: 640px) {
		width: calc(2 * var(--grid-column-width));
	}

	@media (min-width: 960px) {
		grid-column: 1 / 3;
		grid-row: 2;
	}

	@media (min-width: 1280px) {
		grid-column: 2;
		grid-row: 1;
	}

	@media (min-width: 1600px) {
		width: calc(3 * var(--grid-column-width));
	}

	@media (min-width: 1920px) {
		grid-column: 3;
	}
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
`

/**
* The main class
*/
class LayoutHockney extends React.Component {
	constructor(props) {
		super(props)
		this.state = { md: null }
	}

	componentWillMount() {
		fetch(markdownText)
			.then((response) => response.text())
			.then((text) => { this.setState({ md: text }) })
	}

	render() {
		const { isStorybook, gridLines, rhytm, verticalRhytm, loading, className } = this.props;
		const { md } = this.state;
		const mdSource = isStorybook ? markdownText : md;

		if (loading) {
			return <Loading className={className}>Loading ...</Loading>;
		}

		return (
			<>
			<GlobalStyle />
			<TypographicGrid
				numberOfVerticalLines={400}
				numberOfHorizontalLines={150}
				/>
			<Container
				className={className}
				typographicGrid={typographicGrid}
				>
				<Header className='header' typographicGrid={typographicGrid}>
					<Logo className='logo' typographicGrid={typographicGrid}>Logo</Logo>
					<HamburgerMenu className='hamburger-menu' typographicGrid={typographicGrid}>☰</HamburgerMenu>
				</Header>
				<Menu className="menu" typographicGrid={typographicGrid}>
					<ul>
						<li>Menu item 1</li>
						<li>Menu item 2</li>
						<li>Menu item 3</li>
						<li>Menu item 4</li>
						<li>Menu item 5</li>
					</ul>
				</Menu>
				<Content className='content' typographicGrid={typographicGrid}>
					<ReactMarkdown source={mdSource} />
				</Content>
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
			</>
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
