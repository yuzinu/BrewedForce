module.exports = {
  mongoURI: process.env.MONGO_URI,
  secretOrKey: process.env.SECRET_OR_KEY,
  aws: {
    bucketName: "brewed-force-pro",
    uploadedFileURL: process.env.AWS_Uploaded_File_URL_LINK,
    accessKey: process.env.AWS_ACCESS_KEY,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    region: "us-east-1",
  },
  googleKey: process.env.GOOGLE_KEY
};