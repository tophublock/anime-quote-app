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
            return $.get({
                url: `${this.baseUrl}/${this.quotesUri}`,
                dataType: CONST.JSON,
                async: true,
            });
        } catch (e) {
            console.error(e);
            return null;
        }
    }

    // Get a random quote
    async getRandomQuote() {
        try {
            return $.get({
                url: `${this.baseUrl}/${this.quotesUri}/random`,
                dataType: CONST.JSON,
                async: true,
            });
        } catch (e) {
            console.error(e);
            return null;
        }
    }
}
