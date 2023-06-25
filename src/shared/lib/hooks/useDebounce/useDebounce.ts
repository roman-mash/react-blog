import { MutableRefObject, useCallback, useRef } from 'react';

/**
 * Хук для использования дебаунса
 * @param callback функция, которую нужно задебаунсить
 * @param {number} delay задежка, для вызова функции
 */
export function useDebounce(callback: (...args: any[]) => void, delay: number) {
    const timer = useRef() as MutableRefObject<any>;

    const throttledCallback = useCallback(
        (...args: any[]) => {
            if (timer.current) {
                clearTimeout(timer.current);
            }
            timer.current = setTimeout(() => {
                callback(...args);
            }, delay);
        },
        [callback, delay],
    );

    return throttledCallback;
}
