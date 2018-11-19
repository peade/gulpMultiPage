require(['../main'], function (_m) {
  // let index = require('./ctrs/indexCtr')
  // index()
  require(['jquery', 'lib/func', 'lib/tool', 'bootstrap', 'chosen','css!../../css/index.css'],
    function ($, test, tool, bootstrap, chosen,indexcss) {
      $(function () {
        console.log('index2')
        console.log($('h1').text())
        test()
        tool.test()
        console.log(chosen)
        $('.select').chosen()
      })
    })
})


