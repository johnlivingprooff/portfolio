<template>
  <div>
    <div class="p_card">
      <img src="../public/img/projects/1.png" alt="project-one">
      <img src="../public/img/projects/2.png" alt="project-one">
      <img src="../public/img/projects/3.png" alt="project-one">
      <img src="../public/img/projects/4.png" alt="project-one">
      <img src="../public/img/projects/5.png" alt="project-one">
    </div>
  </div>
</template>

<script>

</script>

<style>
.p_card {
  width: 100%;
  height: 100%;
  border-radius: 10px;
  overflow: hidden;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  justify-content: center;
}

.p_card img {
  width: auto;
  height: 400px;
  object-fit: cover;
  transition: 0.5s;
  margin: 10px;
  border-radius: 10px;
}

.p_card img:hover {
  transform: scale(1.03);
}
</style>