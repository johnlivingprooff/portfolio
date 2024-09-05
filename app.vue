<template>
  <div>
    <header class='nav'>
      <ul>
        <li><nuxt-link to="/">Home</nuxt-link></li>
        <li><nuxt-link to="/projects">Projects</nuxt-link></li>
        <li><nuxt-link to="#contact">Contact</nuxt-link></li>
      </ul>
    </header>
    <NuxtPage />
  </div>
</template>


<style>

body {
  background-image: url('~/assets/imgs/bg01.jpg');
  background-size: cover;
  background-repeat: no-repeat;
}

.nav {
  background: transparent;
  color: white;
  padding: 10px;
  transform-origin: left bottom;
  transform: rotate(90deg);
  position: fixed;
  display: flex;
  justify-content: center;
  width: 100vh;
}

.nav ul {
  display: flex;
  justify-content: space-between;
  width: 50%;
  list-style-type: none;
}


</style>
