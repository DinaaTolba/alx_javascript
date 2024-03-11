const request = require('request');

const movieId = process.argv[2];
const apiUrl = `https://swapi-api.alx-tools.com/api/films/${movieId}/`;

request(apiUrl, (error, response, body) => {
    if (error) {
        console.error(error);
        return;
    }

    if (response.statusCode !== 200) {
        console.error(`Error: ${response.statusCode}`);
        return;
    }

    const movie = JSON.parse(body);
    const charactersUrls = movie.characters;

    // Function to get character names from character URLs
    const getCharacterName = (url) => {
        return new Promise((resolve, reject) => {
            request(url, (error, response, body) => {
                if (error) {
                    reject(error);
                    return;
                }
                if (response.statusCode !== 200) {
                    reject(`Error: ${response.statusCode}`);
                    return;
                }
                const character = JSON.parse(body);
                resolve(character.name);
            });
        });
    };

    // Array to store promises of character names
    const characterPromises = charactersUrls.map(url => getCharacterName(url));

    // Wait for all promises to resolve and print character names
    Promise.all(characterPromises)
        .then(characterNames => {
            characterNames.forEach(name => console.log(name));
        })
        .catch(error => console.error(error));
});
