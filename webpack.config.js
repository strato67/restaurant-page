const path = require('path');

module.exports = {
    entry: './src/index.js',
    devtool: 'source-map',
    devServer:{
      static: './dist',
      historyApiFallback: true,     
    },
    mode:'development',
    module: {
      rules: [{
              test: /\.(js|jsx)$/,
              exclude: /node_modules/,
              use: {
                  loader: 'babel-loader'
              }
          },
          {
              test: /\.css$/i,
              use: ['style-loader', 'css-loader'],
          },
          {
            test: /\.(png|svg|jpg|jpeg|gif)$/i,
            type: 'asset/resource',
          },
          {
            test: /\.json$/,
            use: ['json-loader'],
            type: 'javascript/auto'
          },
      ],

      
  },
    output: {
      filename: 'main.js',
      path: path.resolve(__dirname, 'dist'),
    },
    resolve: {
      extensions: ['.js', '.jsx', '.css']
  },
  };
  
