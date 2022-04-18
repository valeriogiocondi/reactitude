let babelPresetsObject = {
  "presets": [
    "@babel/preset-env",
    [
      "@babel/preset-react",
      {
        "runtime": "automatic"
      }
    ]
  ]
};

exports.addPreset = (preset) => {

  babelPresetsObject.presets.push(preset); 
};

exports.getTemplate = () => {

  return JSON.stringify(babelPresetsObject, null, 2)
};
