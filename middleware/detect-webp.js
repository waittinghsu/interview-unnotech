import detecter from 'supports-webp';

export default ctx => {
    detecter.then(supported => {
        ctx.webp = { canBeUsed: supported };

        if (process.browser) {
            localStorage.setItem('webp', JSON.stringify(ctx.webp));
        }
    });
};
