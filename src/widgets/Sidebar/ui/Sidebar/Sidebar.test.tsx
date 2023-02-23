import { fireEvent, screen } from '@testing-library/react';
import { componentRender } from 'shared/lib/tests/componentRender/componentRender';
import { Sidebar } from './Sidebar';

describe('Sidebar', () => {
    test('present in the document', () => {
        componentRender(<Sidebar />);
        expect(screen.getByTestId('sidebar')).toBeInTheDocument();
    });
    test('test toggle button for collapsing', () => {
        componentRender(<Sidebar />);
        const sidebar = screen.getByTestId('sidebar');
        const toggleBtn = screen.getByTestId('sidebar-toggle');
        expect(sidebar).toBeInTheDocument();
        fireEvent.click(toggleBtn);
        expect(sidebar).toHaveClass('collapsed');
    });
});
