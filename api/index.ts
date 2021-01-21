import axios from 'axios';

export const ApiDummyPost = async () => {
    const rs = await axios
        .get(`https://jsonplaceholder.typicode.com/posts?_limit=30`)
        .then((res: any) => {
            return res.data;
        })
        .catch(() => {
            return [];
        });
    return rs;
};

export const ApiDummyPhoto = async () => {
    const rs = await axios
        .get(`https://jsonplaceholder.typicode.com/photos?_limit=20`)
        .then((res: any) => {
            return res.data;
        })
        .catch(() => {
            return [];
        });
    return rs;
};
