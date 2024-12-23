// https://on.cypress.io/api

describe('Sanity Test', () => {
  it('visits the app root url', { browser: 'firefox' }, () => {
    cy.visit('/')
    cy.contains("#header a:first-child", "Music")
  })
})
