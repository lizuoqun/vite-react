import type {Plugin} from 'vite';
import {defineConfig} from 'vite';
import react from '@vitejs/plugin-react-swc';
import mockjs from 'mockjs';

const viteMockServer = (): Plugin => {
  return {
    name: 'vite-mock-server',
    //使用vite插件的钩子函数
    configureServer(server) {
      server.middlewares.use('/api/list', async (req, res) => {
        res.setHeader('Content-Type', 'application/json');
        const data = mockjs.mock({
          //返回1000条数据
          'list|1000': [
            {
              'id|+1': 1,
              'name': '@cname()',
              'address': '@county(true)' //address为随机地址
            }
          ]
        });
        //返回数据
        res.end(JSON.stringify(data));
      });
    }
  };
};

export default defineConfig({
  plugins: [react(), viteMockServer()]
});
