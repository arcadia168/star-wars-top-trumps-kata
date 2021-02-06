import axios from 'axios';

const StarWarsApiBaseUrl = 'http://swapi.dev/api';
export default class StarWarsApiService {
    static async fetchStarships() {
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
        }
    }
    //have outer function, get random starships...
    //have outer function, get random characters...
}
