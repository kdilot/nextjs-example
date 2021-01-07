import axios from 'axios';

export const ApiTest = async () => {
    const rs = await axios
        .get(`/api/hello`)
        .then((res: any) => {
            return res.data;
        })
        .catch(() => {
            return [];
        });
    return rs;
};

export const ApiGoods = async () => {
    const rs = await axios
        .get(`${process.env.api}`, {
            params: {
                limit: 10,
                offset: 0,
            },
        })
        .then((res) => {
            return res.data.data.rows;
        })
        .catch(() => {
            return [];
        });

    return rs;
};
