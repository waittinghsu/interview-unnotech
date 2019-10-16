import { configure, addDecorator } from '@storybook/vue'
import Vue from 'vue'

import vuetifyConfig from '@/config/vuetify/storybook'

import '@/plugins/svg-icon.js'
import '@/plugins/filters.js'
import '@/plugins/vee-validate.js'

Vue.component('nuxt-link', {
    functional: true,
    render (createElement, context) {
        let allClass = {};
        let arrClass = context.data.staticClass
            ? context.data.staticClass.split(' ')
            : [];
        arrClass.forEach(theClass => {
            allClass[theClass] = true;
        })
        return createElement('a', { class: allClass }, context.children)
    }
});

Vue.component('nuxt', {
    functional: true,
    render (createElement, context) {
        return context.children;
    }
});

Vue.component('client-only', {
    functional: true,
    render (createElement, context) {
        return context.children;
    }
});

const req = require.context('@/stories', true, /stories\.js$/)

// 每個 stories 都會自動加上 v-app
addDecorator(() => ({
    vuetify: vuetifyConfig,
    template: '<v-app style="background-color: transparent;"><story/></v-app>',
    style: '.theme--light.application { background-color: transparent; }'
}));

function loadStories() {
  req.keys().forEach(filename => req(filename))
}

configure(loadStories, module)
