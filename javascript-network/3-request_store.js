const request = require('request');
const fs = require('fs');

const url = process.argv[2];
const filePath = process.argv[3];

// Function to get the contents of the webpage and store it in a file
const getRequestAndStore = (url, filePath) => {
    request(url, (error, response, body) => {
        if (error) {
            console.error('Error:', error);
            return;
        }

        if (response.statusCode !== 200) {
            console.error('Error: Unexpected status code:', response.statusCode);
            return;
        }

        // Write the body response to the file
        fs.writeFile(filePath, body, 'utf-8', (err) => {
            if (err) {
                console.error('Error writing to file:', err);
                return;
            }
            console.log(`The body response has been saved to ${filePath}`);
        });
    });
};

getRequestAndStore(url, filePath);
