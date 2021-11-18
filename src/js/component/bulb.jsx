import React, { Fragment } from "react";
import PropTypes from "prop-types";

const Bulb = props => {
	return (
		<Fragment>
			<div
				className={props.light}
				onClick={() => {
					props.switchLight(props.light);
				}}
			/>
		</Fragment>
	);
};

Bulb.propTypes = {
	switchLight: PropTypes.func,
	light: PropTypes.string
};

export default Bulb;

