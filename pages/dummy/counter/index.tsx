import Wrapper from '@components/wrapper'
import styled from 'styled-components'
import { useDispatch, useSelector } from 'react-redux'
import { test, testMinusAction, testPlusAction } from '@reducers/test'
import { RootState } from '@reducers/index'

const Dummy: React.FC = () => {
    const dispatch = useDispatch()
    const { count, text, sagaCount } = useSelector(
        (state: RootState) => state.test,
    )

    const onPlus = () => {
        dispatch(test())
        dispatch(testPlusAction())
    }

    const onMinus = () => {
        dispatch(testMinusAction())
    }

    return (
        <Wrapper>
            <Container>
                <h1>COUNTER</h1>
                <h5>
                    {text}
                    {sagaCount}
                </h5>
                <h2>{count}</h2>
                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'row',
                        width: '100%',
                        justifyContent: 'center',
                    }}>
                    <p onClick={() => onPlus()}>PLUS</p>
                    <p onClick={() => onMinus()}>MINUS</p>
                </div>
            </Container>
        </Wrapper>
    )
}

export default Dummy

const Container = styled.article`
    width: 100%;
    height: calc(100vh - 50px);
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    h1 {
        font-size: 2rem;
    }
    h2 {
        font-size: 1.8rem;
    }
    p {
        margin: 0;
        padding: 5px;
        cursor: pointer;
    }
`
