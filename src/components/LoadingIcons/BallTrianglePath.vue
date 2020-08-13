<template>
  <div class="ball-triangle-path">
    <div class="child"></div>
    <div class="child"></div>
    <div class="child"></div>
  </div>
</template>

<style lang="scss" scoped>
.ball-triangle-path {
  position: relative;
  -webkit-transform: translate(-29.99px, -37.51px);
  transform: translate(-29.99px, -37.51px);

  .child {
    position: absolute;
    width: 10px;
    height: 10px;
    border-radius: 100%;
    border: 1px solid #3cefff;

    &:nth-child(1) {
      top: 50px;
      animation: ball-triangle-path-1 2s 0s ease-in-out infinite;
    }
    &:nth-child(2) {
      left: 25px;
      animation: ball-triangle-path-2 2s 0s ease-in-out infinite;
    }
    &:nth-child(3) {
      top: 50px;
      left: 50px;
      animation: ball-triangle-path-3 2s 0s ease-in-out infinite;
    }
  }
}

@keyframes ball-triangle-path-1 {
  33% {
    transform: translate(25px, -50px);
  }
  66% {
    transform: translate(50px, 0);
  }
  100% {
    transform: translate(0, 0);
  }
}

@keyframes ball-triangle-path-2 {
  33% {
    transform: translate(25px, 50px);
  }
  66% {
    transform: translate(-25px, 50px);
  }
  100% {
    transform: translate(0, 0);
  }
}

@keyframes ball-triangle-path-3 {
  33% {
    transform: translate(-50px, 0);
  }
  66% {
    transform: translate(-25px, -50px);
  }
  100% {
    transform: translate(0, 0);
  }
}
</style>
