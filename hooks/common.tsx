import { useEffect, useMemo, useState } from 'react';

export const useScroll = () => {
    const [scrollTop, setScrollTop] = useState<number>(0);
    const [scrollBottom, setScrollBottom] = useState<number>(0);
    const [scrollHeight, setScrollHeight] = useState<number>(0);
    const [innerHeight, setInnerHeight] = useState<number>(0);
    const [prevScroll, setPrevScroll] = useState<number>(0);
    const [isBottom, setIsBottom] = useState<boolean>(false);
    const isScrollEnd = useMemo(
        () =>
            scrollHeight !== 0 && scrollHeight - innerHeight - scrollTop < 400,
        [scrollHeight, innerHeight, scrollTop],
    );

    const onScroll = () => {
        console.log('!!!!');
        setInnerHeight(window.innerHeight);
        setScrollHeight(document.body.scrollHeight);
        setPrevScroll(scrollTop);
        const top =
            window.scrollY ||
            (document.documentElement && document.documentElement.scrollTop) ||
            document.body.scrollTop;
        setScrollTop(top);

        const docHeight = Math.max(
            document.body.scrollHeight,
            document.body.offsetHeight,
            document.documentElement.clientHeight,
            document.documentElement.scrollHeight,
            document.documentElement.offsetHeight,
        );
        const bottom = window.innerHeight + window.pageYOffset;

        setScrollBottom(bottom);
        setIsBottom(bottom >= docHeight ? true : false);
    };

    useEffect(() => {
        console.log('@@@');
        window.addEventListener('scroll', onScroll, false);

        return () => {
            window.removeEventListener('scroll', onScroll, false);
        };
    }, []);

    return {
        scrollTop,
        scrollBottom,
        scrollHeight,
        innerHeight,
        prevScroll,
        isScrollEnd,
        isBottom,
    };
};
