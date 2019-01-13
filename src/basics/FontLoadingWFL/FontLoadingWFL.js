/**
 * Web font loader test component
 *
 */
import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'

import ReactMarkdown from 'react-markdown'
import md from './FontLoadingWFL.md'

import WebFont from 'webfontloader'
import './Galapagos/galapagos.css'

WebFont.load({
    typekit: {
        id: 'syb1owt',
    },
    google: {
        families: ['Montserrat'],
    },
    custom: {
        families: ['GalapagosATrial-Regular'],
    },
})

/**
 * The loading container
 */
const Loading = styled.div``

/**
 * Text container
 */
const TextContainer = styled.div`
    font-size: 150%;
    max-width: 45em;
`

/**
 * The Nimbus Sans container
 */
const Nimbus = styled(TextContainer)`
    font-family: nimbus-sans, sans-serif;
    letter-spacing: 1.1px;
    line-height: 1.48;
`

/**
 * The Montserrat container
 */
const Montserrat = styled(TextContainer)`
    font-family: 'Montserrat', sans-serif;
`

/**
 * The Galapagos container
 */
const Galapagos = styled(TextContainer)`
    font-family: 'GalapagosATrial-Regular', sans-serif;
`

/**
 * The main container
 */
const Container = styled.div`
    width: 100%;
    height: 100;
    padding: 1.25em;

    align-self: flex-start;
    margin-right: auto;
`

/**
 * The main class
 */
class FontLoadingWFL extends React.Component {
    render() {
        const { loading, className } = this.props

        if (loading) {
            return <Loading className={className}>Loading ...</Loading>
        }

        return (
            <Container>
                <Galapagos>
                    <ReactMarkdown source={md} />
                </Galapagos>
                <Nimbus>
                    <ReactMarkdown source={md} />
                </Nimbus>
                <Montserrat>
                    <ReactMarkdown source={md} />
                </Montserrat>
            </Container>
        )
    }
}

/**
 * The prop types
 */
FontLoadingWFL.propTypes = {
    /**
     * Component is loading?
     */
    loading: PropTypes.bool,
}

/**
 * Default props
 */
FontLoadingWFL.defaultProps = {
    loading: false,
}

export default FontLoadingWFL
