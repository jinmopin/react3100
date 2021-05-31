import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function ReferInfo({alpha, attr, desc}) {
    return (
        <li>
            <Link to="/">
                <span className="alpha">{alpha}</span>
                <span className="attr">{attr}</span>
                <span className="desc">{desc}</span>
            </Link>
        </li>
    )
}
ReferInfo.propTypes = {
    alpha: PropTypes.string.isRequired,
    attr: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired

}


export default ReferInfo;