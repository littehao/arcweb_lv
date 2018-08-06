module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
 // parser: '',//解析器，这里我们使用babel-eslint
  parserOptions: {
    sourceType: 'babel-eslint'//类型为module，因为代码使用了使用了ECMAScript模块
  },
  extends: [
    // https://github.com/vuejs/eslint-plugin-vue#priority-a-essential-error-prevention
    // consider switching to `plugin:vue/strongly-recommended` or `plugin:vue/recommended` for stricter rules.
    'plugin:vue/essential',
  ],
  // required to lint *.vue files
  plugins: [
     'vue',
  ],
  // add your custom rules here
  rules: {}
}
