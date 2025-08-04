describe('Form Submission Flow', () => {
  beforeEach(() => {
    cy.intercept('POST', '/bug-report').as('submitBug');
    cy.visit('/');
  });

  it('renders the form correctly', () => {
    cy.get('form').should('exist');
    cy.get('input[name="title"]').should('exist');
    cy.get('textarea[name="description"]').should('exist');
    cy.get('select[name="severity"]').should('exist');
    cy.get('button[type="submit"]').should('exist');
  });

  it('shows validation error for missing title', () => {
    cy.get('button[type="submit"]').click();
    cy.wait('@submitBug');
    cy.get('#error-message').should('exist');
    cy.get('#error-message').should('contain', 'title field is required.');
  });

  it('shows validation error for missing description', () => {
    cy.get('button[type="submit"]').click();
    cy.wait('@submitBug');
    cy.get('#error-message').should('exist');
    cy.get('#error-message').should('contain', 'description field is required.');
  });

  it('submits valid data', () => {
    cy.get('input[name="title"]').type('Test Bug Title');
    cy.get('textarea[name="description"]').type('Test Bug Description');
    cy.get('select[name="severity"]').select('high');
    cy.get('button[type="submit"]').click();
    cy.wait('@submitBug');
    cy.get('#success-message').should('exist');
    cy.get('#success-message').should('contain', 'Bug report submitted successfully!').should('be.visible');
  });

});