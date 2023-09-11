module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: ["nativewind/babel",
      [
        'module-resolver',
        {
          root: ['.'],
          extensions: [
            '.ios.js',
            '.android.js',
            '.js',
            '.ts',
            '.tsx',
            '.json',
            '.jsx',
          ],
          alias: {
            components: ['./src/components'],
            lang: ['./src/lang'],
            screens: ['./src/screens'],
            navigation: ['./src/navigation'],
            utils: ['./src/utils'],
            contexts: ['./src/contexts'],
            assets: ['./assets'],
          },
        },
      ],
    ],
  };
};
