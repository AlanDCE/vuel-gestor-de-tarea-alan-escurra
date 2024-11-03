<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" class="logo">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <p class="welcome-text">Esta es tu página de inicio. ¡Explora las diferentes secciones para ver todas las características!</p>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'HomeView',
  components: {
    HelloWorld
  }
}
</script>

<style scoped>
.home {
  text-align: center;
  margin-top: 50px;
}

.logo {
  width: 150px;
  margin-bottom: 20px;
}

.welcome-text {
  font-size: 1.2em;
  color: #2c3e50;
  margin-top: 20px;
}
</style>
