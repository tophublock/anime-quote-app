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

// TODO: clear quotes container when clicking search/random
$('#searchBtn').bind('click', () => {
    const searchParams = getSearchParameters();
    wrapper.getDefaultQuotes().then((quotes) => {
        // TODO: refactor into a common function
        const $quotesContainer = $('#quotes-container');
        const cards = convertQuotesToQuoteCards(quotes);
        cards.forEach((card) => {
            $quotesContainer.append(card.render());
        });
    });
});

$('#randomBtn').bind('click', () => {
    wrapper.getRandomQuote().then((quotes) => {
        const $quotesContainer = $('#quotes-container');
        const cards = convertQuotesToQuoteCards(quotes);
        cards.forEach((card) => {
            $quotesContainer.append(card.render());
        });
    });
});
