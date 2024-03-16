<template>
  <div>
    <WelcomeAnime />
    <div class="card">

    </div>
  </div>
</template>

<script lang="ts" setup>

</script>

<style>
body {
  margin: 0;
  padding: 0;
  background-color: #000000;
  font-family: sans-serif;
}

.card {
  width: 96%;
  height: 300px;
  background: #333;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  position: relative;
  overflow: hidden;
  margin: -15px auto;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  font-size: 20px;
  text-align: center;
  transition: 0.5s;
}
</style>