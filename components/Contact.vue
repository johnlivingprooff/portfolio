<template>
  <div class="footr">
    <div class="socials">
      <a href="https://github.com/johnlivingprooff" target="_blank"
        <img src="../public/img/socials/github.webp" alt="github profile">
      </a>
      <a href="https://twitter.com/ola0luwajj" target="_blank"
        <img src="../public/img/socials/twitter.png" alt="twitter (X)">
      </a>
      <a href="https://instagram.com/johnlivingprooff" target="_blank"
        <img src="../public/img/socials/insta.png" alt="instagram profile">
      </a>
      <a href="https://wa.me/265996554837" target="_blank"
        <img src="../public/img/socials/wa-icon.png" alt="whatsapp">
      </a>
      <a href="https://www.linkedin.com/in/johnlivingprooff/" target="_blank"
        <img src="../public/img/socials/linkedin.png" alt="linkedin">
      </a>
      <a href="mailto:johnlivingprooff@gmail.com">
        <img src="../public/img/socials/email.png" alt="">
      </a>
    </div>
    <hr width="1" color="transparent">
    <div class="copyright">
      <p>&copy; 2024 <NuxtLink to="/">John-Livingproof Fowowe</NuxtLink></p>
    </div>
  </div>
</template>

<style>
.footr {
  display: flex;
  flex-direction: row;
  /* justify-content: center; */
  align-items: top;
}

.footr hr {
  border-color: transparent;
}
.socials {
  display: flex;
  padding: 20px 50px 0 50px;
  margin-left: 60px;
}

.socials img {
  width: 30px;
  height: 30px;
  margin: 10px;
  border-radius: 50%;
  transition: transform 0.5s; /* Moved the transition property to apply only to transform */
  filter: invert(1);
}

.socials img:hover {
  transform: translateY(-5px) scale(1.1); /* Move the image 5px up and slightly increase scale */
}

.copyright {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px 50px 0 50px;
  color: rgb(180, 179, 179);
  font-family: 'Courier New', Courier, monospace;
  a {
    text-decoration: none;
    color: rgb(180, 179, 179);
  }
}

.copyright a:hover {
  text-decoration: underline;
}
</style>