'use strict'

const Logger = use('Logger')

class HomeController {

  async home ({request, view}) {
    Logger.info('role:', request.role)
    return view.render('home', { pageTitle: 'Home' })
  }

}

module.exports = HomeController
