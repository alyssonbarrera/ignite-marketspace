module.exports = function (api) {
  api.cache(true)
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      'react-native-reanimated/plugin',
      [
        'module-resolver',
        {
          root: ['./src'],
          alias: {
            '@assets': './src/assets',
            '@components': './src/components',
            '@routes': './src/routes',
            '@screens': './src/screens',
            '@storage': './src/storage',
            '@services': './src/services',
            '@contexts': './src/contexts',
            '@hooks': './src/hooks',
            '@theme': './src/theme',
            '@dtos': './src/dtos',
            '@utils': './src/utils',
          },
        },
      ],
    ],
  }
}
