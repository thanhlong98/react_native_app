module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: [
          '.ios.ts',
          '.android.ts',
          '.ts',
          '.ios.tsx',
          '.android.tsx',
          '.tsx',
          '.jsx',
          '.js',
          '.json'
        ],
        alias: {
          '@components': './src/components',
          '@screens': './src/screens',
          '@images': './src/assets/images',
          '@icons': './src/assets/icons',
          '@constants': './src/constants',
          '@styles': './src/styles',
          '@store': './src/stores',
          '@utils': './src/utils'
        }
      }
    ]
  ]
}
