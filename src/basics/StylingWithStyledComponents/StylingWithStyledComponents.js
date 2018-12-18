/**
* Component description
*
*/
import React from "react";
import PropTypes from "prop-types";
//import Link from "./DesignSystem";


import {LinkHTML} from './HTML'
import {LinkCSS} from './CSS'
import styled, { css } from "styled-components"

export const Link = styled(LinkHTML)`
	${LinkCSS()}
`

/**
* The main class
*/
class StylingWithStyledComponents extends React.Component {
	render() {
		const { loading, className } = this.props

		return (
			<Link>alika.ro</Link>
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
	loading: PropTypes.bool
};

/**
* Default props
*/
StylingWithStyledComponents.defaultProps = {
	loading: false
};

export default StylingWithStyledComponents;
