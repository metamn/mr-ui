/**
 * Hockney-style layout
 *
 */
import React from 'react'
import PropTypes from 'prop-types'
import styled, { css, createGlobalStyle } from 'styled-components'

import TypographicGrid from './../../components/TypographicGrid'
import HockneyGrid from './../../components/HockneyGrid'
import Repeat from './../../helpers'

import ReactMarkdown from 'react-markdown'
import markdownText from './LayoutHockney.md'

/**
 * The loading container
 */
const Loading = styled.div``

/**
 * The mockup container
 */
const Mockup = styled.div`
    background: lightcyan;
`

/** The mockups
 */

const Logo = styled(Mockup)`
    width: calc(var(--lem) * 13);
    height: calc(var(--lem) * 1);
`

const HamburgerMenu = styled(Mockup)`
    width: calc(var(--lem) * 2);
    height: calc(var(--lem) * 1);
    margin-left: var(--lem);
`

const Header = styled.div`
    display: flex;
    justify-content: space-between;

    @media (min-width: 320px) {
        grid-column: 1 / 2;
        margin-top: var(--lem);
    }

    @media (min-width: 640px) {
        grid-column: 1 / 3;
        margin-top: var(--lem);
    }

    @media (min-width: 960px) {
        grid-column: 1 / 2;
        margin-top: 0;
    }
`

const Menu = styled(Mockup)`
    @media (min-width: 320px) {
        grid-column: 1 / 2;
        margin-top: var(--lem);
    }

    @media (min-width: 640px) {
        grid-column: 1 / 3;
        margin-top: var(--lem);
    }

    @media (min-width: 960px) {
        grid-column: 2 / 4;
        grid-row: 1;
        margin-top: 0;

        ul {
            display: flex;
        }
    }
`

const Content = styled(Mockup)`
    @media (min-width: 320px) {
        grid-column: 1 / 2;
        margin-top: var(--lem);
    }

    @media (min-width: 640px) {
        grid-column: 1 / 3;
        margin-top: var(--lem);
    }

    @media (min-width: 960px) {
        grid-column: 1 / 4;
        margin-top: var(--lem);
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
            .then(response => response.text())
            .then(text => {
                this.setState({ md: text })
            })
    }

    render() {
        const {
            isStorybook,
            gridLines,
            rhytm,
            verticalRhytm,
            loading,
            className,
        } = this.props
        const { md } = this.state
        const mdSource = isStorybook ? markdownText : md

        if (loading) {
            return <Loading className={className}>Loading ...</Loading>
        }

        return (
            <>
                <TypographicGrid
                    numberOfVerticalLines={400}
                    numberOfHorizontalLines={150}
                />
                <Container>
                    <HockneyGrid displayGridLines={false}>
                        <Header className="header">
                            <Logo className="logo">Logo</Logo>
                            <HamburgerMenu className="hamburger-menu">
                                ☰
                            </HamburgerMenu>
                        </Header>
                        <Menu className="menu">
                            <ul>
                                <li>Menu item 1</li>
                                <li>Menu item 2</li>
                                <li>Menu item 3</li>
                                <li>Menu item 4</li>
                                <li>Menu item 5</li>
                            </ul>
                        </Menu>
                        <Content className="content">
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
}

/**
 * Default props
 */
LayoutHockney.defaultProps = {
    loading: false,
    rhytm: true,
    verticalRhytm: true,
    gridLines: true,
}

export default LayoutHockney
