require(['main'], function (_m) {
  require(['jquery', '../lib/func', 'https://cdn.bootcss.com/jquery-validate/1.18.0/jquery.validate.min.js'], function ($, test, jqValid) {
    console.log($('h1').text())
    test()
    console.log(jqValid)
  })

})

