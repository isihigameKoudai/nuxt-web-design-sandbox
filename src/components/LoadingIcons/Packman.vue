<template>
  <div class="pacman">
    <div class="child mouse"></div>
    <div class="child mouse"></div>
    <div class="child food"></div>
    <div class="child food"></div>
    <div class="child food"></div>
    <!-- <div class="child food"></div> -->
  </div>
</template>

<style lang="scss" scoped>
.pacman {
  position: relative;
  .child {
    width: 10px;
    height: 10px;
    position: absolute;
    transform: translate(0, 6.25px);

    &.mouse:first-of-type {
      width: 0;
      height: 0;
      border-right: 25px solid transparent;
      border-top: 25px solid #3cefff;
      border-left: 25px solid #3cefff;
      border-bottom: 25px solid #3cefff;
      border-radius: 25px;
      animation: packman_half_up 0.5s 0s infinite;
      position: relative;
      left: -50px;
    }

    &.mouse:nth-child(2) {
      width: 0;
      height: 0;
      border-right: 25px solid transparent;
      border-top: 25px solid #3cefff;
      border-left: 25px solid #3cefff;
      border-bottom: 25px solid #3cefff;
      border-radius: 25px;
      animation: packman_half_down 0.5s 0s infinite;
      margin-top: -50px;
      position: relative;
      left: -50px;
    }

    &.food {
      width: 10px;
      height: 10px;
      position: absolute;
      transform: translate(0, -7px);
      top: 25px;
      left: 70px;
      background: #3cefff;

      &:nth-child(3) {
        animation: foods 1s 0s infinite linear;
      }

      &:nth-child(4) {
        animation: foods 1s 1.33s infinite linear;
      }

      &:nth-child(5) {
        animation: foods 1s 1.66s infinite linear;
      }
    }
  }
}

@keyframes packman_half_up {
  0% {
    transform: rotate(270deg);
  }
  50% {
    transform: rotate(360deg);
  }
  100% {
    transform: rotate(270deg);
  }
}

@keyframes packman_half_down {
  0% {
    transform: rotate(90deg);
  }
  50% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(90deg);
  }
}

@keyframes foods {
  75% {
    opacity: 0.7;
  }
  100% {
    transform: translate(-100px, -6.25px);
  }
}
</style>
