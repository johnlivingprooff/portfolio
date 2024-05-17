<template>
  <div class="container">
    <div class="bous">
      <h1>bous</h1>
      <p>/βοῦς/</p>
    </div>
    <div class="line">
      <span v-for="(line, index) in lineData" :key="index">
        <h2>{{ line.year }}</h2>
        <NuxtLink :to="'/blog/' + line.id">
          {{ line.description }}
        </NuxtLink>
      </span>
      <br><br><br>
    </div>
    <div class="window" ref="window" @mouseover="stopScroll" @mouseleave="startScroll">
      <div class="slideshow">
        <img v-for="(image, index) in slideshowImages" :src="image" :key="index" class="slideshow-image" />
      </div>
      <img src="../public/img/scroll.png" alt="scroll" class="scrl">
    </div>
  </div>
</template>

<script>
import { onMounted, ref } from 'vue';

export default {
  async setup() {
    const slideshowImages = ref([]);

    const fetchImages = async () => {
      const images = import.meta.glob('../public/img/slides/*.jpg');
      const importedImages = await Promise.all(Object.values(images).map(i => i()));
      slideshowImages.value = importedImages.map(module => module.default);
    };

    // Call fetchImages before using any await statement
    fetchImages();

    const currentIndex = ref(0);
    let intervalId = null;

    const slideShow = () => {
      intervalId = setInterval(() => {
        currentIndex.value = (currentIndex.value + 1) % slideshowImages.value.length;
      }, 2000);
    };

    const stopScroll = () => {
      clearInterval(intervalId);
    };

    const startScroll = () => {
      slideShow();
    };

    // Call onMounted after fetchImages
    onMounted(() => {
      currentIndex.value = Math.floor(Math.random() * slideshowImages.value.length);
      slideShow();
    });

    const lineData = computed(() => {
      return [
        { id: '1', year: '2020', description: 'Holding Lamps for a Distrought generation, we are light', },
        { id: '2', year: '2021', description: 'A Comic relief in an Isolated World, take advantage', },
        { id: '3', year: '2022', description: 'Can we really do the most? we do what we can, without limit', },
        { id: '4', year: '2023', description: "The herald of a new dawn, for lightbearers. Join God's kids ;)", }
      ];
    });

    return {
      slideshowImages,
      currentIndex,
      stopScroll,
      startScroll,
      lineData
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

.line a {
  color: white;
  font-size: 20px;
  font-family: 'Noto Serif JP', serif;
  font-style: italic;
  font-weight: 500;
  white-space: normal;
  padding: 0 30px;
  margin: 0 30px;
  text-decoration: none;
}

.line a:hover {
  color: #f0f0f0;
  transition: 0.5s;
  text-decoration: underline;
}

.window {
  height: 100vh;
  width: 100%;
  overflow-y: auto;
  display: inline-block;
  transition: all ease-in-out 0.3s;
  filter: blur(1px);
  padding: 10px;
  color: white;
  font-family: 'Noto Serif JP', serif;
  scrollbar-gutter: stable;
  scrollbar-width: thin;
  scrollbar-color: transparent transparent;
  scrollbar-arrow-color: beige;
  border-radius: 20px;
}

.slideshow {
  display: flex;
  flex-wrap: nowrap;
}

.slideshow-image {
  height: 98vh;
  width: 100%;
  object-fit: cover;
}

.window:hover {
  filter: blur(0px);
  transition: all ease-in-out 0.3s;
  transform: scale(0.98);
}

.scrl {
  position: fixed;
  bottom: 45px;
  right: 50px;
  width: 35px;
  margin: 0 10px;
  filter: invert(1);
  transition: 0.5s;
  text-shadow: 10px 5px 10px #000000;
}
</style>