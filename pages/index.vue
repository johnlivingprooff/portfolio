<template>
    <div class="container">
        <div class="main-c">
            <span class="comp-one"><img src="../assets/imgs/logo.png" alt="#johnlivingprooff" id="logo">
            <Welcome /></span>
            <about />
            <work />
        </div>
    </div>
</template>

<style>
.container {
    display: flex;
    justify-content: center;
    position: absolute;
    width: 100%;
}
#logo {
    width: 300px;
    padding: 50px;
    align-self: center;
}

.main-c {
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
}

.comp-one {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height: 100vh;
    width: 100%;
}
</style>
