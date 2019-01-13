/**
 * The Logo
 *
 */
import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import Measure from 'react-measure'

/**
 * The loading container
 */
const Loading = styled.div``

/**
 * The main container
 */
const Container = styled.div`
    font-size: 4em;
    overflow: hidden;
`

/**
 * The Logo text element
 */
const LogoText = styled.div`
    color: red;
`

/**
 * The Small Logo text element
 */
const LogoTextSmall = styled(LogoText)`
    color: blue;
    font-size: 2em;
`

/**
 * The Extra Small Logo text element
 */
const LogoTextExtraSmall = styled(LogoText)`
    color: green;
    font-size: 1em;
`

/**
 * The main class
 */
class ReactMeasure extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            dimensions: {
                width: -1,
                height: -1,
            },
        }
    }

    render() {
        const { width, height } = this.state.dimensions
        const { loading, className } = this.props

        if (loading) {
            return <Loading className={className}>Loading ...</Loading>
        }

        return (
            <Measure
                bounds
                onResize={contentRect => {
                    this.setState({
                        dimensions: contentRect.bounds,
                    })
                }}
            >
                {({ measureRef }) => (
                    <Container ref={measureRef} className={className}>
                        {width <= 320 && (
                            <LogoTextExtraSmall>
                                Logo for small mobile width:{width}
                            </LogoTextExtraSmall>
                        )}
                        {width >= 768 && (
                            <LogoText>Logo default width:{width}</LogoText>
                        )}
                    </Container>
                )}
            </Measure>
        )
    }
}

/**
 * The prop types
 */
ReactMeasure.propTypes = {
    /**
     * Component is loading?
     */
    loading: PropTypes.bool,
}

/**
 * Default props
 */
ReactMeasure.defaultProps = {
    loading: false,
}

export default ReactMeasure
