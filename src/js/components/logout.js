import React from "react";
import PropTypes from "prop-types";

const Logout = props => {
    const logout = () => {
        console.log( "logging out" );
        props.history.push( "/login" );
    };

    return <button onClick={ logout }>Logout</button>;
};

Logout.propTypes = {
    history: PropTypes.object.isRequired, // eslint-disable-line
};

export default Logout;
