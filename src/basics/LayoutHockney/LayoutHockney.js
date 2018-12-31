/**
* Hockney-style layout
*
*/
import React from "react";
import PropTypes from "prop-types";
import styled, { css, createGlobalStyle } from "styled-components";

import TypographicGrid from './../../components/TypographicGrid'
import HockneyGrid from './../../components/HockneyGrid'
import Repeat from './../../helpers'

import ReactMarkdown from 'react-markdown'
import markdownText from "./LayoutHockney.md"


/**
* The loading container
*/
const Loading = styled.div``;


/**
 * The mockup container
 */
const Mockup = styled.div`
	border: 1px solid;
`


const Logo = styled(Mockup)`
	width: calc(var(--lem) * 13);
	height: calc(var(--lem) * 2);
`

const HamburgerMenu = styled(Mockup)`
	width: calc(var(--lem) * 2);
	height: calc(var(--lem) * 2);
	margin-left: var(--lem);
`

const Header = styled(Mockup)`
	display: grid;
	grid-column: 1;

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

const Menu = styled(Mockup)`
	width: var(--grid-column-width);
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

const Content = styled(Mockup)`
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
const Container = styled.div`
	align-self: flex-start;
	width: 100%;
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
			<TypographicGrid
				numberOfVerticalLines={400}
				numberOfHorizontalLines={150}
				/>
			<Container>
				<HockneyGrid>
					<Header className='header'>
						<Logo className='logo'>Logo</Logo>
						<HamburgerMenu className='hamburger-menu'>☰</HamburgerMenu>
					</Header>
					<Menu className='menu'>
						<ul>
							<li>Menu item 1</li>
							<li>Menu item 2</li>
							<li>Menu item 3</li>
							<li>Menu item 4</li>
							<li>Menu item 5</li>
						</ul>
					</Menu>
					<Content className='content'>
						<ReactMarkdown source={mdSource} />
					</Content>
				</HockneyGrid>
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
