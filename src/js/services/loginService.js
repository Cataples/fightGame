const loginService = ( username, password ) => {
    const path = "http://10.255.248.60:3030/users/login";
    const body = {
        username,
        password,
    };

    return fetch( path, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify( body ),
    } ).then( response => response.json() );
};
export default {
    loginService,
};
