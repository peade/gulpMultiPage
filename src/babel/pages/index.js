require(['../main'], function (_m) {
  // let index = require('./ctrs/indexCtr')
  // index()
  require(['jquery', 'common/func', 'common/tool', 'bootstrap', 'chosen', 'css!../../css/index.css'],
    function ($, test, tool, bootstrap, chosen, indexcss) {
      $(function () {
        console.log(111111)
        console.log($('h1').text())
        test()
        tool.test()
        console.log(chosen)
        $('.select').chosen()
      })
    })

})


