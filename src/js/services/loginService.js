import { sendPostRequest } from "./fetchRequest";

const loginService = ( username, password ) => {
    const path = "10.255.248.60:3030/users/login";
    const body = {
        username,
        password,
    };
    console.log( body );
    sendPostRequest( path, body );
};

export default {
    loginService,
};
