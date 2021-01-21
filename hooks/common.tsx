import { useEffect, useMemo, useState } from 'react';
import { throttle } from 'lodash';

export const useScroll = () => {
    const [currentScrollPosition, setCurrentScrollPosition] = useState<number>(
        0,
    );
    const [scrollHeight, setScrollHeight] = useState<number>(0);
    const [innerHeight, setInnerHeight] = useState<number>(0);
    const [prevScrollPosition, setPrevScrollPosition] = useState<number>(0);
    const maxScrollHeight = useMemo(
        () => scrollHeight !== 0 && scrollHeight - innerHeight,
        [scrollHeight, innerHeight],
    );
    const isScrollEndPosition = useMemo(
        () =>
            scrollHeight !== 0 &&
            scrollHeight - innerHeight - currentScrollPosition < 1000,
        [scrollHeight, innerHeight, currentScrollPosition],
    );

    const onScroll = throttle(() => {
        setInnerHeight(window.innerHeight);
        setScrollHeight(document.body.scrollHeight);
        setPrevScrollPosition(currentScrollPosition);
        const top =
            window.scrollY ||
            (document.documentElement && document.documentElement.scrollTop) ||
            document.body.scrollTop;
        setCurrentScrollPosition(top);
    }, 500);

    useEffect(() => {
        window.addEventListener('scroll', onScroll, false);

        return () => {
            window.removeEventListener('scroll', onScroll, false);
        };
    }, []);

    // useEffect(() => {
    //     console.log(
    //         currentScrollPosition,
    //         maxScrollHeight,
    //         isScrollEndPosition,
    //     );
    // }, [currentScrollPosition]);

    return {
        currentScrollPosition,
        prevScrollPosition,
        maxScrollHeight,
        isScrollEndPosition,
    };
};
