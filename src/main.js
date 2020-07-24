import APIWrapper from './api_wrapper.js';
import QuoteCard from './quote.js';

const wrapper = new APIWrapper('');

// TODO: Support multiple character search
function getSearchParameters() {
    return 0;
}

$('#searchBtn').bind('click', () => {
    // get input from text
    // get input from select box
    const searchParams = getSearchParameters();
    // call api
    const quote = wrapper.getQuote();
    // fill quote cards
    const quoteCard = new QuoteCard('', '', '');
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
