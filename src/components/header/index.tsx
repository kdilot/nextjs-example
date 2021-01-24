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
    @media screen and (min-width: 414px) {
        border-left: 1px solid rgba(0, 0, 0, 0.1);
        border-right: 1px solid rgba(0, 0, 0, 0.1);
        width: 450px;
    }

    @media screen and (max-width: 414px) {
        width: 100%;
    }

    height: 50px;
    line-height: 50px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    position: fixed;
    top: 0;
    background: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1;

    a {
        font-size: 1.5rem;
        font-weight: 600;
        cursor: pointer;
    }
`;
