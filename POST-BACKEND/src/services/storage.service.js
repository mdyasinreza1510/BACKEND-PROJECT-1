const ImageKit=require("@imagekit/nodejs")
require("dotenv").config();



//yaha se imagekit ka ek obj bana liya jaha pe url add ki hai aur yahi pe request jayegi file upload keliye
const imagekit = new ImageKit({
     privateKey: process.env['imgkit'],
    
    
})

//** yaha hm ek func banaya jisme buffer pas kiya jo kihmare img ki values hongi 
// ab wo buffer result me ayega aur 'imagekit.client.upload' imagekit ko upload ki req bhejega aur fir imagekit uska url banake file:--- me load krdega     */
async function uploadFile(buffer){
    const result =await imagekit.files.upload({
        file:buffer.toString("base64"),
        fileName:"image.jpg"
    })

    return result;
}

module.exports=uploadFile;