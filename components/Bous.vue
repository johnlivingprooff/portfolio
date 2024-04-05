<template>
  <div class="container">
    <div class="bous">
      <h1>bous</h1>
      <p>/βοῦς/</p>
    </div>
    <div class="line">
      <span>
        <h2>2020</h2>
        <i>Holding Lamps for a Distrought generation, we are light</i>
      </span>
      <span>
        <h2>2021</h2>
        <i>A Comic relief in an Isolated World, take advantage</i>
      </span>
      <span>
        <h2>2022</h2>
        <i>Can we really do the most? we do what we can, without limit</i>
      </span>
      <span>
        <h2>2023</h2>
        <i>The herald of a new dawn, for lightbearers. Join God's kids ;)</i>
      </span>     
      <br><br><br>
    </div>
    <div class="window">
      <img v-for="image in slideshowImages" :src="image" :key="image" class="slideshow-image" />
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue';

export default {
 setup() {
    const slideshowImages = ref([
      '/img/shoes.jpg',
      '/img/flower-home.jpg',
      '/img/computer-open.jpg',
    ]);

    let currentIndex = 0;
    let interval;

    const slideShow = () => {
      interval = setInterval(() => {
        currentIndex = (currentIndex + 1) % slideshowImages.value.length;
      }, 2000);
    };

    onMounted(() => {
      slideShow();
    });

    return {
      slideshowImages,
    };
 },
};
</script>


<style scoped>
.container {
  display: flex;
}

.bous {
  border-left: 1px solid white;
  height: 160px;
  margin: auto 180px;
  width: 45%;
  text-align: left;
}

.bous h1 {
  margin: auto;
  color: white;
  font-size: 65px;
  padding: 0 30px;
  font-family: "Noto Serif JP", serif;
  font-style: italic;
  font-weight: 500;
}

.bous p {
  color: white;
  font-size: 20px;
  letter-spacing: 5px;
  padding: 0 30px;
}

.line {
  border-left: 1px solid white;
  height: 700px;
}

.line span {
  display: flex;
  justify-content: center;
  align-items: center;
}

.line h2 {
  margin-left: -95px;
  padding: 55px 0;
  color: white;
  font-family: 'Ojuju', cursive;
  letter-spacing: 5px;
}

.line i {
  color: white;
  font-size: 20px;
  font-family: 'Noto Serif JP', serif;
  font-style: italic;
  font-weight: 500;
  white-space: normal;
  padding: 0 30px;
  margin: 0 30px;
}

.window {
  height: 100vh;
  width: 100%;
  overflow: hidden;
  display: inline-block;
  transition: all ease-in-out 0.3s;
  filter: blur(5px);
  padding: 10px;
  color: white;
  font-family: 'Noto Serif JP', serif;
}

.slideshow-image {
  height: 100%;
  width: 100%;
  object-fit: cover;
}

.window:hover {
  filter: blur(0px);
  transition: all ease-in-out 0.3s;
  transform: scale(0.9);
}
</style>