"use strict";

require.config({
  baseUrl: '/js/',
  urlArgs: "r=" + 'v001',
  map: {
    '*': {
      'css': 'lib/css.min'
    }
  },
  paths: {
    'jquery': '../js/lib/jquery.min.3',
    'bootstrap': '../js/lib/bootstrap-3.3.7/js/bootstrap',
    'chosen': '../js/lib/chosen.jquery.min'
  },
  shim: {
    'bootstrap': {
      deps: ['jquery']
    },
    'chosen': {
      deps: ['jquery', 'css!../css/lib/chosen']
    }
  }
});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOlsicmVxdWlyZSIsImNvbmZpZyIsImJhc2VVcmwiLCJ1cmxBcmdzIiwibWFwIiwicGF0aHMiLCJzaGltIiwiZGVwcyJdLCJtYXBwaW5ncyI6Ijs7QUFBQUEsT0FBTyxDQUFDQyxNQUFSLENBQWU7QUFDYkMsRUFBQUEsT0FBTyxFQUFFLE1BREk7QUFFYkMsRUFBQUEsT0FBTyxFQUFFLE9BQU8sTUFGSDtBQUdiQyxFQUFBQSxHQUFHLEVBQUU7QUFDSCxTQUFLO0FBQ0gsYUFBTztBQURKO0FBREYsR0FIUTtBQVFiQyxFQUFBQSxLQUFLLEVBQUU7QUFDTCxjQUFVLHdCQURMO0FBRUwsaUJBQWEsd0NBRlI7QUFHTCxjQUFVO0FBSEwsR0FSTTtBQWFiQyxFQUFBQSxJQUFJLEVBQUU7QUFDSixpQkFBYTtBQUNYQyxNQUFBQSxJQUFJLEVBQUUsQ0FBQyxRQUFEO0FBREssS0FEVDtBQUlKLGNBQVU7QUFDUkEsTUFBQUEsSUFBSSxFQUFFLENBQUMsUUFBRCxFQUFXLHVCQUFYO0FBREU7QUFKTjtBQWJPLENBQWYiLCJzb3VyY2VzQ29udGVudCI6WyJyZXF1aXJlLmNvbmZpZyh7XHJcbiAgYmFzZVVybDogJy9qcy8nLFxyXG4gIHVybEFyZ3M6IFwicj1cIiArICd2MDAxJyxcclxuICBtYXA6IHtcclxuICAgICcqJzoge1xyXG4gICAgICAnY3NzJzogJ2xpYi9jc3MubWluJ1xyXG4gICAgfVxyXG4gIH0sXHJcbiAgcGF0aHM6IHtcclxuICAgICdqcXVlcnknOiAnLi4vanMvbGliL2pxdWVyeS5taW4uMycsXHJcbiAgICAnYm9vdHN0cmFwJzogJy4uL2pzL2xpYi9ib290c3RyYXAtMy4zLjcvanMvYm9vdHN0cmFwJyxcclxuICAgICdjaG9zZW4nOiAnLi4vanMvbGliL2Nob3Nlbi5qcXVlcnkubWluJ1xyXG4gIH0sXHJcbiAgc2hpbToge1xyXG4gICAgJ2Jvb3RzdHJhcCc6IHtcclxuICAgICAgZGVwczogWydqcXVlcnknXVxyXG4gICAgfSxcclxuICAgICdjaG9zZW4nOiB7XHJcbiAgICAgIGRlcHM6IFsnanF1ZXJ5JywgJ2NzcyEuLi9jc3MvbGliL2Nob3NlbiddXHJcbiAgICB9XHJcbiAgfVxyXG59KVxyXG5cclxuIl0sImZpbGUiOiJtYWluLmpzIn0=
