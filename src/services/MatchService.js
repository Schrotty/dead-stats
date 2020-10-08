export default class MatchService {
    getMatches() {
        return JSON.parse(localStorage.getItem('matches'))['data'];
    }
}