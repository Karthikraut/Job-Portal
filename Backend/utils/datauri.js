// Import the DataUriParser from the 'datauri' package.
// This will help convert file buffers into base64-encoded Data URIs.
import DataUriParser from 'datauri/parser.js';

// Import 'path' to work with file paths and extensions.
import path from 'path';

/**
 * Converts an uploaded file (typically from multer) into a Data URI.
 * This is especially useful when uploading files to services like Cloudinary that accept base64 input.
 *
 * @param {Object} file - The uploaded file object, containing:
 *                        - originalname: original file name (used to extract file extension)
 *                        - buffer: file data in Buffer format
 * @returns {string} - A base64-encoded Data URI string (e.g., data:image/png;base64,...)
 */
const getDataUri = (file) => {
    try {
        console.log("Input file in getDataUri:", file);
        
        // Initialize a new instance of DataUriParser
        const parser = new DataUriParser();

        // Extract the file extension from the original file name (e.g., .png, .pdf)
        const extname = path.extname(file.originalname).toString();
        console.log("File extension:", extname);

        // Use parser.format to convert the buffer into a data URI using the file extension
        const dataUri = parser.format(extname, file.buffer);
        console.log("Generated dataUri:", dataUri);

        // Return the complete dataUri object
        return dataUri;
        
    } catch (error) {
        console.error("Error in getDataUri:", error);
        throw new Error("Failed to convert file to Data URI");
    }
}

export default getDataUri;
