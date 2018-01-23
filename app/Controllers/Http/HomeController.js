'use strict'

const Logger = use('Logger')

class HomeController {

  async home ({request, view}) {
    Logger.info('role:', request.role)
    return view.render('home', { pageTitle: 'Home' })
  }

  async participate({ request, view }) {
    return view.render('participate', { pageTitle: 'Participate' }) 
  }

}

module.exports = HomeController
