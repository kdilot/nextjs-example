import styled from 'styled-components';
import Menu from 'components/header';

const Wrapper: React.FC = ({ children }) => {
    return (
        <Container>
            <Menu />
            <ChildContainer>{children}</ChildContainer>
        </Container>
    );
};

export default Wrapper;

const Container = styled.section`
    width: 500px;
    height: 100vh;
    overflow: auto;
    border-left: 1px solid;
    border-right: 1px solid;
    padding-bottom: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const ChildContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
`;
