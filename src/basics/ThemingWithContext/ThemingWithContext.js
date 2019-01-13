/**
 * Theming with React Context
 *
 */
import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import Button from './Button'
import ThemeContext from './theme'

/**
 * The loading container
 */
const Loading = styled.div``

/**
 * The main container
 */
const Container = styled.div`
    > * {
        margin: 1.25em;
    }
`

/**
 * The main class
 */
class ThemingWithContext extends React.Component {
    render() {
        const { loading, className } = this.props
        let theme = this.context

        if (loading) {
            return <Loading className={className}>Loading ...</Loading>
        }

        return (
            <Container className={className}>
                <Button theme={theme}>Styled by the theme</Button>
                <Button>Unstyled</Button>
            </Container>
        )
    }
}
ThemingWithContext.contextType = ThemeContext

/**
 * The prop types
 */
ThemingWithContext.propTypes = {
    /**
     * Component is loading?
     */
    loading: PropTypes.bool,
}

/**
 * Default props
 */
ThemingWithContext.defaultProps = {
    loading: false,
}

export default ThemingWithContext
