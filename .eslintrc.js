const project = './tsconfig.json'
module.exports = {

    root: true,
    env: {
      browser: true,
      node: true,
      es6: true,
      es2017: true,
      es2020: true,
      es2021: true,
      jasmine: true,
    },
    parserOptions: {
      ecmaVersion: 2020,
      sourceType: 'module',
    },
    settings: {
      'import/parsers': {
        '@typescript-eslint/parser': ['.ts', '.tsx'],
      },
      'import/resolver': {
        typescript: {
          alwaysTryTypes: true,
          project, // <-- Same tsconfig.json must be referenced
        },
      },
    },
    overrides: [
      { 
        files: ['*.ts', '*.tsx'],
        parser: '@typescript-eslint/parser',
        parserOptions: {
          project,
          createDefaultProgram: true,
        },
        plugins: ['@typescript-eslint', 'deprecation'],
        rules: {
            'deprecation/deprecation': 'error',
        }
  
      }
    ]

}