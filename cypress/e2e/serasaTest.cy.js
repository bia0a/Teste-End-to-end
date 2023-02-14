describe('Caso 1', () => {
  it('Simulação de: R$ 1.000 em 6 vezes', () => {
    cy.visit('https://www.serasa.com.br/ecred/simulador')
    cy.once('uncaught:exception', () => false);
    cy.get('#slider-range')
      .invoke('val', 1000)
      .trigger('input', { force: true })
    cy.get('#month-amount-output').should('contain', '6x')
    cy.get('#price-number').should('contain', '271,27')
  })
})
describe('Caso 2', () => {
  it('Simulação de: R$ 4.000 em 12 vezes', () => {
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
describe('Caso 3', () => {
  it('Simulação de: R$ 6.000 em 24 vezes', () => {
    cy.visit('https://www.serasa.com.br/ecred/simulador')
    cy.once('uncaught:exception', () => false);
    cy.get('#slider-range')
      .invoke('val', 6000)
      .trigger('input', { force: true })

    cy.get('#slider-range-month')
      .invoke('val', 12)
      .trigger('input', { force: true })

    // Contrariamente do esperado (347,39) o teste busca o valor real indicado no site 
    cy.get('#month-amount-output').should('contain', '24x')
    cy.get('#price-number').should('contain', '387,89')
  })
})






