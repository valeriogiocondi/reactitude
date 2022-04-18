let tsConfigObject = {
  compilerOptions: {
    target: "es2016",
    lib: [
      "DOM",
      "ESNext",
    ],
    jsx: "react-jsx",
    module: "ESNext",
    moduleResolution: "node",
    resolveJsonModule: true,
    noEmit: true,
    isolatedModules: true,
    esModuleInterop: true,
    forceConsistentCasingInFileNames: true,
    strict: true,
    skipLibCheck: true
  },
  exclude: ["node_modules/**/*"],
  include: ["src/**/*"]
};

exports.getTemplate = () => {

  return JSON.stringify(tsConfigObject, null, 2)
};
