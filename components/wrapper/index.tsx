import styled from 'styled-components';
import Header from 'components/header';
import { useScroll } from 'hooks/common';
import { useEffect } from 'react';

const Wrapper: React.FC = ({ children }) => {
    return (
        <Container>
            <Header />
            <ChildContainer>{children}</ChildContainer>
        </Container>
    );
};

export default Wrapper;

const Container = styled.section`
    @media screen and (min-width: 414px) {
        width: 500px;
        height: 100vh;
        overflow: auto;
        border-left: 1px solid rgba(0, 0, 0, 0.1);
        border-right: 1px solid rgba(0, 0, 0, 0.1);
        padding-bottom: 10px;
        display: flex;
        flex-direction: column;
        align-items: center;
        &::-webkit-scrollbar {
            display: none;
        }
        -moz-box-shadow: 3px 0 3px -3px rgba(0, 0, 0, 0.1),
            -3px 0 3px -3px rgba(0, 0, 0, 0.1);
        -webkit-box-shadow: 3px 0 3px -3px rgba(0, 0, 0, 0.1),
            -3px 0 3px -3px rgba(0, 0, 0, 0.1);
        box-shadow: 3px 0 3px -3px rgba(0, 0, 0, 0.1),
            -3px 0 3px -3px rgba(0, 0, 0, 0.1);
    }

    @media screen and (max-width: 414px) {
        width: 100vw;
        height: 100vh;
        overflow: auto;
        padding-bottom: 10px;
    }
`;

const ChildContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: 0 10px;
`;
