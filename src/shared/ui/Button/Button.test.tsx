import { render, screen } from '@testing-library/react';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';

describe('Button', () => {
    test('default', () => {
        render(<Button>Test</Button>);
        expect(screen.getByText('Test')).toBeInTheDocument();
    });
    test('themed button', () => {
        render(<Button theme={ButtonTheme.CLEAR}>Test</Button>);
        expect(screen.getByText('Test')).toHaveClass('clear');
        screen.debug();
    });
});
