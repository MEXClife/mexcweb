'use strict'

const Logger = use('Logger')

class LinkController {
  async code ({request, response}) {
    return response.redirect('http://github.com/EMXCare/token_contract');
  }  
}

module.exports = LinkController
