import { book } from '@/apis';
import { HTTP_STATUS_NO_CONTENT } from '@/plugins/defined';

/**
 * only save property id.
 */
export const state = () => ({
    books: []
});

export const mutations = {
    create(state, bookId) {
        state.books.push(bookId);
    },
    remove(state, bookId) {
        const trashed = [bookId];
        state.books = state.books.filter(id => !trashed.includes(id));
    },
    flush(state, books) {
        state.books = books || [];
    }
};

export const getters = {
    books: state => {
        return state.books;
    }
};

export const actions = {
    async sync({ commit }, books) {
        commit('flush', await books);
    },
    async touch({ commit, state }, bookId) {
        const { books } = state;

        if (books.includes(bookId)) {
            const response = await book(this.$axios).detach(bookId);

            // console.log(
            //     `debounce ajax to server property:(${bookId}) remove book.`,
            //     response,
            //     HTTP_STATUS_NO_CONTENT
            // );

            if (response.status === HTTP_STATUS_NO_CONTENT) {
                commit('remove', bookId);
            }

            return;
        }

        const response = await book(this.$axios).attach(bookId);

        // console.log(
        //     `debounce ajax to server property:(${bookId}) create book.`,
        //     response,
        //     HTTP_STATUS_NO_CONTENT
        // );

        if (response.status === HTTP_STATUS_NO_CONTENT) {
            commit('create', bookId);
        }
    },
    flush({ commit }) {
        commit('flush');
    }
    // async nuxtServerInit({ dispatch }) {
    //     await console.log('book service init');
    // }
};
