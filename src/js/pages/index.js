"use strict";

require(['../main'], function (_m) {
  require(['jquery', 'common/func', 'common/tool', 'bootstrap', 'chosen', 'css!../../css/index.css'], function ($, test, Tool, bootstrap, chosen, indexcss) {
    $(function () {
      console.log(111111);
      console.log($('h1').text());
      test();
      Tool.test();
      console.log(chosen);
      $('.select').chosen();
    });
  });
});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbInJlcXVpcmUiLCJfbSIsIiQiLCJ0ZXN0IiwiVG9vbCIsImJvb3RzdHJhcCIsImNob3NlbiIsImluZGV4Y3NzIiwiY29uc29sZSIsImxvZyIsInRleHQiXSwibWFwcGluZ3MiOiI7O0FBQUFBLE9BQU8sQ0FBQyxDQUFDLFNBQUQsQ0FBRCxFQUFjLFVBQVVDLEVBQVYsRUFBYztBQUNqQ0QsRUFBQUEsT0FBTyxDQUFDLENBQUMsUUFBRCxFQUFXLGFBQVgsRUFBMEIsYUFBMUIsRUFBeUMsV0FBekMsRUFBc0QsUUFBdEQsRUFBZ0UseUJBQWhFLENBQUQsRUFDTCxVQUFVRSxDQUFWLEVBQWFDLElBQWIsRUFBbUJDLElBQW5CLEVBQXlCQyxTQUF6QixFQUFvQ0MsTUFBcEMsRUFBNENDLFFBQTVDLEVBQXNEO0FBQ3BETCxJQUFBQSxDQUFDLENBQUMsWUFBWTtBQUNaTSxNQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWSxNQUFaO0FBQ0FELE1BQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZUCxDQUFDLENBQUMsSUFBRCxDQUFELENBQVFRLElBQVIsRUFBWjtBQUNBUCxNQUFBQSxJQUFJO0FBQ0pDLE1BQUFBLElBQUksQ0FBQ0QsSUFBTDtBQUNBSyxNQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWUgsTUFBWjtBQUNBSixNQUFBQSxDQUFDLENBQUMsU0FBRCxDQUFELENBQWFJLE1BQWI7QUFDRCxLQVBBLENBQUQ7QUFRRCxHQVZJLENBQVA7QUFXRCxDQVpNLENBQVAiLCJzb3VyY2VzQ29udGVudCI6WyJyZXF1aXJlKFsnLi4vbWFpbiddLCBmdW5jdGlvbiAoX20pIHtcclxuICByZXF1aXJlKFsnanF1ZXJ5JywgJ2NvbW1vbi9mdW5jJywgJ2NvbW1vbi90b29sJywgJ2Jvb3RzdHJhcCcsICdjaG9zZW4nLCAnY3NzIS4uLy4uL2Nzcy9pbmRleC5jc3MnXSxcclxuICAgIGZ1bmN0aW9uICgkLCB0ZXN0LCBUb29sLCBib290c3RyYXAsIGNob3NlbiwgaW5kZXhjc3MpIHtcclxuICAgICAgJChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coMTExMTExKVxyXG4gICAgICAgIGNvbnNvbGUubG9nKCQoJ2gxJykudGV4dCgpKVxyXG4gICAgICAgIHRlc3QoKVxyXG4gICAgICAgIFRvb2wudGVzdCgpXHJcbiAgICAgICAgY29uc29sZS5sb2coY2hvc2VuKVxyXG4gICAgICAgICQoJy5zZWxlY3QnKS5jaG9zZW4oKVxyXG4gICAgICB9KVxyXG4gICAgfSlcclxufSlcclxuIl0sImZpbGUiOiJwYWdlcy9pbmRleC5qcyJ9
