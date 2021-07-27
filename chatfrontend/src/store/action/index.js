//here we export the function process with the defined parameters and define acrtion object PROCESS, which will reurn the same parameters as the payload.
export const process = (encrypt, text, cypher) => {
    return {
        type: "Process",
        payload: {
            encrypt,
            text,
            cypher,
        },
    };
};