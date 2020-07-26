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

$('#searchBtn').bind('click', () => {
    // get input from text
    // get input from select box
    const searchParams = getSearchParameters();
    // call api
    wrapper.getQuotes().then((quotes) => {
        const $quotesContainer = $('#quotes-container');
        for (let i = 0; i < quotes.length; i++) {
            const card = new QuoteCard(
                quotes[i][CONST.QUOTE_FIELD],
                quotes[i][CONST.CHARACTER_FIELD],
                quotes[i][CONST.ANIME_FIELD],
            );
            console.log(card);
            $quotesContainer.append(card.render());
        }
        console.log(quotes);
    });
});

$.ajax({
    url: 'https://anime-chan.herokuapp.com/api/quotes/random',
    type: 'GET',
    dataType: 'json',
    async: true,
    success: (data) => {
        console.log('hello');
        console.log(data);
    },
    error: () => {
        console.log('fail');
    },
    complete: () => {
        console.log('always');
    },
});
