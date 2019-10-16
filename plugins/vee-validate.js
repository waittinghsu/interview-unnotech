// import Vue from 'vue';
// import VeeValidate, { Validator } from 'vee-validate';
// import tw from 'vee-validate/dist/locale/zh_TW.json';

// Vue.use(VeeValidate);

// Validator.localize('zh_TW', {
//     ...tw,
//     ...{
//         custom: {
//             // email: {
//             //     required: '電子信箱尚未填寫'
//             // },
//             // terms: {
//             //     required: '條款未勾選'
//             // }
//         }
//     }
// });

import { extend } from 'vee-validate';
import { required } from 'vee-validate/dist/rules';

// install the 'required' rule.
extend('required', {
    ...required,
    message: 'This field is required'
});
