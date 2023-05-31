import { Button, ButtonSize, ButtonTheme } from '@/shared/ui/Button';
import { useCounterActions } from '../model/slice/counterSlice';
import { useCounterValue } from '../model/selectors/getCounterValue/getCounterValue';

export const Counter = () => {
    const value = useCounterValue();

    const { increment, decrement, add } = useCounterActions();

    const handleIncrement = () => {
        increment();
    };
    const handleDecrement = () => {
        decrement();
    };

    const handleAdd = () => {
        add(5);
    };

    return (
        <div>
            <h1 data-testid="value-title">{value}</h1>
            <Button
                onClick={handleIncrement}
                theme={ButtonTheme.OUTLINE}
                square
                size={ButtonSize.L}
                data-testid="increment-btn"
            >
                +
            </Button>
            <Button
                onClick={handleDecrement}
                theme={ButtonTheme.OUTLINE}
                square
                size={ButtonSize.L}
                data-testid="decrement-btn"
            >
                -
            </Button>
            <Button
                onClick={handleAdd}
                theme={ButtonTheme.OUTLINE}
                square
                size={ButtonSize.L}
                data-testid="add-btn"
            >
                5
            </Button>
        </div>
    );
};
