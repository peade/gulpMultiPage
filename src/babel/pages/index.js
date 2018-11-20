require(['../main'], function (_m) {
  require(['jquery', 'common/func', 'common/tool', 'bootstrap', 'chosen', 'css!../../css/index.css'],
    function ($, test, Tool, bootstrap, chosen, indexcss) {
      $(function () {
        console.log(111111)
        console.log($('h1').text())
        test()
        Tool.test()
        console.log(chosen)
        $('.select').chosen()
      })
    })
})
