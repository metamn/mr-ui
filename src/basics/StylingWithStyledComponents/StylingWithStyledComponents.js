/**
 * Component description
 *
 */
import React from 'react'
import PropTypes from 'prop-types'
import { Link } from './DesignSystem'

/**
 * The main class
 */
class StylingWithStyledComponents extends React.Component {
    render() {
        const { loading, className } = this.props

        return (
            <Link className="link" href="http://metamn.io" title="metamn.io">
                A custom made Link component pointing to http://metamn.io
            </Link>
        )
    }
}

/**
 * The prop types
 */
StylingWithStyledComponents.propTypes = {
    /**
     * Component is loading?
     */
    loading: PropTypes.bool,
}

/**
 * Default props
 */
StylingWithStyledComponents.defaultProps = {
    loading: false,
}

export default StylingWithStyledComponents
