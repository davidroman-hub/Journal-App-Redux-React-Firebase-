

export const fileUpload = async (file) => {
    // return url from the photo
    const cloudUrl = ' https://api.cloudinary.com/v1_1/dm8dxwvix/upload' //<=== from cloudinary
    
    // we need to create the form data as a postman to send the photo to the Api
    const formDataCloudinary = new FormData();
    formDataCloudinary.append('upload_preset', 'react-journal');
    formDataCloudinary.append('file', file)
    try {
        const resp = await fetch(cloudUrl, {
            method:'POST',
            body: formDataCloudinary
        })
        if(resp.ok) {
            const cloudResp = await resp.json()
            return cloudResp.secure_url; // <== secure_url from the response 
        } else{
            throw await resp.json()
        }
    } catch (error) {
        throw error
    }
}