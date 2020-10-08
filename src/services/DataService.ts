import axios from 'axios'
import Dexie from "dexie";

export default class DataService {
    static database: Dexie;

    static initiateDatabase() {
        DataService.database = new Dexie("deadStats")
        DataService.database.version(1).stores({
            matches: "++id, killer, map, result"
        })
    }

    static async storeMatch(match: any) {
        await DataService.database.table('matches').add(match)
    }

    static async retrieveMatches() {
        return DataService.database.table('matches').toArray();
    }

    getKiller() {
        return axios.get('./data/killer.json').then(res => res.data)
    }

    getMaps() {
        return axios.get('./data/maps.json').then(res => res.data)
    }

    getTags() {
        return axios.get('./data/tags.json').then(res => res.data)
    }

    async getResults() {
        return await axios.get('./data/results.json').then((result) => result.data)
    }
}