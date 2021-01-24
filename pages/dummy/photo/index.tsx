import { useEffect, useState } from 'react';
import Wrapper from '@components/wrapper';
import styled from 'styled-components';
import { ApiDummyPhoto } from '@src/api';

const Dummy: React.FC = () => {
    const [list, setList] = useState<any[]>([]);
    const onReadDummy = async () => {
        const rs = await ApiDummyPhoto();
        setList(rs);
    };

    useEffect(() => {
        onReadDummy();
    }, []);

    return (
        <Wrapper>
            <Container>
                {list.map((dum: any, index: number) => (
                    <CardLayout key={index}>
                        <img src={dum.url} />
                    </CardLayout>
                ))}
            </Container>
        </Wrapper>
    );
};

export default Dummy;

const Container = styled.article`
    width: 100%;
    height: 100%;
    margin-top: 10px;
    display: flex;
    flex-wrap: wrap;
`;

const CardLayout = styled.div`
    width: 50%;
    height: auto;
    padding: 5px;

    img {
        width: 100%;
        height: 100%;
    }
`;
