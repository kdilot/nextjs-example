module.exports = {
    env: {
        api:
            'https://dw939zpvn7.execute-api.ap-northeast-2.amazonaws.com/dev/app/goods',
    },
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
