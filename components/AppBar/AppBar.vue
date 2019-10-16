<template lang="pug">
    v-app-bar.amber.lighten-1.mx-auto(flat app fixed :hide-on-scroll="hideOnScroll" :value="value" :extension="extension" :extension-height="extensionHeight")
        v-container.pa-0(:fluid="fluid")
            v-row(dense align="center")
                //v-col.pr-12(cols="auto")
                    svg-icon(name="bonus_points" width="24" height="24" color="#32ccbc")
                    //s-icon.hidden-md-and-up(:icon="'logo'" size="36" color="primary")
                v-col(cols="auto")
                    slot(name="left")
                v-spacer
                v-col(cols="4")
                    slot(name="medium")
                v-spacer
                v-col(cols="auto")
                    slot(name="right")
        slot(slot="extension" name="extension")
</template>

<script>
import SIcon from '@/components/SIcon';

export default {
    components: {
        SvgIcon: () => import('vue-svgicon'),
        SIcon
    },
    props: {
        fluid: {
            type: Boolean,
            default: false
        },
        value: {
            type: Boolean,
            default: true
        },
        hideOnScroll: {
            type: Boolean,
            default: false
        },
        extension: {
            type: Boolean,
            default: false
        },
        extensionHeight: {
            type: [Number, String],
            default: 48
        }
    },
    data: () => ({}),
    computed: {
        isLogin() {
            return this.$auth.$state.loggedIn;
        }
    },
    mounted() {},
    methods: {
        login() {
            // @todo 桌機 行動版 動作不一樣
            if (!this.$auth.$state.loggedIn) {
                this.$nuxt.$emit('LOGIN_OR_REGISTER', true);
                return false;
            }
        }
    }
};
</script>
