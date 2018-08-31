const sendRequest = ( method, headers ) => ( path, body ) =>
    fetch( path, {
        method,
        headers,
        body,
    } ).then( response => response.json() );

const sendGetRequest = sendRequest( "GET", { "Content-Type": "application/json" } );
const sendPostRequest = sendRequest( "POST", { "Content-Type": "application/json" } );

export { sendGetRequest, sendPostRequest };
