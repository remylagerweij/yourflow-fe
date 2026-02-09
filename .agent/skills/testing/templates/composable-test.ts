import { useComposable } from './useComposable'

describe('useComposable', () => {
  it('returns expected initial state', () => {
    cy.mount({
      setup() {
        const { value, loading } = useComposable()
        return { value, loading }
      },
      template: '<div>{{ value }} {{ loading }}</div>',
    })
    cy.contains('initial value')
  })
})
