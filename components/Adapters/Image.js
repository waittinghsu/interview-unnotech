import { imgUrl } from '@/plugins/helpers';

export default class Image {
    constructor(images) {
        this.raw = images;
    }

    get lazy() {
        return imgUrl(this.raw.lazy);
    }

    get small() {
        return imgUrl(this.raw.small);
    }

    get medium() {
        return imgUrl(this.raw.medium);
    }

    get large() {
        return imgUrl(this.raw.large);
    }

    get xLarge() {
        return imgUrl(this.raw.xLarge);
    }

    get xxLarge() {
        return imgUrl(this.raw.xxLarge);
    }
}
