require.config({
  baseUrl: '/src',
  paths: {
    'jquery': '../lib/jquery.min.3',
    'bootstrap': '../lib/bootstrap-3.3.7/js/bootstrap'
  },
  shim: {
    'bootstrap': {
      deps: ['jquery']
    }
  }
})

require(['jquery', '../lib/func', 'https://cdn.bootcss.com/jquery-validate/1.18.0/jquery.validate.min.js'], function ($, test, jqValid) {
  console.log($('h1').text())
  test()
  console.log(jqValid)
})
