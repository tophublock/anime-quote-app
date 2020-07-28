import * as CONST from './constants.js';
import Card from './card.js';

export default class QuoteCard {
    constructor(quote, author, source) {
        this._quote = quote;
        this._author = author;
        this._source = source;
        this._setCard();
    }

    _setCard() {
        const $front = this._renderFront();
        const $back = this._renderBack();
        const frontEl = $front.get(0);
        const backEl = $back.get(0);
        this._card = new Card(frontEl, backEl);
    }

    _renderFront() {
        const $front = $('<div>');
        const $quote = $('<p>', { class: CONST.QUOTE_CLASS });
        $quote.text(this._quote);
        $front.append($quote);
        return $front;
    }

    _renderBack() {
        const $back = $('<div>');
        const $author = $('<p>', { class: CONST.AUTHOR_CLASS });
        $author.text(this._author);
        const $source = $('<p>', { class: CONST.SOURCE_CLASS });
        $source.text(this._source);

        const $copy = $(`<button> ${CONST.COPY} </button>`);
        $copy.bind('click', (e) => {
            e.stopPropagation();
            // Copy text
            let dummy = document.createElement('textarea');
            document.body.appendChild(dummy);
            dummy.value = `"${this._quote}" - ${this._author} (${this._source})`;
            dummy.select();
            document.execCommand('copy');
            document.body.removeChild(dummy);
            dummy = null;
        });
        $back.append($author).append($source).append($copy);
        return $back;
    }

    // TODO: limit card size and add scrolling if quote is long
    renderJquery() {
        const $quoteCard = $('<div>', { class: CONST.QUOTE_CARD_CLASS });
        const card = this._card.render();
        // TODO fix mouseenter bug on left side of card
        this._card.bindEvent('click', () => {
            console.log('clicked');
            this._card.flipCard();
        });
        // this._card.bindEvent('mouseenter', () => {
        //     console.log('clicked');
        //     this._card.flipCard();
        // });
        // this._card.bindEvent('mouseleave', () => {
        //     console.log('clicked');
        //     this._card.flipCard();
        // });
        $quoteCard.append($(card));
        return $quoteCard;
    }

    get quote() {
        return this._quote;
    }

    set quote(q) {
        this._quote = q;
    }
}
