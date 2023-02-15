import { classNames } from './classNames';

describe('classNames', () => {
    test('with only first arg', () => {
        expect(classNames('someClass')).toBe('someClass');
    });
    test('with additional classes', () => {
        expect(
            classNames('someClass', {}, ['class1', 'class2']),
        ).toBe('someClass class1 class2');
    });
    test('with modes', () => {
        expect(
            classNames('someClass', { hovered: true, disabled: false }, []),
        ).toBe('someClass hovered');
    });
    test('with modes undefined', () => {
        expect(
            classNames(
                'someClass',
                { hovered: true, disabled: false, scrollable: undefined },
                [],
            ),
        ).toBe('someClass hovered');
    });
    test('all cases', () => {
        const expected = 'someClass class1 class2 hovered';
        expect(
            classNames(
                'someClass',
                { hovered: true, disabled: false },
                ['class1', 'class2'],
            ),
        ).toBe(expected);
    });
    test('no args', () => {
        expect(
            classNames(''),
        ).toBe('');
    });
});
