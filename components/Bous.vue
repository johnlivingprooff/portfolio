<template>
  <div class="container">
    <div class="bous">
      <h1>bous</h1>
      <p>/βοῦς/</p>
    </div>
    <div class="line">
      <span>
        <h2>2020</h2>
        <i>Holding Lamps for a Distrought generation</i>
      </span>
      <span>
        <h2>2020</h2>
        <i>Holding Lamps for a Distrought generation</i>
      </span>
      <span>
        <h2>2020</h2>
        <i>Holding Lamps for a Distrought generation</i>
      </span>
      <span>
        <h2>2020</h2>
        <i>Holding Lamps for a Distrought generation</i>
      </span>     
      <br><br><br>
      
    </div>
  </div>
</template>

<script lang="ts" setup>

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
    /* display: flex; */

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
</style>