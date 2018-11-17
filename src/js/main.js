require.config({
  baseUrl: '/src/',
  paths: {
    'jquery': '/lib/jquery.min.3',
    'bootstrap': '/lib/bootstrap-3.3.7/js/bootstrap'
  },
  shim: {
    'bootstrap': {
      deps: ['jquery']
    }
  }
})
