require(['../main'], function (_m) {
  require(['jquery', 'common/func', 'common/tool', 'bootstrap', 'chosen'],
    function ($, test, tool, bootstrap, chosen) {
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
