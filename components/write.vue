<template>
  <div class="clientele">
    <h2>Some Clients I've worked with:</h2>
    <div class="img-box">
      <img src="../assets/imgs/logos/00.png" alt="johnlivingprooff">
      <img src="../assets/imgs/logos/01.ico" alt="johnlivingprooff">
      <img src="../assets/imgs/logos/02.png" alt="johnlivingprooff">
      <img src="../assets/imgs/logos/03.png" alt="johnlivingprooff">
      <img src="../assets/imgs/logos/04.png" alt="johnlivingprooff">
      <img src="../assets/imgs/logos/05.png" alt="johnlivingprooff">
      <img src="../assets/imgs/logos/06.png" alt="johnlivingprooff">
      <img src="../assets/imgs/logos/07.png" alt="johnlivingprooff">
      <img src="../assets/imgs/logos/08.png" alt="johnlivingprooff">
      <img src="../assets/imgs/logos/09.png" alt="johnlivingprooff">
      <img src="../assets/imgs/logos/10.png" alt="johnlivingprooff">
      <img src="../assets/imgs/logos/11.png" alt="johnlivingprooff">
      <img src="../assets/imgs/logos/12.png" alt="johnlivingprooff">
      <img src="../assets/imgs/logos/13.jpg" alt="johnlivingprooff">
      <img src="../assets/imgs/logos/14.png" alt="johnlivingprooff">
      <img src="../assets/imgs/logos/15.png" alt="johnlivingprooff">
      <img src="../assets/imgs/logos/16.png" alt="johnlivingprooff">
      <img src="../assets/imgs/logos/17.png" alt="johnlivingprooff">
    </div>
  </div>
</template>

<script>

</script>

<style>
.clientele {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
  margin-bottom: 50px;
}

.clientele h2 {
  font-size: 2rem;
  margin-bottom: 20px;
  font-family: 'Raleway', sans-serif;
}

.img-box {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  width: 60%;
}

.img-box img {
  width: auto;
  height: 100px;
  margin: 10px;
  transition: all 0.3s ease;
}

.img-box img:hover {
  transform: scale(1.1);
}

/* mobile view */
@media (max-width: 768px) {
  .clientele h2 {
    font-size: 1em;
  }

  .img-box img {
    width: 50px;
    height: auto;
  }
}

</style>