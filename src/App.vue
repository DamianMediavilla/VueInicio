<template>
  <nav>
  </nav>
  <nav class="navbar navbar-expand navbar-light bg-light">
    <div class="nav navbar-nav">
        <router-link class="nav-item nav-link" to="/crear">Crear</router-link>
        <router-link class="nav-item nav-link" to="/listar">Listar</router-link>
      </div>
  </nav>
  <br>
  <router-view/>
</template>


