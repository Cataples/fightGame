import React from "react";

const Logout = props => {
    const logout = () => {
        props.history.push("/login"); //eslint-disable-line
        localStorage.removeItem( "token" );
        localStorage.removeItem( "userId" );
    };

    return <button onClick={ logout }>Logout</button>;
};

export default Logout;
