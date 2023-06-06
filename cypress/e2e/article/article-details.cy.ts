let currentArticleId: string;
describe('Article Page', () => {
    beforeEach(() => {
        cy.login();
        cy.createArticle().then((article) => {
            currentArticleId = article.id;
            cy.visit(`articles/${article.id}`);
        });
    });

    afterEach(() => {
        cy.removeArticle(currentArticleId);
    });

    it('opens the article page', () => {
        cy.getByTestId('ArticleDetails.info').should('exist');
    });

    it('article recommendations exist', () => {
        cy.getByTestId('ArticleRecommendationsList').should('exist');
    });

    it('comments can be left', () => {
        cy.getByTestId('ArticleDetails.info');
        cy.getByTestId('AddCommentForm').scrollIntoView();
        cy.addComment('text');
        cy.getByTestId('CommentCard.Content').should('have.length', 1);
    });

    it('mark can be left', () => {
        cy.getByTestId('ArticleDetails.info');
        cy.getByTestId('RatingCard').scrollIntoView();
        cy.setRate(5, 'feedback');
        cy.get('[data-selected=true]').should('have.length', 5);
    });
});
