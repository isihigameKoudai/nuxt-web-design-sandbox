<template>
  <svg class="turn-circle" viewBox="25 25 50 50">
    <circle class="inner-circle" cx="50" cy="50" r="20"></circle>
  </svg>
</template>

<style lang="scss" scoped>
.turn-circle {
  width: 60px;
  transform-origin: center;
  animation: turn-circle-rotate 2s linear infinite;

  .inner-circle {
    fill: none;
    stroke: #fc2f70;
    stroke-width: 2;
    stroke-dasharray: 1, 200;
    stroke-dashoffset: 0;
    stroke-linecap: round;
    animation: turn-circle-dash 1.5s ease-in-out infinite;
  }
}

@keyframes turn-circle-rotate {
  100% {
    transform: rotate(360deg);
  }
}

@keyframes turn-circle-dash {
  0% {
    stroke-dasharray: 1, 200;
    stroke-dashoffset: 0;
  }
  50% {
    stroke-dasharray: 90, 200;
    stroke-dashoffset: -35px;
  }
  100% {
    stroke-dashoffset: -125px;
  }
}
</style>
