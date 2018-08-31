const registerRequest = ( username, password, playerName, type ) => {
    fetch( "http://10.255.248.60:3030/users/registration", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify( {
            username,
            password,
            playerName,
            type,
        } ),
    } )
        .then( response => response.json() )
        .then( response => console.log( response ) );
};

export default registerRequest;
