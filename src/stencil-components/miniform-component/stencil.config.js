exports.config = {
  namespace: 'miniformcomponent',
  outputTargets:[
    {
      type: 'dist'
    },
    {
      type: 'www',
      serviceWorker: false,
      buildDir: '../..'
    },
    {
      type: 'www'
    }
  ]
};

exports.devServer = {
  root: 'www',
  watchGlob: '**/**'
}
