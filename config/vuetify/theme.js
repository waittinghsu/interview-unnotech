// const tiffany = {
//     base: '#32ccbc',
//     lighten5: '#E0F6F4',
//     lighten4: '#98E5DD',
//     lighten3: '#7ADBD0',
//     lighten2: '#00BFAC',
//     lighten1: '#00B29C',
//     darken1: '#00A38E',
//     darken2: '#00927D',
//     darken3: '#00826D',
//     darken4: '#00644F',
//     accent1: '#795548',
//     accent2: '#795548',
//     accent3: '#795548',
//     accent4: '#795548'
// };

// const gray = {
//     base: '#202122',
//     lighten5: '#F9FAFC',
//     lighten4: '#F4F5F7',
//     lighten3: '#DFE0E2',
//     lighten2: '#DDDEDF',
//     lighten1: '#BCBDBF',
//     darken1: '#9D9E9F',
//     darken2: '#747576',
//     darken3: '#606162',
//     darken4: '#414243',
//     accent1: '#795548',
//     accent2: '#795548',
//     accent3: '#795548',
//     accent4: '#795548'
// };

// const amber = {
//     base: '#FFAF19',
//     lighten5: '#FFF7E1',
//     lighten4: '#FFEAB4',
//     lighten3: '#FFD78C',
//     lighten2: '#FFD153',
//     lighten1: '#FFC631',
//     darken1: '#FFBC1D',
//     darken2: '#FE9C19',
//     darken3: '#FD8B18',
//     darken4: '#FC6C18',
//     accent1: '#795548',
//     accent2: '#795548',
//     accent3: '#795548',
//     accent4: '#795548'
// };

// const deepOrange = {
//     base: '#E53935',
//     lighten5: '#FFEBEE',
//     lighten4: '#FFCDD2',
//     lighten3: '#F29C9A',
//     lighten2: '#E57373',
//     lighten1: '#EF5250',
//     darken1: '#F44236',
//     darken2: '#D32E2F',
//     darken3: '#C62728',
//     darken4: '#B71A1C',
//     accent1: '#795548',
//     accent2: '#795548',
//     accent3: '#795548',
//     accent4: '#795548'
// };

// const blue = {
//     base: '#0212A2',
//     lighten5: '#E9EAFB',
//     lighten4: '#C6C9F4',
//     lighten3: '#A0A6EC',
//     lighten2: '#7883E5',
//     lighten1: '#5966DF',
//     darken1: '#374AD7',
//     darken2: '#3241CC',
//     darken3: '#2837C0',
//     darken4: '#1D2BB4',
//     accent1: '#795548',
//     accent2: '#795548',
//     accent3: '#795548',
//     accent4: '#795548'
// };

// const purple = {
//     base: '#5300A4',
//     lighten5: '#F6E4F7',
//     lighten4: '#E8BCEC',
//     lighten3: '#D98EE1',
//     lighten2: '#C95ED5',
//     lighten1: '#BD32CC',
//     darken1: '#AF00C3',
//     darken2: '#A000BD',
//     darken3: '#8B00B7',
//     darken4: '#7800B1',
//     accent1: '#795548',
//     accent2: '#795548',
//     accent3: '#795548',
//     accent4: '#795548'
// };

import { tiffany, gray, amber, deepOrange, blue, purple } from './colors';

export default {
    // dark: true,
    themes: {
        light: {
            primary: tiffany,
            secondary: gray,
            gray,
            info: tiffany,
            warning: amber,
            error: deepOrange,
            success: tiffany,
            blue,
            purple
        },
        dark: {
            primary: tiffany,
            secondary: gray,
            gray,
            info: tiffany,
            warning: amber,
            error: deepOrange,
            success: tiffany,
            blue,
            purple
        }
    }
};
