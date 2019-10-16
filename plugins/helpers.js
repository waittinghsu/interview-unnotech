// export default function(ctx, inject) {
//     inject('injected', () => {
//         console.log('That was easy for inject!');
//     });
// }

/* eslint-disable no-extend-native */
String.prototype.toPascalCase = function() {
    return this.match(/[a-z]+/gi)
        .map(function(word) {
            return word.charAt(0).toUpperCase() + word.substr(1).toLowerCase();
        })
        .join('');
};
String.prototype.toCamelCase = function() {
    return this.replace(/^([A-Z])|[\s-_](\w)/g, function(
        match,
        p1,
        p2,
        offset
    ) {
        if (p2) return p2.toUpperCase();
        return p1.toLowerCase();
    });
};
/* eslint-enable no-extend-native */

const imgUrl = image => {
    if (process.browser) {
        const webp = JSON.parse(localStorage.getItem('webp'));

        if (webp && webp.canBeUsed) {
            image = image.replace('.png', '.webp').replace('.jpg', '.webp');
        }
    }

    return `${process.env.S3_BUCKET}/${image}`;
};

export { imgUrl };
