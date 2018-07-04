const path = require('path');


module.exports = {
  plugins: [
    // require('autoprefixer'),
    require('postcss-import')({
      resolve(id, basedir) {
        // resolve alias @qualquercoisa, @import '@src/style.css'; same as version 1
        if (/^@src/.test(id)) return path.resolve('./src', id.slice(5));

        // resolve relative path, @import './components/style.css'; prefix with './' or '../'
        if (/^\./.test(id)) return path.resolve(basedir, id);

        // resolve node_modules, @import 'normalize.css/normalize.css'
        return path.resolve('./node_modules', id);
      },
    }),
    require('postcss-cssnext')({
      browsers: 'last 2 versions',
    }),
    require('postcss-custom-media')(),
  ],
};
