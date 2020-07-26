import * as CONST from './constants.js';

// Wrapper for anime-chan API
export default class APIWrapper {
    constructor() {
        this.baseUrl = CONST.API_URL;
        this.quotesUri = CONST.QUOTES_URI;
    }

    // Gets 10 quotes by default
    async getQuotes() {
        try {
            return $.ajax({
                url: `${this.baseUrl}/${this.quotesUri}`,
                type: CONST.GET,
                dataType: CONST.JSON,
                async: true,
            });
        } catch (e) {
            console.error(e);
            return null;
        }
    }
}
