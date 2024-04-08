<template>
    <div class="containr">
      <NavBar2 />
      <br><br><br><br>
      <Icon />
      <br><br>
      <div class="cards">
        <h2>Some of My WWW's</h2>
        <br>
        <ProjectCard />
        <h2>Bye</h2>
      </div>
      <br><br><br><br>
      <Line />
      <Contact id="contact" />
    </div>
  </template>
  
  <script>
  
  </script>
  
  <style>
  body {
    margin: 0;
    padding: 0;
    background-image: url('../public/img/slider/1.jpg');
    background-repeat: repeat;
    /* background-size: cover; */
    font-family: sans-serif;
    background-position: center;
  }

  .containr {
    width: 100%;
    height: 100vh;

    justify-content: center;
    align-items: center;
  }

  .cards h2 {
    color: white;
    text-align: center;
    padding-top: 20px;
    font-size: 2.5em;
    font-family: 'Lalezar', cursive;
  }

  </style>