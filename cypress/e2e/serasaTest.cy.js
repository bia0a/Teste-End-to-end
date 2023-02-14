describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://www.serasa.com.br/ecred/simulador')
    cy.once('uncaught:exception', () => false);
    cy.get('#slider-range')
      .invoke('val', 1000)
      .trigger('input', { force: true })
    cy.get('#month-amount-output').should('contain', '6x')
    cy.get('#price-number').should('contain', '271,27')
  })
})
describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://www.serasa.com.br/ecred/simulador')
    cy.once('uncaught:exception', () => false);
    cy.get('#slider-range')
      .invoke('val', 4000)
      .trigger('input', { force: true });

    cy.get('input#slider-range-month[type=range]')
      .trigger('input', { force: true })
      .invoke('val', 12)
      .trigger('input', { force: true })

    cy.get('#month-amount-output').should('contain', '12x')
    cy.get('#price-number').should('contain', '478,49')

  })
})
describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://www.serasa.com.br/ecred/simulador')
    cy.once('uncaught:exception', () => false);
    cy.get('#slider-range')
      .invoke('val', 6000)
      .trigger('input', { force: true })

    cy.get('#slider-range-month')
      .invoke('val', 12)
      .trigger('input', { force: true })
    cy.get('#month-amount-output').should('contain', '24x')
    cy.get('#price-number').should('contain', '387,89')
  })
})






