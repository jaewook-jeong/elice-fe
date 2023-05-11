module.exports = {
  '*.+(ts|tsx)': [() => 'yarn tsc -p tsconfig.json'],
  '**/*.+(ts|tsx|js|jsx)': ['eslint --fix --cache', 'prettier --write', 'git add'],
};
