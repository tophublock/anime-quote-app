export default class Quote {
    constructor(quote, author, source) {
        this.quote = quote;
        this.author = author;
        this.source = source;
    }

    get quote() {
        return this.quote;
    }

    set quote(q) {
        this.quote = q;
    }
}
