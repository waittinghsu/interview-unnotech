import Vue from 'vue';
import dayjs from 'dayjs';

const dictionary = key => {
    const dictionary = {
        none: '無'
    };

    return key in dictionary ? dictionary[key] : key;
};

export { dictionary };

Vue.filter('dictionary', key => {
    return dictionary(key);
});

Vue.filter('nl2br', text => {
    return (
        text
            // .replace(/&/g, '&amp;')
            // .replace(/</g, '&lt;')
            // .replace(/>/g, '&gt;')
            .replace(/\n/g, '<br />')
    );
});

Vue.filter('dayjs', (datetime, format) => {
    format = format || 'YYYY/MM/DD';

    const d = dayjs(datetime);

    if (!d.isValid()) {
        return `${datetime} is not a date format.`;
    }

    return d.format(format);
});
