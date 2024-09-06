<template>
  <div class="abt-box">
    <div class="abt-one intro">
      <h2>Who Am I?</h2>
      <p>Woven—a blend of fear and love. Writer, designer, creative, innovator. A fusion of creativity and technology.</p><br>
      <p> I have been passionately developing web and software applications since 2020, honing my skills through both self-learning and formal training. My journey has been significantly shaped by the support and resources from institutions like ALX Africa and Techno Brain, where I've expanded my knowledge in key programming languages & frameworks, including: Python, React.js, Nuxt.js, C, HTML/CSS, JavaScript.</p>
    </div>
    <div class="abt-one intro2">
      <h2>Skillset & Experience</h2>
      <p>Some of my Tech-relevant Skills include: <br> <b>ं Digital Marketing, ं Visual Design, ं UI/UX design, ं Fullstack Web Development, ं Software Engineering</b></p>
      <br>
      <p>I've also collaboratively worked on relevant development projects with peers throughout my learning experience at ALX, where I devoted 1-year to the study of Software Engineering and honed my skills as a developer</p>
      </div>
    <div class="abt-one intro3">
      <h2>My Works</h2>
      <p>Enough about me 😅, Here's some of the projects I've worked on!</p><br>
      <a href="https://github.com/johnlivingprooff?tab=repositories">github/johnlivingprooff</a> &nbsp;|&nbsp;
      <nuxt-link to="/projects">Live Projects</nuxt-link>
      <br><br><p>
        Looking ahead, I aim to specialize in AI-driven development and play a part in innovative projects that push the boundaries of what's possible in tech. I am also passionate about contributing to open-source communities.
      </p>
    </div>
  </div>
  <br><br><br>
</template>

<script>

</script>

<style scoped>
.abt-box {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    width: 100%;
    padding: 50px;
}
.abt-one {
    background: transparent;
    backdrop-filter: blur(10px);
    padding: 15px;
    width: calc(33.33% - 30px);
    margin: 15px;
    border: 1px solid white;
    border-radius: 5px;
}

.intro {
  font-family: 'Raleway', sans-serif;
  text-align: left;
  padding: 35px;
  height: fit-content;
  transition: all 0.3s ease-in-out;
  p {
    text-align: justify;
  }
}

.intro h2 {
  font-size: 1.5em;
  margin-bottom: 25px;
}

.intro:hover {
  background: 
    linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), /* Overlay with transparency */
    url('../assets/imgs/exp.jpg'); /* Background image */
  background-position: center;
  background-size: cover;
  transform: translateY(-10px);
}

.intro2 {
  font-family: 'Raleway', sans-serif;
  text-align: center;
  height: fit-content;
  padding: 35px;
  transition: all 0.3s ease-in-out;
}

.intro2 h2 {
  font-size: 1.5em;
  margin-bottom: 25px;
}

.intro2 p {
  text-align: justify;
}

.intro2:hover {
  background: 
    linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), /* Overlay with transparency */
    url('../assets/imgs/about.jpg'); /* Background image */
  background-position: center;
  background-size: cover;
  transform: translateY(-10px);
}

.intro2 {
  font-family: 'Raleway', sans-serif;
  text-align: center;
  height: fit-content;
  padding: 35px;
  transition: all 0.3s ease-in-out;
}

.intro3 {
  font-family: 'Raleway', sans-serif;
  text-align: center;
  height: fit-content;
  padding: 35px;
  transition: all 0.3s ease-in-out;
}

.intro3 h2 {
  font-size: 1.5em;
  margin-bottom: 25px;
}

.intro3 p {
  text-align: justify;
}

.intro3:hover {
  background: 
    linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), /* Overlay with transparency */
    url('../assets/imgs/glow-shine.png'); /* Background image */
  background-position: center;
  background-size: cover;
  transform: translateY(-10px);
}

.intro3 a:hover {
  text-decoration: underline;
}

/* mobile view */
@media (max-width: 768px) {
  .abt-box {
    width: 100%;
  }
  .abt-one {
    width: 100%;
  }
}

</style>