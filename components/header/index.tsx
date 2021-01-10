import styled from 'styled-components';

const Header: React.FC = () => {
    return <Container>Header</Container>;
};

export default Header;

const Container = styled.header`
    width: 100%;
    height: 50px;
    line-height: 50px;
    border-bottom: 1px solid;
    position: sticky;
    top: 0;
    left: 0;
    background: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
`;
