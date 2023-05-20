import { useDispatch, useSelector } from 'react-redux';
import { Button, ButtonSize, ButtonTheme } from '@/shared/ui/Button/Button';
import { counterActions } from '../model/slice/counterSlice';
import { getCounterValue } from '../model/selectors/getCounterValue/getCounterValue';

export const Counter = () => {
    const dispatch = useDispatch();
    const value = useSelector(getCounterValue);
    const increment = () => {
        dispatch(counterActions.increment());
    };
    const decrement = () => {
        dispatch(counterActions.decrement());
    };
    return (
        <div>
            <h1 data-testid="value-title">{value}</h1>
            <Button
                onClick={increment}
                theme={ButtonTheme.OUTLINE}
                square
                size={ButtonSize.L}
                data-testid="increment-btn"
            >
                +
            </Button>
            <Button
                onClick={decrement}
                theme={ButtonTheme.OUTLINE}
                square
                size={ButtonSize.L}
                data-testid="decrement-btn"
            >
                -
            </Button>
        </div>
    );
};
