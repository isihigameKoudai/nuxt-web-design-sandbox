<template>
  <div class="cube-grid">
    <div class="cube-grid__cube cube1"></div>
    <div class="cube-grid__cube cube2"></div>
    <div class="cube-grid__cube cube3"></div>
    <div class="cube-grid__cube cube4"></div>
    <div class="cube-grid__cube cube5"></div>
    <div class="cube-grid__cube cube6"></div>
    <div class="cube-grid__cube cube7"></div>
    <div class="cube-grid__cube cube8"></div>
    <div class="cube-grid__cube cube9"></div>
  </div>
</template>

<style lang="scss" scoped>
.cube-grid {
  width: 40px;
  height: 40px;
  margin: 100px auto;
}

.cube-grid__cube {
  width: 33%;
  height: 33%;
  background-color: #3cefff;
  float: left;
  -webkit-animation: cube-grid-scale-delay 1.3s infinite ease-in-out;
  animation: cube-grid-scale-delay 1.3s infinite ease-in-out;
}

.cube-grid__cube.cube1 {
  -webkit-animation-delay: 0.2s;
  animation-delay: 0.2s;
}
.cube-grid__cube.cube2 {
  -webkit-animation-delay: 0.3s;
  animation-delay: 0.3s;
}
.cube-grid__cube.cube3 {
  -webkit-animation-delay: 0.4s;
  animation-delay: 0.4s;
}
.cube-grid__cube.cube4 {
  -webkit-animation-delay: 0.1s;
  animation-delay: 0.1s;
}
.cube-grid__cube.cube5 {
  -webkit-animation-delay: 0.2s;
  animation-delay: 0.2s;
}
.cube-grid__cube.cube6 {
  -webkit-animation-delay: 0.3s;
  animation-delay: 0.3s;
}
.cube-grid__cube.cube7 {
  -webkit-animation-delay: 0s;
  animation-delay: 0s;
}
.cube-grid__cube.cube8 {
  -webkit-animation-delay: 0.1s;
  animation-delay: 0.1s;
}
.cube-grid__cube.cube9 {
  -webkit-animation-delay: 0.2s;
  animation-delay: 0.2s;
}

@-webkit-keyframes cube-grid-scale-delay {
  0%,
  70%,
  100% {
    -webkit-transform: scale3d(1, 1, 1);
    transform: scale3d(1, 1, 1);
  }
  35% {
    -webkit-transform: scale3d(0, 0, 1);
    transform: scale3d(0, 0, 1);
  }
}

@keyframes cube-grid-scale-delay {
  0%,
  70%,
  100% {
    -webkit-transform: scale3d(1, 1, 1);
    transform: scale3d(1, 1, 1);
  }
  35% {
    -webkit-transform: scale3d(0, 0, 1);
    transform: scale3d(0, 0, 1);
  }
}
</style>
