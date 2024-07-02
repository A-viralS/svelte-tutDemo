//using the .server.js so that the file is not sent to the client side that is browser 
export async function load({params}){
    console.log(params);
    return {
        content: `This is the content for ${params.slug} `
    }
}