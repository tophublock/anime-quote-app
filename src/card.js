import * as CONST from './constants.js';

// TODO: add copy quote button
export default class Card {
    constructor(frontEl, backEl) {
        this._status = CONST.HIDDEN_STATUS;
        this._frontEl = frontEl;
        this._backEl = backEl;
        this._card = undefined;
    }

    static addClassesToEl(element, classes) {
        classes.forEach((c) => {
            element.classList.add(c);
        });
    }

    _renderFront() {
        const front = document.createElement('div');
        front.classList.add(CONST.CARD_FRONT);
        // front.classList.add(CONST.CARD);
        front.appendChild(this._frontEl);
        return front;
    }

    _renderBack() {
        const back = document.createElement('div');
        back.classList.add(CONST.CARD_BACK);
        // back.classList.add(CONST.CARD);
        back.appendChild(this._backEl);
        return back;
    }

    _renderCardElement() {
        const card = document.createElement('div');
        card.classList.add(CONST.CARD);

        const front = this._renderFront();
        const back = this._renderBack();
        card.appendChild(front);
        card.appendChild(back);
        return card;
    }

    render() {
        this._card = this._renderCardElement();
        return this._card;
    }

    // TODO refactor card updating/flip card
    toggleVisibility() {
        if (this._status === CONST.HIDDEN_STATUS) {
            this._status = CONST.DEFAULT_STATUS;
        } else {
            this._status = CONST.HIDDEN_STATUS;
        }
        this._updateElement();
    }

    flipCard() {
        if (this._card.classList.contains(CONST.CARD_FLIP)) {
            this._card.classList.remove(CONST.CARD_FLIP);
        } else {
            this._card.classList.add(CONST.CARD_FLIP);
        }
    }

    bindEvent(event, func) {
        if (this._card) {
            this._card.addEventListener(event, func);
        }
    }

    set status(s) {
        this._status = s;
    }

    get status() {
        return this._status;
    }

    set value(v) {
        this._value = v;
    }

    get value() {
        return this._value;
    }
}
