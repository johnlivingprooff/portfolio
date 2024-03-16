<template>
  <div>
    <div class="container" ref="container" @wheel="handleScroll">
      <div>
        <Icon />
        <span class="wel fade-l">
          <h2 :style="{ fontSize: fontSize + 'px' }">Welcome</h2>
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
      maxFontSize: 250, // Maximum font size when scrolling up
      fontSize: 10, // Initial font size
      scrollingDirection: null, // Track scrolling direction: 'up', 'down', or null
      scrollEnabled: false // Track whether default scroll behavior is enabled
    };
  },
  mounted() {
    const element = this.$el.querySelector('.fade-l');
    element.style.transform = 'translateX(0)';
    element.style.opacity = '1';
  },
  methods: {
    handleScroll(event) {
      // Get the direction of scroll: 'up' or 'down'
      const direction = event.deltaY < 0 ? 'up' : 'down';

      // Update font size based on scrolling direction
      if (direction === 'down' && this.fontSize < this.maxFontSize) {
        // Increase font size when scrolling down
        this.fontSize += 2;
        if (this.fontSize >= this.maxFontSize) {
          // Enable default scroll behavior when font size reaches max
          this.scrollEnabled = true;
        }
        if (!this.scrollEnabled) {
          // Prevent default scroll behavior until font size reaches max
          event.preventDefault();
        }
      } else if (direction === 'up' && this.fontSize > this.originalFontSize) {
        // Decrease font size when scrolling up
        this.fontSize -= 2;
        event.preventDefault(); // Prevent default scrolling behavior
      }
    }
  }
}
</script>

<style scoped>

.wel {
    text-align: center;
    display: flex;
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

.container {
    background-color: #000000;
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
