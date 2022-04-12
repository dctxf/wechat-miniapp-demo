module.exports = {
  extends: ['taro/react'],
  plugins: ['prettier', '@typescript-eslint', 'simple-import-sort'],
  rules: {
    'react/jsx-uses-react': 1,
    'react/jsx-uses-vars': 1,
    'simple-import-sort/imports': 'error',
    'simple-import-sort/exports': 'error',
    'import/first': 'off',
    'import/newline-after-import': 'error',
    'import/no-duplicates': 'error',
    'react/react-in-jsx-scope': 'off',
    'jsx-quotes': 'off',
    'import/no-commonjs': 'off',
    'no-console': 'error',
  },
};
