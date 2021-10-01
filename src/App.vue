<template>
  <div id="app">
    <img class="logo" alt="Vue logo" src="./assets/logo.png" width="25%" />
    <Nested />
  </div>
</template>

<script>
import Nested from './components/Nested';

export default {
  name: 'App',
  components: {
    Nested,
  },
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.logo {
  width: 5rem;
}
</style>
