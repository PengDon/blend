import pageRoutes from './router.config';

export default {
  singular: true,
  plugins: [
    ['umi-plugin-react', {
      antd: true,
      dva:{
        hmr: true,
      },
      dynamicImport: {
        loadingComponent: './component/PageLoading/index',
      },
      pwa: {
        workboxPluginMode: 'InjectManifest',
        workboxOptions: {
          importWorkboxFrom: 'local',
        },
      },
    }],
  ],
  routes: pageRoutes,
  proxy: {
    '/api': {
      target: 'http://127.0.0.1:7001',
      changeOrigin: true,
    },
    '/bd': {
      target: 'https://image.baidu.com',
      changeOrigin: true,
      "pathRewrite":{
        '^/bd': ''
      },
    },
  },
};