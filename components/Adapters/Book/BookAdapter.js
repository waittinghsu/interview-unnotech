export default class BookAdapter {
    constructor(data) {
        this.raw = data || {};
    }

    get id() {
        return this.raw['@id'].split('/').pop();
    }

    get type() {
        return this.raw['@type'];
    }

    get title() {
        return this.raw.title;
    }

    get author() {
        return this.raw.author;
    }

    get description() {
        return this.raw.description;
    }

    get isbn() {
        return this.raw.isbn;
    }

    get publicationDate() {
        return this.raw.publicationDate;
    }
}
