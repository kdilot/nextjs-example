module.exports = {
    async redirects() {
        return [
            {
                source: '/naver',
                destination: 'https://www.naver.com/',
                permanent: false,
            },
        ];
    },
};
