import React, { useState } from 'react';
import { useEffect } from 'react';
import { ApiGoods } from 'api';
import styled from 'styled-components';

const Index: React.FC = () => {
    const [list, setList] = useState<any[]>([]);

    useEffect(() => {
        ApiGoods().then((res: any[]) => setList(res));
    }, []);

    return (
        <Container>
            <BoxLayout>
                {list.map((box: any, index: number) => (
                    <Box key={index}>
                        <img src={JSON.parse(box.imageUrlList)[0]} />
                    </Box>
                ))}
            </BoxLayout>
        </Container>
    );
};

export default Index;

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: 5rem;
`;

const BoxLayout = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    flex-direction: row;
    width: 220px;
`;

const Box = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100px;
    height: 100px;
    border: 1px solid #000;
    margin: 5px;

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`;
