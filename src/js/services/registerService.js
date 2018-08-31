import { sendPostRequest } from "./fetchRequest";

const registerRequest = ( username, password ) =>
    sendPostRequest( "10.255.248.60:3030/users/registration", {
        username,
        password,
    } )
        .then( response => response.json() )
        .then( response => console.log( response ) )
        .catch( err => console.log( err ) );

export default registerRequest;
