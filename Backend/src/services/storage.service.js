const ImageKit = require("imagekit");

require("dotenv").config();
const imagekit = new ImageKit({
  publicKey: process.env.IMAGEKIT_PUBLIC_KEY,
  privateKey: process.env.IMAGEKIT_PRIVATE_KEY,
  urlEndpoint: process.env.IMAGEKIT_URL,
});

async function uploadFile(buffer) {
  const result = await imagekit.upload({
    file: buffer.toString("base64"),
    fileName: "image.jpg",
  });

  console.log(result);
  return result;
}

module.exports = uploadFile;
