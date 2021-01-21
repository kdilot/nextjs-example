import { useEffect, useState } from 'react';
import { ApiDummyPost } from 'api';
import Wrapper from 'components/wrapper';
import styled from 'styled-components';
import { useScroll } from 'hooks/common';
import { debounce } from 'lodash';

const Photo: React.FC = () => {
    const {
        currentScrollPosition,
        maxScrollHeight,
        isScrollEndPosition,
    } = useScroll();
    const [list, setList] = useState<any[]>([]);

    const onReadDummy = debounce(async () => {
        const rs = await ApiDummyPost();
        console.log('CALLED', [...list, ...rs].length);
        setList([...list, ...rs]);
    }, 1000);

    useEffect(() => {
        onReadDummy();
    }, []);

    useEffect(() => {
        if (isScrollEndPosition) {
            onReadDummy();
        }
    }, [isScrollEndPosition]);

    useEffect(() => {
        console.log(
            currentScrollPosition,
            maxScrollHeight,
            isScrollEndPosition,
        );
    }, [currentScrollPosition]);

    return (
        <Wrapper>
            <Container>
                {list.length === 0 && <div>Loading...</div>}
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
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100%;
    height: 100vh;
    background: yellow;
    overflow: auto;

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
