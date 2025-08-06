// Import Node.js core modules for file system and path operations
const fs = require("fs"); // Provides file system related functionality
const path = require("path"); // Provides utilities for working with file and directory paths

/**
 * Recursively crawls through a directory and its subdirectories
 * @param {string} dir - The directory path to start crawling from
 */

function crawlDirectory(dir) {
  // Use fs.readdir to asynchronously read the contents of the directory
  // The { withFileTypes: true } option returns fs.Dirent objects instead of strings
  fs.readdir(dir, { withFileTypes: true }, (err, files) => {
    // Error handling callback - runs if there's an error reading the directory
    if (err) {
      // Log the error to console and exit the current directory processing
      return console.error("Error reading directory:", err);
    }

    // Process each file/directory found in the current directory
    // files is an array of fs.Dirent objects representing directory entries
    files.forEach((file) => {
      // Create the full absolute path by joining the parent directory with the current file/dir name
      const filePath = path.join(dir, file.name);

      // Check if the current entry is a directory (not a file)
      if (file.isDirectory()) {
        // Log the directory path to console
        console.log(`Directory: ${filePath}`);

        // Recursively call crawlDirectory to process this subdirectory
        // This is what makes the crawler go "deep" into nested folders
        crawlDirectory(filePath);
      } else {
        // If it's a file (not directory), just log the file path
        console.log(`File: ${filePath}`);
      }
    });
  });
}

// Define the starting point for directory crawling
// './' means start from the current directory where the script is run
// You could change this to any valid path like '/Users/name/Documents'
const startingDirectory = "./";

// Begin the directory crawling process by calling our function
// with the starting directory path
crawlDirectory(startingDirectory);
