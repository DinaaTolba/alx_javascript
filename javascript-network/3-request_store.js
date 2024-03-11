const request = require('request');
const fs = require('fs');

const url = process.argv[2];
const filePath = process.argv[3];

request(url, (error, response, body) => {
    if (error) {
        console.error(error);
        return;
    }

    if (response.statusCode !== 200) {
        console.error(`Error: ${response.statusCode}`);
        return;
    }

    fs.writeFile(filePath, body, 'utf8', (err) => {
        if (err) {
            console.error(err);
            return;
        }
        console.log(`The body response has been saved to ${filePath}`);

        // Read the saved file and print its contents
        fs.readFile(filePath, 'utf8', (err, data) => {
            if (err) {
                console.error(err);
                return;
            }
            console.log(data);
        });
    });
});
