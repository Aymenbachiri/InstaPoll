module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      "nativewind/babel",
      [
        "module-resolver",
        {
          alias: {
            "@Components": "./src/components",
            "@Screens": "./src/screens",
            "@lib": "./src/lib",
          },
          extensions: [".js", ".jsx", ".ts", ".tsx"],
        },
      ],
    ],
  };
};
