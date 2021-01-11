import styled from 'styled-components';
import Link from 'next/link';
import Wrapper from 'components/wrapper';

export default function Home() {
    return (
        <Wrapper>
            <Container>
                <Header>
                    <h3>
                        Welcome to <a href="https://nextjs.org">Next.js!</a>
                    </h3>
                </Header>
                <Link href={'/dummy/post'}>
                    <a>Dummy POST</a>
                </Link>
                <Link href={'/dummy/photo'}>
                    <a>Dummy PHOTO</a>
                </Link>
            </Container>
        </Wrapper>
    );
}

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100%;
    a {
        font-size: 1.3rem;
        margin-top: 10px;
    }
`;

const Header = styled.div`
    height: 300px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 0;
    line-height: 1.15;
    font-size: 2rem;
    h3 a {
        font-size: 2rem;
        color: #0070f3;
        text-decoration: none;
    }
`;
