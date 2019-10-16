import Vue from 'vue';
import { VTextField } from 'vuetify/lib';
import VuetifyGoogleAutocomplete from 'vuetify-google-autocomplete';

Vue.component('v-text-field', VTextField);

Vue.use(VuetifyGoogleAutocomplete, {
    apiKey: false,
    version: 3.33,
    language: 'zh-TW'
});
