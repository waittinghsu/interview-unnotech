export default function({ app }) {
    app.$auth.onError((error, name, endpoint) => {
        console.error(name, error, endpoint);
    });

    if (!app.$auth.loggedIn) {
    }

    // const username = app.$auth.user.username;
    // console.log(this.$auth.$state);
}
