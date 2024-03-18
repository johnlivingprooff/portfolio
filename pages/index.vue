<template>
  <div>
    <WelcomeAnime />
    <div class="card" ref="card">
      <div class="c-img"></div>
      <div class="c-txt">
        <p>Welcome to my</p>
        <h2>Digital<br>Realm</h2>
        <p id="intro">
          Woken—a blend of fear and love. Writer, designer, creator, innovator. 
          A fusion of creativity and technology one boundless force.
        </p><br><br>
        <span id="nametag">- John-Livingprooff</span>
      </div>
    </div>
    <br><br><br><br><br>
    <Bous />
    <br><br><br><br><br>

  </div>
</template>

<script>
export default {
  mounted() {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.05 // 5% of the card needs to be visible for the callback to trigger
    };

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          this.fadeInCard();
          observer.unobserve(this.$refs.card);
        }
      });
    }, options);

    observer.observe(this.$refs.card);
  },
  methods: {
    fadeInCard() {
      const card = this.$refs.card;
      card.style.opacity = '1';
      card.style.transform = 'translateY(0)';
    }
  }
}
</script>

<style>
body {
  margin: 0;
  padding: 0;
  background-color: #0f0f0f;
  background-image: url('/img/stars.jpg');
  background-repeat: repeat;
  background-size: contain;
  font-family: sans-serif;
  scrollbar-width: thin;
}

.card {
  width: 96%;
  height: 800px;
  background: #2021216e;
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
  transition: opacity 0.5s, transform 0.5s;
  opacity: 0;
  transform: translateY(50px);
}

.c-txt {
  background-color: #202121b4;
  margin: auto;
  padding-left: 55px;
  padding-top: 100px;
  padding-right: 55px;
  text-align: left;
  font-family: 'Inter', sans-serif;
  z-index: 100;
  height: 800px;
}

.card h2 {
  font-size: 60px;
}

.card p {
  font-size: 20px;
  white-space: normal;
  margin-bottom: -50px;
}

#intro {
  width: 200px;
  font-size: 15px;
  text-align: justify;
  margin: 10px auto;
  line-height: 2;
}

#nametag {
  font-size: 15px;
  margin-top: 20px;
  font-weight: 600;
  letter-spacing: 2px;
  font-family: 'Noto Serif JP', serif;
}

.c-img {
  background-image: url('/img/purple-flower.jpg');
  background-size: cover;
  background-position: center;
  height: 100%;
  width: 100%;
  overflow: hidden; /* Hide the overflow content */
  display: inline-block; /* Ensure block elements respect the width */
  position: relative; /* Ensure absolute positioning is relative to this container */
  transition: all ease 0.5s;
}

.c-img:hover {
  transform: scale(1.1);
  transition: transform 0.5s; /* Move transition property here for smoother animation */
  transform-origin: 0 0; /* Set transform origin to top left corner */
}

</style>
