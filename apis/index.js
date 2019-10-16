import Book from './Book';

const book = $axios => {
    return new Book($axios);
};

export { book };
