class Session
  constructor: (@path)->
    @cache = {}
    @cache.cookie = localStorage.getItem('cookie')

  set: (cookie)-> @cache.cookie= cookie
  get: -> @cache.cookie

  save: ->
    localStorage.setItem('cookie', @cache.cookie)

  destroy: ->
    @cache= {}
    localStorage.removeItem('cookie')

module.exports= Session
