import { Article } from '../../../src/entities/Article';

const defaultArticle = {
    title: 'Javascript',
    subtitle: "What's new in JS?",
    img: 'https://u2.9111s.ru/uploads/202205/17/600x1/636d6b2927cb4ed62d30c21efffb1752.jpg',
    views: 1022,
    createdAt: '02.04.2023',
    userId: '1',
    type: ['IT'],
    blocks: [],
};

export const createArticle = (article?: Article) =>
    cy
        .request({
            method: 'POST',
            url: 'http://localhost:8000/articles',
            headers: {
                Authorization: 'test',
            },
            body: article ?? defaultArticle,
        })
        .then((resp) => resp.body);

export const removeArticle = (articleId: string) =>
    cy.request({
        method: 'DELETE',
        url: `http://localhost:8000/articles/${articleId}`,
        headers: {
            Authorization: 'test',
        },
    });

declare global {
    namespace Cypress {
        interface Chainable {
            createArticle(article?: Article): Chainable<Article>;
            removeArticle(articleId: string): Chainable<void>;
        }
    }
}
