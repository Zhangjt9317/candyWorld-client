/**
 * 在生产环境 代理是无法生效的，所以这里没有生产环境的配置
 * The agent cannot take effect in the production environment
 * so there is no configuration of the production environment
 * For details, please see
 * https://pro.ant.design/docs/deploy
 */
export default {
  dev: {
    '/api/': {
      target: 'https://us-west2-candyworld-ddaa9.cloudfunctions.net',
      changeOrigin: true,
      pathRewrite: {
        '^': '',
      },
    },
  },
  test: {
    '/api/': {
      target: 'https://us-west2-candyworld-ddaa9.cloudfunctions.net',
      changeOrigin: true,
      pathRewrite: {
        '^': '',
      },
    },
  },
  pre: {
    '/api/': {
      target: 'your pre url',
      changeOrigin: true,
      pathRewrite: {
        '^': '',
      },
    },
  },
    proxy: {
    '/api': {
      'target': 'https://us-west2-candyworld-ddaa9.cloudfunctions.net',
      'changeOrigin': true,
      'pathRewrite': { '^/api' : '' },
    },
  }
};
