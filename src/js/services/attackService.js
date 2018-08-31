const attackService = ( attacker, attacked ) => {
    const path = "http://10.255.248.60:3030/attack";
    const body = {
        attacker,
        attacked,
    };

    return fetch( path, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify( body ),
    } ).then( response => response.json() );
};
export default attackService;
