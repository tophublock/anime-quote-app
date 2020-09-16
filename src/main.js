import * as CONST from './constants.js';
import AnimeChanService from './animechan_service.js';
import QuoteCard from './quote.js';
import styleInputNumber from './input_number.js';
import styleSelect from './select.js';

const wrapper = new AnimeChanService();
const waitMs = 250;

// TODO: Support multiple character search
function getSearchParameters() {
    return {
        text: $('#search-text').val() || '',
        category: $('#search-category').val(),
    };
}

function convertQuotesToQuoteCards(quotes) {
    const cards = [];
    for (let i = 0; i < quotes.length; i++) {
        const card = new QuoteCard(
            quotes[i][CONST.QUOTE_FIELD],
            quotes[i][CONST.CHARACTER_FIELD],
            quotes[i][CONST.ANIME_FIELD],
        );
        cards.push(card);
    }
    return cards;
}

function addQuotesToContainer(quotes) {
    const $quotesContainer = $('#quotes-container');
    const cards = convertQuotesToQuoteCards(quotes);
    cards.forEach((card) => {
        $quotesContainer.append(card.renderJquery());
    });
}

// TODO: fix size of quotes container
function clearQuotesContainer() {
    $('#quotes-container').empty();
}

function onClickSearchBtn(e) {
    $(e.currentTarget).prop('disabled', true);
    clearQuotesContainer();
    const searchParams = getSearchParameters();
    if (searchParams.category === CONST.ANIME_CATEGORY) {
        wrapper.getQuotesByAnime(searchParams.text).then((quotes) => {
            addQuotesToContainer(quotes);
        });
    } else if (searchParams.category === CONST.CHARACTER_CATEGORY) {
        wrapper.getQuotesByCharacter(searchParams.text).then((quotes) => {
            addQuotesToContainer(quotes);
        });
    } else {
        wrapper.getQuotesByAnime(CONST.ANIME_DEFAULT).then((quotes) => {
            addQuotesToContainer(quotes);
        });
    }
    setTimeout(() => {
        $(e.currentTarget).prop('disabled', false);
    }, waitMs);
}

$(document).on('keypress', (e) => {
    if (e.keyCode === 13) {
        onClickSearchBtn();
    }
});

$('#search-btn').bind('click', onClickSearchBtn);

// TODO: add input to support pagination (for default)
$('#default-btn').bind('click', (e) => {
    console.log('default clicked');
    $(e.currentTarget).prop('disabled', true);
    clearQuotesContainer();
    const page = $('#page-number').val();
    wrapper.getDefaultQuotes(page).then((quotes) => {
        addQuotesToContainer(quotes);
    });
    setTimeout(() => {
        $(e.currentTarget).prop('disabled', false);
    }, waitMs);
});

$('#random-btn').bind('click', (e) => {
    $(e.currentTarget).prop('disabled', true);
    clearQuotesContainer();
    wrapper.getRandomQuote().then((quotes) => {
        addQuotesToContainer(quotes);
    });
    setTimeout(() => {
        $(e.currentTarget).prop('disabled', false);
    }, waitMs);
});

$('select').each((idx, el) => {
    styleSelect($(el));
});

$('input[type="number"]').each((idx, el) => {
    styleInputNumber($(el));
})