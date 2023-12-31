
import { el } from './elements'

class Header {
    userLoggerIn(username){
        cy.get(el.fullName, {timeout: 7000})
        .should('be.visible')
        .should('have.text', username)
    }
}

export default new Header()