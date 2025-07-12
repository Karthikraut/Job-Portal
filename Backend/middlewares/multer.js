import multer from "multer";
const storage = multer.memoryStorage();
export const singleUpload = multer({storage}).single("file");

// Multer is a middleware for handling multipart/form-data, which is primarily used for uploading files in Node.js and Express applications.

// 📦 Why Use Multer?
// When you upload a file via an HTML form (<input type="file">), the request type is multipart/form-data. Express by default cannot handle this format — that’s where Multer comes in.

// 🔧 What Multer Does
// Parses incoming multipart/form-data requests

// Extracts the file(s) from the request

// Stores them:

// In memory, or

// On disk (local file system)

// Makes them available in req.file or req.files

// 📂 Memory Storage

// In this example, we are using memory storage, which means the uploaded files will be stored in memory as Buffer objects.
//  This is useful for small files or when you want to process the file immediately without saving it to disk.