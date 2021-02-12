import styled from 'styled-components'
import Link from 'next/link'
import { Wrapper } from '@components'

export default function Home() {
    return (
        <Wrapper>
            <Container>
                <Link href={'/post'}>
                    <a>Move to sample page</a>
                </Link>
                <Description>with</Description>
                <p>redux, redux-saga, next-redux-wrapper, typesafe-actions</p>
                <p>axios, immer, lodash, styled-components</p>
            </Container>
        </Wrapper>
    )
}

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100%;
    height: auto;
    margin-top: 50%;
    a {
        font-size: 1.5rem;
        font-weight: bold;
        &:hover {
            color: #0070f3;
        }
    }

    p {
        font-size: 0.8rem;
        padding: 0;
        margin: 0;
        color: rgba(0, 0, 0, 0.7);
    }
`

const Description = styled.div`
    margin-top: 2rem;
`
