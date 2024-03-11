const request = require('request');

const apiUrl = process.argv[2];
const characterId = '18';

request(apiUrl, (error, response, body) => {
    if (error) {
        console.error(error);
        return;
    }

    if (response.statusCode !== 200) {
        console.error(`Error: ${response.statusCode}`);
        return;
    }

    const filmsData = JSON.parse(body).results;
    let count = 0;
    filmsData.forEach(film => {
        console.log(`Characters for film "${film.title}":`, film.characters);
        if (film.characters.includes(`https://swapi-api.alx-tools.com/api/people/${characterId}/`)) {
            count++;
        }
    });
    console.log(count);
});
