<template>
  <div class="about">
    <h1>Acerca de esta aplicación</h1>
    <p>Esta aplicación fue desarrollada para gestionar tareas de manera eficiente.</p>
    <p>Características clave:</p>
    <ul>
      <li>Agregar tareas manualmente</li>
      <li>Extraer tareas desde una API</li>
      <li>Vista combinada de tareas</li>
    </ul>
    <p>Desarrollado por Alan Daniel Escurra Campuzano</p>
  </div>
</template>

<script>
export default {
  name: 'AboutView'
};
</script>

<style scoped>
.about {
  text-align: center;
  margin-top: 50px;
}

.about h1 {
  font-size: 2em;
  color: #42b983;
}

.about p {
  font-size: 1.2em;
  color: #2c3e50;
}

.about ul {
  list-style-type: none;
  padding: 0;
}

.about ul li {
  font-size: 1.2em;
  color: #2c3e50;
  margin-bottom: 10px;
}
</style>
