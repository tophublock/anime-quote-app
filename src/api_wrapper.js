// Wrapper for anime-chan API

export default class APIWrapper {
    constructor(baseUrl) {
        this.baseUrl = baseUrl;
        this.quote = undefined;
    }

    getQuote() {
        return this.quote;
    }
}
