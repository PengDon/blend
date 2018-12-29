import pageRoutes from './router.config';

export default {
  singular: true,
  plugins: [
    ['umi-plugin-react', {
      antd: true,
      dva:true, 
    }],
  ],
  routes: pageRoutes,
  proxy: {
    '/api': {
      target: 'http://127.0.0.1:7001',
      changeOrigin: true,
    },
  },
};