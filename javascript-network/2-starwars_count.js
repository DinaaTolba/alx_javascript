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
    const moviesWithWedgeAntilles = filmsData.filter(film => film.characters.includes(`https://swapi-api.alx-tools.com/api/people/${characterId}/`));
    console.log(moviesWithWedgeAntilles.length);
});
