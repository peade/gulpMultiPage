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
})

