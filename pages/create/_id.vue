<template lang="pug">
    v-content.overflow-scrolling-touch.overflow-y-auto#scroll-container.gray.lighten-4(v-scroll:#scroll-container="onScroll")
        app-bar(hide-on-scrol fluid)
            v-btn(text color="white" slot="left" @click="$router.go(-1)") back
            .white--text.text-truncate.text-center(slot="medium")
                span.text-truncate.white--text {{ isEdit?'Edit Old':'Add New'}} Book
            v-btn(text color="white" slot="right" @click="creatOrUpdate") save
        v-container.px-2.py-1(fluid)
            v-row(dense)
                v-col(cols="12")
                    v-text-field(ref="title" v-model='title' :rules="[rules.required]" :hide-details="hideDetails.title" validate-on-blur solo label="Title")
                v-col(cols="12")
                    v-text-field(ref="author" v-model='author' :rules="[rules.required]" :hide-details="hideDetails.author" validate-on-blur solo label="Author")
                v-col(cols="12")
                    v-text-field(ref="isbn" v-model='isbn' :rules="[rules.required, rules.isbn]" :hide-details="hideDetails.isbn" validate-on-blur solo label="isbn")
                v-col(cols="12")
                    v-dialog(ref='dialog' v-model='modal' :return-value.sync='date' persistent='' width='290px')
                        template(v-slot:activator='{ on }')
                            v-text-field(v-model='date' hide-details label='Picker in dialog' solo readonly v-on='on')
                        v-date-picker(v-model='date' scrollable)
                            v-spacer
                            v-btn(text='' color='primary' @click='modal = false') Cancel
                            v-btn(text='' color='primary' @click='$refs.dialog.save(date)') OK
                v-col(cols="12")
                    v-textarea(ref='description' v-model="description" :rules="[rules.required]" name="description" :hide-details="hideDetails.description" label="description" solo )
</template>

<script>
import { Scroll } from 'vuetify/lib/directives';
import dayjs from 'dayjs';
import { book } from '@/apis';
import { BookAdapter } from '@/components/Adapters';

export default {
    components: {
        AppBar: () => import('@/components/AppBar/AppBar'),
        SIcon: () => import('@/components/SIcon')
    },
    directives: { Scroll },
    auth: false,
    head: {
        title: '創順科技'
    },
    data: () => ({
        modal: false,
        isEdit: false,
        formHasErrors: false,
        date: new Date().toISOString().substr(0, 10),
        title: 'new title',
        author: 'omega',
        isbn: '',
        description: '',
        hideDetails: {
            title: true,
            author: true,
            isbn: true,
            description: true
        },
        rules: {
            required: value => !!value || `can't empty!.`,
            counter: value => value.length <= 20 || 'Max 20 characters',
            isbn: value => {
                const pattern = /^([0-9]{10}|[0-9]{13})$/;
                return pattern.test(value) || 'Invalid. need 13 Number';
            }
        }
    }),
    computed: {
        form() {
            return {
                title: this.title,
                author: this.author,
                isbn: this.isbn,
                description: this.description
            };
        }
    },
    async asyncData({ $axios, params, redirect }) {
        let bookInfo = {};
        if (params.id !== undefined) {
            bookInfo = new BookAdapter(
                await book($axios)
                    .get({
                        id: params.id
                        // id: '06c7f345-5d7a-4c83-a2a0-f3377b600003'
                    })
                    .catch(error => {
                        console.log('error', error);
                        redirect('/create');
                        return false;
                    })
            );

            return {
                id: params.id,
                isEdit: true,
                title: bookInfo.title,
                author: bookInfo.author,
                isbn: bookInfo.isbn,
                description: bookInfo.description
            };
        }
        return bookInfo;
    },
    methods: {
        onScroll(o) {
            // this.$nuxt.$emit('MENU_CLOSE');
            // console.log(o);
        },
        async creatOrUpdate() {
            if (this.isEdit) {
                await this.update();
            } else {
                await this.save();
            }
        },
        async save() {
            if (this.validator()) return false;
            this.isbn = '9572085700';
            const bookInfo = new BookAdapter(
                await book(this.$axios).create({
                    params: {
                        ...this.form,
                        publicationDate: dayjs(this.date).format(
                            'YYYY-MM-DDTHH:mm:ssZ[Z]'
                        ),
                        description: this.description
                    }
                })
            );
            this.$router.push({
                path: `/detail/${bookInfo.id}`
            });
            // console.log('save', bookInfo);
        },
        async update() {
            if (this.validator()) return false;
            this.isbn = '9572085700';
            const bookInfo = new BookAdapter(
                await book(this.$axios).attach({
                    bookId: this.id,
                    params: {
                        ...this.form,
                        publicationDate: dayjs(this.date).format(
                            'YYYY-MM-DDTHH:mm:ssZ[Z]'
                        ),
                        description: this.description
                    }
                })
            );
            this.$router.push({
                path: `/detail/${this.id}`
            });
        },
        validator() {
            let formHasErrors = false;
            Object.keys(this.form).forEach(input => {
                if (this.$refs[input].hasError) {
                    formHasErrors = true;
                    this.hideDetails[input] = false;
                } else {
                    this.hideDetails[input] = true;
                }
                this.$refs[input].validate(true);
            });
            return formHasErrors;
        }
    }
};
</script>
<style>
.clamp3 {
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
}
</style>
