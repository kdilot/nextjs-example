import Link from 'next/link';
import styled from 'styled-components';

const Header: React.FC = () => {
    return (
        <Container>
            <Link href={'/'}>
                <a>Next</a>
            </Link>
        </Container>
    );
};

export default Header;

const Container = styled.header`
    width: 100%;
    height: 50px;
    line-height: 50px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    position: sticky;
    top: 0;
    left: 0;
    background: #fff;
    display: flex;
    justify-content: center;
    align-items: center;

    a {
        font-size: 1.5rem;
        font-weight: 600;
        cursor: pointer;
    }
`;
