<template>
  <div>
    <div class="container" ref="container">
      <div>
        <Icon />
        <span class="wel fade-l">
          <h2 :style="{ fontSize: fontSize + 'px' }">{{ welcomeText }}</h2>
          <p>- to bous -<br><br>&darr;</p>
        </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      originalFontSize: 10, // Original font size
      maxFontSize: 80, // Maximum font size when scrolling up
      fontSize: 10, // Initial font size
      welcomeText: "Welcome", // Initial welcome text
      scrollingDirection: null, // Track scrolling direction: 'up', 'down', or null
      scrollEnabled: false, // Track whether default scroll behavior is enabled
      animationFinished: false // Track whether initial animation has finished
    };
  },
  mounted() {
    const element = this.$el.querySelector('.fade-l');
    element.style.transform = 'translateX(0)';
    element.style.opacity = '1';
    // Start the animation
    this.animateFontSize();
  },
  methods: {
    animateFontSize() {
      // Animate font size increase from original to max size
      const intervalId = setInterval(() => {
        if (this.fontSize < this.maxFontSize) {
          this.fontSize += 5;
        } else {
          clearInterval(intervalId);
          // Once animation finishes, change welcome text
          this.changeWelcomeText();
        }
      }, 50); // Adjust interval as needed for smoother animation
    },
    changeWelcomeText() {
      // You can replace this with an API call to get translations
      // For now, just change the welcome text to different languages
      const languages = [
        "Welcome", // English
        "Kaabo", // Yoruba
        "Karibu", // Swahili
        "Akwaaba", // Akan
        "Talofa", // Samoan
        "Ongi etorri", // Basque
        "Barka da zuwa", // Hausa
        "Murakaza neza", // Kirundi
        "Molweni", // Xhosa
        "Bem-vindo", // Portuguese
        "Fáilte", // Irish
        "Mauya", // Shona
        "Dobrodošli", // Slovenian
        "Soo dhawow", // Somali
        "Kuwakaribisha", // Swahili (alternate)
        "Bienvenue", // French
        "Amari", // Berber
        "Ngiyakhwathaza", // Zulu
        "Yîb griñ", // Wolof
        "Tukulor", // Tukulor
        "Kalos ilthate", // Greek
        "Välkommen", // Swedish
        "Céad míle fáilte", // Irish (alternate)
        "مرحبا", // Arabic (Marhaban)
        "Isten hozott", // Hungarian
        "أهلاً وسهلاً", // Arabic (Ahlan wa Sahlan)
        "Bienvenidos", // Spanish
        "Sawubona", // Zulu
        "Benvinguts", // Catalan
        "Hoezit", // Afrikaans
        "Fàilte", // Scottish Gaelic
        "Ia orana", // Tahitian
        "Kushe", // Amharic
        "Siyakwamukela", // Zulu (alternate)
        "Marhabaan", // Arabic (alternate)
        "Mauya", // Shona (alternate)
        "Willkommen", // German
        "Molweni", // Xhosa (alternate)
        "Yá'át'ééh", // Navajo
        "Welkom", // Dutch
        "Mauya", // Shona (alternate)
        "Ongi etorri", // Basque (alternate)
        "Molweni", // Xhosa (alternate)
        "Kaabo", // Yoruba (alternate)
        "Soo dhawow", // Somali (alternate)
        "Karibu", // Swahili (alternate)
        "Amari", // Berber (alternate)
        "Akwaaba", // Akan (alternate)
        "Barka da zuwa", // Hausa (alternate)
        "Murakaza neza", // Kirundi (alternate)
        "Bem-vindo", // Portuguese (alternate)
        "Fáilte", // Irish (alternate)
        "Tervetuloa", // Finnish
        "Mauya", // Shona (alternate)
        "Yîb griñ", // Wolof (alternate)
        "Sawubona", // Zulu (alternate)
        "Välkommen", // Swedish (alternate)
        "Hoezit", // Afrikaans (alternate)
        "مرحبا", // Arabic (Marhaban) (alternate)
        "Isten hozott", // Hungarian (alternate)
        "Céad míle fáilte", // Irish (alternate)
        "Kushe", // Amharic (alternate)
        "Molweni", // Xhosa (alternate)
        "Marhabaan", // Arabic (alternate)
        "Willkommen", // German (alternate)
        "Ongi etorri", // Basque (alternate)
        "Kaabo", // Yoruba (alternate)
        "Karibu", // Swahili (alternate)
        "Bem-vindo", // Portuguese (alternate)
        "Barka da zuwa", // Hausa (alternate)
        "Molweni", // Xhosa (alternate)
        "Soo dhawow", // Somali (alternate)
        "Akwaaba", // Akan (alternate)
        "Murakaza neza", // Kirundi (alternate)
        "Fáilte", // Irish (alternate)
        "Yîb griñ", // Wolof (alternate)
        "Välkommen", // Swedish (alternate)
        "Amari", // Berber (alternate)
        "Mauya", // Shona (alternate)
        "Sawubona", // Zulu (alternate)
        "Hoezit", // Afrikaans (alternate)
        "Talofa", // Samoan (alternate)
        "مرحبا", // Arabic (Marhaban) (alternate)
        "Welcome", // English
      ];

      let currentIndex = 1; // Start from the second language
      const intervalId = setInterval(() => {
        if (currentIndex < languages.length) {
          this.welcomeText = languages[currentIndex];
          currentIndex++;
        } else {
          clearInterval(intervalId);
          this.animationFinished = true; // Animation finished
        }
      }, 700); // Change text every 0.7 seconds, adjust as needed
    }
  }
}
</script>

<style scoped>

.wel {
    text-align: center;
    /* display: flex; */
}

.wel h2 {
    color: white;
    font-family: 'Ojuju', cursive;
    margin: 90px auto;
    text-shadow: 50px 5px 100px #000000;
    font-weight: 550;
    text-transform: uppercase;
    letter-spacing: 10px;
}

.wel p {
  font-size: 20px;
  color: #fff;
  font-family: 'Inter', sans-serif;
  font-weight: 100;
  letter-spacing: 1.5px;
}

.container {
    background-color: #000000;
    background-color: #0f0f0f;
    background-image: url('/img/stars.jpg');
    background-repeat: repeat;
    background-size: contain;
    height: 100vh;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}

.fade-l {
    transform: translateX(5%);
    opacity: 0;
    overflow: hidden;
    transition: transform 1s ease, opacity 1s ease;
}
</style>
