module.exports = {
  inputDir: 'src', // Write all your vanilla content here
  outputDir: 'dist', // This is where the converted files will be created
  dontFlatten: false, // Keep compound selectors rather than BEM-style flattening
  useNumbers: false, // Use IDs (1, 2, 3, 4) instead of hash (3d0ccd)
  dontHashFirst: false, // The first scope of a certain type doesn't get an ID or hash
  writeRuntimeMap: false, // Write the map needed for runtime scoping
  teamRepo: false, // Scan team files for usage and only enable hash/ID if module name is already used
  flattenCombis: [], //Flatten combinators, e.g. > becomes _a_
  overrideConfig: {},
};
