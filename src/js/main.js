"use strict";

require.config({
  baseUrl: '/js/',
  urlArgs: 'r=' + 'v001',
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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOlsicmVxdWlyZSIsImNvbmZpZyIsImJhc2VVcmwiLCJ1cmxBcmdzIiwibWFwIiwicGF0aHMiLCJzaGltIiwiZGVwcyJdLCJtYXBwaW5ncyI6Ijs7QUFBQUEsT0FBTyxDQUFDQyxNQUFSLENBQWU7QUFDYkMsRUFBQUEsT0FBTyxFQUFFLE1BREk7QUFFYkMsRUFBQUEsT0FBTyxFQUFFLE9BQU8sTUFGSDtBQUdiQyxFQUFBQSxHQUFHLEVBQUU7QUFDSCxTQUFLO0FBQ0gsYUFBTztBQURKO0FBREYsR0FIUTtBQVFiQyxFQUFBQSxLQUFLLEVBQUU7QUFDTCxjQUFVLHdCQURMO0FBRUwsaUJBQWEsd0NBRlI7QUFHTCxjQUFVO0FBSEwsR0FSTTtBQWFiQyxFQUFBQSxJQUFJLEVBQUU7QUFDSixpQkFBYTtBQUNYQyxNQUFBQSxJQUFJLEVBQUUsQ0FBQyxRQUFEO0FBREssS0FEVDtBQUlKLGNBQVU7QUFDUkEsTUFBQUEsSUFBSSxFQUFFLENBQUMsUUFBRCxFQUFXLHVCQUFYO0FBREU7QUFKTjtBQWJPLENBQWYiLCJzb3VyY2VzQ29udGVudCI6WyJyZXF1aXJlLmNvbmZpZyh7XHJcbiAgYmFzZVVybDogJy9qcy8nLFxyXG4gIHVybEFyZ3M6ICdyPScgKyAndjAwMScsXHJcbiAgbWFwOiB7XHJcbiAgICAnKic6IHtcclxuICAgICAgJ2Nzcyc6ICdsaWIvY3NzLm1pbidcclxuICAgIH1cclxuICB9LFxyXG4gIHBhdGhzOiB7XHJcbiAgICAnanF1ZXJ5JzogJy4uL2pzL2xpYi9qcXVlcnkubWluLjMnLFxyXG4gICAgJ2Jvb3RzdHJhcCc6ICcuLi9qcy9saWIvYm9vdHN0cmFwLTMuMy43L2pzL2Jvb3RzdHJhcCcsXHJcbiAgICAnY2hvc2VuJzogJy4uL2pzL2xpYi9jaG9zZW4uanF1ZXJ5Lm1pbidcclxuICB9LFxyXG4gIHNoaW06IHtcclxuICAgICdib290c3RyYXAnOiB7XHJcbiAgICAgIGRlcHM6IFsnanF1ZXJ5J11cclxuICAgIH0sXHJcbiAgICAnY2hvc2VuJzoge1xyXG4gICAgICBkZXBzOiBbJ2pxdWVyeScsICdjc3MhLi4vY3NzL2xpYi9jaG9zZW4nXVxyXG4gICAgfVxyXG4gIH1cclxufSlcclxuIl0sImZpbGUiOiJtYWluLmpzIn0=
