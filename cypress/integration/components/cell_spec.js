const mountVue = require('cypress-vue-unit-test')
import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default.css'

// Material-design is a plugin which is loaded with 'use'.
// Html option is needed to inject Roboto font and icons.
// Rewriting the Html like this prevents the base and mountId options having any effect.
// See getPageHTML at https://github.com/bahmutov/cypress-vue-unit-test/blob/master/src/index.js
const options = {
  extensions: {
    use: [VueMaterial]
  },
  html: `
      <html>
        <head>
          <link rel="stylesheet" href="//fonts.googleapis.com/css?family=Roboto:400,500,700,400italic|Material+Icons">
        </head>
        <body>
          <div id="app"></div>
        </body>
      </html>
    `
}

// We need to be able to test the component when supplied with varying input properties.
import Cell from '~/components/Cell.vue'
let harness = {
  template: `<cell :alive="alive" />`,
  components: {
    Cell
  },
  data: {
    alive: false
  }
}

describe('Cell component unit tests', () => {
  beforeEach(mountVue(harness, options))

  it('should reflect the state of the alive prop', () => {
    cy.log(process.version)
    cy.get('.cell')
      .children()
      .first()
      .as('visibleCheck')
      .should('not.have.class', 'md-checked')
      .then(() => {
        Cypress.vue.alive = true
      })

    cy.debug()
    cy.get('@visibleCheck').should('have.class', 'md-checked')
  })
})
