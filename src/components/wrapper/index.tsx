import styled from 'styled-components'
import { Header } from '@components'

const Wrapper: React.FC = ({ children }) => {
    return (
        <Container>
            <Header />
            <ChildContainer>{children}</ChildContainer>
        </Container>
    )
}

export default Wrapper

const Container = styled.section`
    @media screen and (min-width: 414px) {
        border-left: 1px solid rgba(0, 0, 0, 0.1);
        border-right: 1px solid rgba(0, 0, 0, 0.1);
        display: flex;
        flex-direction: column;
        align-items: center;

        width: 450px;
        min-height: 100vh;
        position: relative;

        -moz-box-shadow: 3px 0 3px -3px rgba(0, 0, 0, 0.1),
            -3px 0 3px -3px rgba(0, 0, 0, 0.1);
        -webkit-box-shadow: 3px 0 3px -3px rgba(0, 0, 0, 0.1),
            -3px 0 3px -3px rgba(0, 0, 0, 0.1);
        box-shadow: 3px 0 3px -3px rgba(0, 0, 0, 0.1),
            -3px 0 3px -3px rgba(0, 0, 0, 0.1);
        overflow: auto;
    }

    @media screen and (max-width: 414px) {
        width: 100vw;
        height: 100vh;
    }
`

const ChildContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: auto;
    margin-top: 50px;
`
