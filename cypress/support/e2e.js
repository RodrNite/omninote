import './commands'

Cypress.on('window:before:load', (win) => {
    win.localStorage.setItem('cookie-consent-accepted', 'true')
})