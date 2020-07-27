import * as CONST from './constants.js';
import AnimeChanService from './animechan_service.js';
import QuoteCard from './quote.js';

const wrapper = new AnimeChanService();

// TODO: Support multiple character search
function getSearchParameters() {
    return {
        text: $('#search-text').val() || '',
        category: $('#searchCategory').val(),
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
        $quotesContainer.append(card.render());
    });
}

// TODO: clear quotes container when clicking search/random
// TODO: add button to get default quotes
// TODO: add input to support pagination (for default)
$('#searchBtn').bind('click', () => {
    const searchParams = getSearchParameters();
    wrapper.getDefaultQuotes().then((quotes) => {
        addQuotesToContainer(quotes);
    });
});

$('#randomBtn').bind('click', () => {
    wrapper.getRandomQuote().then((quotes) => {
        addQuotesToContainer(quotes);
    });
});
