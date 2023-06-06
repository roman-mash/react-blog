export const setRate = (mark = 5, feedback = 'feedback') => {
    cy.getByTestId(`StarRating.${mark}`).click();
    if (feedback) {
        cy.getByTestId('RatingCard.Input').clear().type(feedback);
        cy.getByTestId('RatingCard.Send').click();
    } else {
        cy.getByTestId('RatingCard.Close').click();
    }
};

declare global {
    namespace Cypress {
        interface Chainable {
            setRate(mark: number, feedback?: string): Chainable<void>;
        }
    }
}
