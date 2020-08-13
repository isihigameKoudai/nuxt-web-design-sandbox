<template>
  <div class="atom-spinner">
    <div class="spinner-inner">
      <div class="spinner-line"></div>
      <div class="spinner-line"></div>
      <div class="spinner-line"></div>
      <!--Chrome renders little circles malformed :(-->
      <div class="spinner-circle">
        &#9679;
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.atom-spinner {
  height: 60px;
  width: 60px;
  overflow: hidden;

  .spinner-inner {
    position: relative;
    display: block;
    height: 100%;
    width: 100%;

    .spinner-line {
      position: absolute;
      width: 100%;
      height: 100%;
      border-radius: 50%;
      animation-duration: 1s;
      border-left-width: calc(60px / 25);
      border-top-width: calc(60px / 25);
      border-left-color: #ff1d5e;
      border-left-style: solid;
      border-top-style: solid;
      border-top-color: transparent;

      &:nth-child(1) {
        animation: spinner1 1s linear infinite;
        transform: rotateZ(120deg) rotateX(66deg) rotateZ(0deg);
      }
      &:nth-child(2) {
        animation: spinner2 1s linear infinite;
        transform: rotateZ(240deg) rotateX(66deg) rotateZ(0deg);
      }
      &:nth-child(3) {
        animation: spinner3 1s linear infinite;
        transform: rotateZ(360deg) rotateX(66deg) rotateZ(0deg);
      }
    }
  }

  .spinner-circle {
    display: block;
    position: absolute;
    color: #ff1d5e;
    font-size: calc(60px * 0.24);
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
}

@keyframes spinner1 {
  100% {
    transform: rotateZ(120deg) rotateX(66deg) rotateZ(360deg);
  }
}

@keyframes spinner2 {
  100% {
    transform: rotateZ(240deg) rotateX(66deg) rotateZ(360deg);
  }
}

@keyframes spinner3 {
  100% {
    transform: rotateZ(360deg) rotateX(66deg) rotateZ(360deg);
  }
}
</style>
