import { resolve } from 'path';
import dotenv from 'dotenv';
import dotenvExpand from 'dotenv-expand';
import fs from 'fs';

import { name, version } from '../package.json';

const config = {
  projectName: 'wechat-miniapp-demo',
  date: '2022-4-7',
  designWidth: 750,
  deviceRatio: {
    375: 1,
    640: 2.34 / 2,
    750: 1,
    828: 1.81 / 2,
  },
  sourceRoot: './src',
  outputRoot: 'dist',
  plugins: [],
  defineConstants: {},
  copy: {
    patterns: [],
    options: {},
  },
  framework: 'react',
  mini: {
    postcss: {
      pxtransform: {
        enable: true,
        config: {},
      },
      url: {
        enable: true,
        config: {
          limit: 1024, // 设定转换尺寸上限
        },
      },
      cssModules: {
        enable: false, // 默认为 false，如需使用 css modules 功能，则设为 true
        config: {
          namingPattern: 'module', // 转换模式，取值为 global/module
          generateScopedName: '[name]__[local]___[hash:base64:5]',
        },
      },
    },
  },
  h5: {
    publicPath: '/',
    staticDirectory: 'static',
    postcss: {
      autoprefixer: {
        enable: true,
        config: {},
      },
      cssModules: {
        enable: false, // 默认为 false，如需使用 css modules 功能，则设为 true
        config: {
          namingPattern: 'module', // 转换模式，取值为 global/module
          generateScopedName: '[name]__[local]___[hash:base64:5]',
        },
      },
    },
  },

  // 别名
  alias: {
    src: resolve(__dirname, '..', 'src/'),
    'src/components': resolve(__dirname, '..', 'src/components'),
    'src/utils': resolve(__dirname, '..', 'src/utils'),
    'src/package': resolve(__dirname, '..', 'package.json'),
    'src/project': resolve(__dirname, '..', 'project.config.json'),
    'src/model': resolve(__dirname, '..', 'src/model'),
    'src/assets': resolve(__dirname, '..', 'src/assets'),
    'src/filters': resolve(__dirname, '..', 'src/filters'),
    'src/hooks': resolve(__dirname, '..', 'src/hooks'),
    'src/pages': resolve(__dirname, '..', 'src/pages'),
  },
};

export default function (merge) {
  const dotConfigPath = resolve(__dirname, '..', process.env.MODE ? `./.env.${process.env.MODE}` : './.env');

  const dot = dotenv.parse(fs.readFileSync(dotConfigPath));

  const dotConfigPathDefault = resolve(__dirname, '..', './.env');
  const dotDefault = dotenv.parse(fs.readFileSync(dotConfigPathDefault));

  const env = dotenvExpand({ parsed: Object.assign({}, dotDefault, dot, { APP_NAME: `"${name}"`, APP_VERSION: `"${version}"` }) }).parsed;

  if (process.env.NODE_ENV === 'development') {
    return merge({}, config, { env }, require('./dev'));
  }
  return merge({}, config, { env }, require('./prod'));
}
