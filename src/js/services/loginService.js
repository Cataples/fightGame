import localStorageHelper from "../helpers/localStorage";

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
    } )
        .then( response => {
            return response.json().then( res => {
                localStorageHelper.saveToLocalStorage( "token", res.user.token );
                localStorageHelper.saveToLocalStorage( "userId", res.user.userId );
                return res;
            } );
        } );
};
export default loginService;
