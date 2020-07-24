export default class Quote {
    constructor(quote, author, source) {
        this._quote = quote;
        this._author = author;
        this._source = source;
    }

    get quote() {
        return this._quote;
    }

    set quote(q) {
        this._quote = q;
    }
}
