import { useEffect, useState } from 'react';
import { ApiDummyPost } from 'api';
import Wrapper from 'components/wrapper';
import styled from 'styled-components';

const Photo: React.FC = () => {
    const [list, setList] = useState<any[]>([]);
    const onReadDummy = async () => {
        const rs = await ApiDummyPost();
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
                        <p>{dum.title}</p>
                        <span>{dum.body}</span>
                    </CardLayout>
                ))}
            </Container>
        </Wrapper>
    );
};

export default Photo;

const Container = styled.article`
    width: 100%;
    height: 100%;
    margin-top: 10px;

    div ~ div {
        margin-top: 10px;
    }
`;

const CardLayout = styled.div`
    width: 100%;
    height: auto;
    background: rgba(0, 0, 0, 0.05);
    padding: 5px;

    p {
        margin: 0;
        font-size: 1.2rem;
        font-style: italic;
        font-weight: 600;
    }
    span {
        font-size: 0.8rem;
    }
`;
