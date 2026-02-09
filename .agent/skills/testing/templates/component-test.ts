import { h } from 'vue'
import ComponentName from './ComponentName.vue'

describe('ComponentName', () => {
  it('renders correctly', () => {
    cy.mount(ComponentName, {
      props: {
        // required props
      },
    })
    cy.get('[data-cy="component"]').should('exist')
  })

  it('handles user interaction', () => {
    const onClickSpy = cy.spy().as('clickSpy')
    cy.mount(() => h(ComponentName, { onClick: onClickSpy }))
    cy.get('button').click()
    cy.get('@clickSpy').should('have.been.called')
  })
})
