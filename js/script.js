var Quotes = [
    {
        writer: 'Marilyn Monroe',
        isQuote: 'I\'m selfish, impatient and a little insecure. I make mistakes.'
    },
    {
        writer: ' Albert Einstein  ',
        isQuote: 'Two things are infinite: the universe and human stupidity; and I\'m not sure about the universe.'
    },

    {
        writer: ' Albert Einstein  ',
        isQuote: 'Two things are infinite: the universe and human stupidity; and I\'m not sure about the universe.'
    },
    {
        writeR: ' Frank Zappa',
        isQuote: 'So many books, so little time.'
    },
    {
        writer: 'Mae West',
        isQuote: 'You only live once, but if you do it right, once is enough.'
    },
    {
        writer: 'Nelson Mandela',
        isQuote: 'Resentment is like drinking poison and waiting for your enemies to die.'
    },
    {
        writer: 'Elbert Hubbard',
        isQuote: 'Do not take life too seriously. You will not get out alive.'
    },
    {
        writer: 'Oscar Wilde',
        isQuote: 'Be yourself; everyone else is already taken.'
    }
];

function Quote() {
    var semo = parseInt(Math.random() * Quotes.length);
    document.getElementById('Quote').textContent = `\"${Quotes[semo].isQuote}\"`;
    document.getElementById('Quotee').textContent = `--${Quotes[semo].writer}`;

}
