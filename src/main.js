// TODO: Support multiple character search
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
