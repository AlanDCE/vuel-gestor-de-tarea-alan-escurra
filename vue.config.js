const { defineConfig } = require('@vue/cli-service');
module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: process.env.NODE_ENV === 'production'
    ? '/vuel-gestor-de-tarea-alan-escurra/'  // Asegúrate de que este sea el nombre exacto de tu repositorio
    : '/'
});
