/**
* Component description
*
*/
import React from "react";
import PropTypes from "prop-types";
import {Link} from "./DesignSystem";


/**
* The main class
*/
class StylingWithStyledComponents extends React.Component {
	render() {
		const { loading, className } = this.props

		return (
			<Link className='link' href='https://alika.ro' title='alika.ro'>alika.ro</Link>
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
