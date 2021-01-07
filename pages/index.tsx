import styled from 'styled-components';
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function Home() {
    const router = useRouter();
    return (
        <Container>
            <Header>
                <h1>
                    Welcome to <a href="https://nextjs.org">Next.js!</a>
                </h1>
            </Header>

            <Contents>
                <Link href={'/board'}>
                    <a>BOARD</a>
                </Link>
                <Link href={'/board'}>
                    <a target="_blank">BOARD Target Blank</a>
                </Link>
                <a onClick={() => router.push('/board')}>BOARD Onclick</a>
            </Contents>
        </Container>
    );
}

const Container = styled.div``;

const Header = styled.div`
    padding: 5rem 0;
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 0;
    line-height: 1.15;
    font-size: 2rem;
    a {
        color: #0070f3;
        text-decoration: none;
    }
`;

const Contents = styled.article`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    a ~ a {
        margin-top: 10px;
    }
`;
