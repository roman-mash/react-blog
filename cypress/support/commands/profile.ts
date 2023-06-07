export const updateProfile = (firstname: string, lastname: string) => {
    cy.getByTestId('EditableProfileCardHeader.EditButton').click();
    cy.getByTestId('ProfileCard.firstname').clear().type(firstname);
    cy.getByTestId('ProfileCard.lastname').clear().type(lastname);
    cy.getByTestId('EditableProfileCardHeader.SaveButton').click();
};

export const resetProfile = (profileId: string) =>
    cy.request({
        method: 'PUT',
        url: `http://localhost:8000/profile/${profileId}`,
        headers: {
            Authorization: 'test',
        },
        body: {
            id: '4',
            first: 'Test',
            lastname: 'User',
            age: 30,
            currency: 'USD',
            country: 'Russia',
            city: 'Moscow',
            username: 'testuser',
            avatar: 'https://kinovolna.tv/wp-content/uploads/2019/10/DP-P23XUAM4JMD.jpg-large.jpg',
        },
    });

declare global {
    namespace Cypress {
        interface Chainable {
            updateProfile(firstname: string, lastname: string): Chainable<void>;
            resetProfile(profileId: string): Chainable<void>;
        }
    }
}
