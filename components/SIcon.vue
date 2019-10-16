<template lang="pug">
    svg-icon.pa-1.v-icon(:name="icon" :width="w" :height="h" :color="theme" :dir="dir")
</template>

<script>
import SvgIcon from 'vue-svgicon';
import colors from '@/config/vuetify/colors';

export default {
    components: { SvgIcon },
    props: {
        color: {
            type: String,
            default: 'rgba(0,0,0,0.54)'
        },
        icon: {
            type: String,
            required: true
        },
        size: {
            type: String,
            default: '24'
        },
        width: {
            type: String,
            default: null
        },
        height: {
            type: String,
            default: null
        },
        dir: {
            type: String,
            default: null
        }
    },
    data: () => ({}),
    computed: {
        w() {
            return this.width || this.size;
        },
        h() {
            return this.height || this.size;
        },
        theme() {
            if (
                this.color === undefined ||
                this.color === '' ||
                this.color === 'rgba(0,0,0,0.54)'
            ) {
                return this.color;
            }

            const [major, minus] = this.color.split(' ');

            if (minus === undefined) {
                return Object.keys(colors[major]).includes('base') >= 0
                    ? colors[major].base
                    : colors[major];
            }

            return colors[major][minus];
        }
    }
};
</script>
