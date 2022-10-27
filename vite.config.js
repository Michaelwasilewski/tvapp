const {resolve} = require('path');

export default {
    build: {
        rollupOptions: {
            input: {
                index: resolve(__dirname, 'index.html')
            },
        },
    },
};
