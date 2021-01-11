import styled from 'styled-components';
import Header from 'components/header';
import { useMediaQuery } from 'react-responsive';

const Wrapper: React.FC = ({ children }) => {
    const isMobile = useMediaQuery({ maxWidth: 414 });
    return isMobile ? (
        <MobileContainer>
            <Header />
            <ChildContainer>{children}</ChildContainer>
        </MobileContainer>
    ) : (
        <Container>
            <Header />
            <ChildContainer>{children}</ChildContainer>
        </Container>
    );
};

export default Wrapper;

const MobileContainer = styled.section`
    width: 100vw;
    height: 100vh;
    overflow: auto;
    padding-bottom: 10px;
`;

const Container = styled.section`
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
`;

const ChildContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: 0 10px;
`;
