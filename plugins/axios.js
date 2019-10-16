export default function({ $axios, redirect }) {
    $axios.onRequest(config => {
        // console.log('onRequest ' + config);
    });

    $axios.onResponse(response => {
        // console.log('onResponse ' + response.data);
    });

    $axios.onError(error => {
        console.log('onError ' + error.response);

        const code = parseInt(error.response && error.response.status);
        if (code === 400) {
            redirect('/400');
        }

        // redirect('/500');
    });

    $axios.onRequestError(error => {
        console.log('onRequestError ' + error.response);
    });

    $axios.onResponseError(error => {
        console.log('onResponseError ' + error.response);
    });
}
