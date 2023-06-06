import { selectByTestId } from '../../helpers/selectByTestId';

describe('Routing', () => {
    describe('User is not authorized', () => {
        it('goes to main', () => {
            cy.visit('/');
            cy.get(selectByTestId('MainPage')).should('exist');
        });
        it('goes to profile', () => {
            cy.visit('/profile/4');
            cy.get(selectByTestId('MainPage')).should('exist');
        });
        it('nonexistent route', () => {
            cy.visit('/sdfdsfs');
            cy.get(selectByTestId('NotFoundPage')).should('exist');
        });
    });
    describe('User is authorized', () => {
        beforeEach(() => {
            cy.login();
        });

        it('goes to profile', () => {
            cy.visit('/profile/4');
            cy.get(selectByTestId('ProfilePage')).should('exist');
        });
        it('goes to articles list', () => {
            cy.visit('/articles');
            cy.get(selectByTestId('ArticlesPage')).should('exist');
        });
    });
});
