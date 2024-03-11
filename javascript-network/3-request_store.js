const axios = require('axios');
const fs = require('fs');

const url = process.argv[2];
const filePath = process.argv[3];

// Function to get the contents of the webpage and store it in a file
const getRequestAndStore = async (url, filePath) => {
    try {
        const response = await axios.get(url);
        const body = response.data;
        
        // Write the body response to the file
        fs.writeFile(filePath, body, 'utf-8', (err) => {
            if (err) {
                console.error('Error writing to file:', err);
                return;
            }
            console.log(`The body response has been saved to ${filePath}`);
        });
    } catch (error) {
        console.error('Error:', error.message);
    }
};

getRequestAndStore(url, filePath);
