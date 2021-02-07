import axios from 'axios';

const StarWarsApiBaseUrl = 'http://swapi.dev/api';
export default class StarWarsApiService {
    static async fetchStarships() {

        //TODO: fetch a random page number from 1 - 4!!

        try {
            let res = await axios.get(`${StarWarsApiBaseUrl}/starships/`);
            let { data } = res;
            return data;
        } catch(error) {
            //TODO: handle errors here...
            //TODO: write test for below code...
            console.error(
                `An error occurred when attempting to fetch starships: ${JSON.stringify(error)}`
            );
            return new Error('Failed to fetch starships');
        }
    }

    static async fetchCharacters() {

        //TODO: fetch a random page number from 1 - 4!!

        try {
            let res = await axios.get(`${StarWarsApiBaseUrl}/people/`);
            let { data } = res;
            return data;
        } catch(error) {
            //TODO: handle errors here...
            //TODO: write test for below code...
            console.error(
                `An error occurred when attempting to fetch starships: ${JSON.stringify(error)}`
            );
            return new Error('Failed to fetch characters');
        }
    }
}
