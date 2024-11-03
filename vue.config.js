const { defineConfig } = require('@vue/cli-service');
module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: process.env.NODE_ENV === 'production'
    ? '/Gestor-de-Tareas-con-VueJs-y-Bootstrap-Alan/'  // Nombre del repositorio
    : '/'
});
