import * as CONST from './constants.js';

export default class Quote {
    constructor(quote, author, source) {
        this._quote = quote;
        this._author = author;
        this._source = source;
    }

    render() {
        const $card = $('<div>', { class: CONST.QUOTE_CARD_CLASS });

        // Inner card elements
        const $quote = $('<div>', { class: CONST.QUOTE_CLASS });
        $quote.text(this._quote);
        const $author = $('<div>', { class: CONST.AUTHOR_CLASS });
        $author.text(this._author);
        const $source = $('<div>', { class: CONST.SOURCE_CLASS });
        $source.text(this._source);

        $card.append($quote).append($author).append($source);
        return $card;
    }

    get quote() {
        return this._quote;
    }

    set quote(q) {
        this._quote = q;
    }
}
