const presets = [
  [
    "@babel/env",
    {
      targets: {
        edge: "17",
        firefox: "60",
        chrome: "67",
        safari: "11.1",
      },
      useBuiltIns: "usage",
    },
  ],
  "@babel/preset-react"
];
const plugins = [
  ["react-css-modules", { "generateScopedName": "[local]_[hash:base64:4]" }],
  ["react-hot-loader/babel"]
]

module.exports = { presets };