import {
    MutableRefObject, useCallback, useEffect, useRef,
} from 'react';

export function useDebounce(callback: (...args: any[]) => void, delay: number) {
    const timer = useRef() as MutableRefObject<any>;

    const throttledCallback = useCallback((...args) => {
        if (timer.current) {
            clearTimeout(timer.current);
        }
        timer.current = setTimeout(() => {
            callback(...args);
        }, delay);
    }, [callback, delay]);

    return throttledCallback;
}