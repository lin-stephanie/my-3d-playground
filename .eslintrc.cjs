module.exports = {
  // 配置当前配置文件是项目的根配置文件（阻止ESLint继续在父级目录中寻找更多的配置文件）
  root: true,

  // 配置代码运行环境
  env: { browser: true, es2022: true },

  // 配置一组现有的ESLint规则
  extends: [
    // JS语法的linting规则集（recommended）
    'eslint:recommended',
    // 关闭不必要或可能与@typescript-eslint插件冲突的ESLint规则
    'plugin:@typescript-eslint/eslint-recommended',
    // TS语法的linting规则集（recommended）
    'plugin:@typescript-eslint/recommended',
    // TS语法的linting规则集（stylistic）
    'plugin:@typescript-eslint/stylistic',
    // React框架的linting规则集
    'plugin:react/recommended',
    // 使用React 17开始的新JSX转换功能以避免错误地强制要求导入React
    'plugin:react/jsx-runtime',
    // hook语法的linting规则集（React hooks ESLint插件推荐）
    'plugin:react-hooks/recommended',
    // 添加eslint-config-prettier到最后以关闭不必要或可能与Prettier冲突的规则
    'prettier',
  ],

  // 配置ESLint忽略的文件和目录
  // 自动忽略node_modules（https://eslint.org/blog/2020/05/eslint-v7.0.0-released/#main）
  ignorePatterns: ['dist', '.eslintrc.cjs'],

  // 配置使用解析器（下面以便ESLint可以理解TypeScript）
  parser: '@typescript-eslint/parser',

  // 配置语法解析器选项
  parserOptions: {
    // 指示ESLint使用最新的ECMAScript版本进行linting（影响ESLint解析器能够理解的语法）
    ecmaVersion: 2022,
    // 指定项目代码是使用ECMAScript模块组织
    sourceType: 'module',
    // 指定ESLint在哪里找到TypeScript配置文件
    project: ['./tsconfig.json', './tsconfig.node.json'],
    // 指定TypeScript配置文件的根目录
    tsconfigRootDir: __dirname,
  },

  // 配置使用的插件（这里为快速刷新功能提供支持）
  plugins: ['react-refresh'],

  // 配置项目特定的linting规则（这里确保只有组件被导出以便实现快速刷新）
  rules: {
    'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
  },

  // 配置在多个规则之间共享的信息
  settings: {
    // 自动检测并使用项目中安装的React版本来应用正确的规则
    react: {
      version: 'detect',
    },
  },
}
