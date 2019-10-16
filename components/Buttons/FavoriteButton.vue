<template lang="pug">
    v-btn.v-btn__favorite(:class="[favoriteClass]" :depressed="depressed" :small="small" :large="large" :x-small="xSmall" :x-large="xLarge" :absolute="absolute" :top="top" :bottom="bottom" :right="right" :color="color" :style="btnStyle" fab @click.prevent="click")
        s-icon(icon="collect" :size="svgSize" :color="isActived")
</template>

<script>
import { mapState, mapActions } from 'vuex';
import SIcon from '@/components/SIcon';
import { gtm } from '@/apis';
export default {
    components: {
        SIcon
    },
    props: {
        item: {
            type: Object,
            default: null
        },
        absolute: {
            type: Boolean,
            default: false
        },
        top: {
            type: Boolean,
            default: false
        },
        bottom: {
            type: Boolean,
            default: false
        },
        right: {
            type: Boolean,
            default: false
        },
        depressed: {
            type: Boolean,
            default: false
        },
        btnStyle: {
            type: [String, Object],
            default: ''
        },
        color: {
            type: String,
            default: 'white'
        },
        elevation: {
            type: Number,
            default: 1
        },
        xSmall: {
            type: Boolean,
            default: false
        },
        small: {
            type: Boolean,
            default: false
        },
        large: {
            type: Boolean,
            default: false
        },
        xLarge: {
            type: Boolean,
            default: false
        }
    },
    data: () => ({}),
    computed: {
        svgSize() {
            if (this.large || this.xLarge) {
                return '52';
            }

            if (this.small || this.xSmall) {
                return '28';
            }

            return '36';
        },
        favoriteClass() {
            return {
                'ma-0': true,
                [`elevation-${this.elevation}`]:
                    (this.elevation > 0) &
                    (this.elevation < 25) &
                    !this.depressed
            };
        },
        ...mapState({
            isActived({ favorites }) {
                return favorites.properties.includes(this.item.id)
                    ? 'deep-orange'
                    : 'gray lighten-1';
            }
        })
    },
    methods: {
        click() {
            if (!this.$auth.$state.loggedIn) {
                this.$nuxt.$emit('LOGIN_OR_REGISTER', true);
                return false;
            }
            this.touch(this.item.id);
            gtm(this.$gtm).triggerAddToWishlistEvent(this.item);
        },
        ...mapActions({ touch: 'favorites/touch' })
    }
};
</script>
