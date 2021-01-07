import type { NextApiRequest, NextApiResponse } from 'next';

export default (req: NextApiRequest, res: NextApiResponse) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(res.status(200).json(new Array(20).fill(0)));
        }, 500);
    });
};
