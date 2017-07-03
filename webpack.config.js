// webpack.config.js
// guide: http://symfony.com/doc/current/frontend.html
// documentation: https://github.com/symfony/webpack-encore/blob/master/index.js
// Pug with symfony: https://github.com/pug-php/pug-symfony
var Encore = require('@symfony/webpack-encore');

Encore
    // directory where all compiled assets will be stored
    .setOutputPath('web/build/')

    // what's the public path to this directory (relative to your project's document root dir)
    .setPublicPath('/build')

    // empty the outputPath dir before each build
    .cleanupOutputBeforeBuild()

    // modify the default Babel configuration
    // http://symfony.com/doc/current/frontend/encore/babel.html
    /*.configureBabel(function(babelConfig) {
        babelConfig.presets.push('es2017');
    })*/

    // will output as web/build/app.js
    .addEntry('app', './frontend/js/main.js')

    .createSharedEntry('vendor', [
        'jquery'
        //'bootstrap',

        // you can also extract CSS - this will create a 'vendor.css' file
        // this CSS will *not* be included in page1.css or page2.css anymore
        //'bootstrap-sass/assets/stylesheets/_bootstrap.scss'
    ])

    // will output as web/build/global.css
    .addStyleEntry('global', './frontend/css/global.scss')

    // allow sass/scss files to be processed
    .enableSassLoader()

    .enablePostCssLoader()

    // https://github.com/shama/stylus-loader
    .addLoader({
      test: /\.styl$/,
      use: [
        'style-loader',
        'css-loader',
        {
          loader: 'stylus-loader',
          options: {
            use: [], // Plugins for stylus
          },
        },
      ]
    })

    // allow legacy applications to use $/jQuery as a global variable
    .autoProvidejQuery()

    .enableSourceMaps(!Encore.isProduction())

    // create hashed filenames (e.g. app.abc123.css)
    .enableVersioning()
;

// export the final configuration
module.exports = Encore.getWebpackConfig();