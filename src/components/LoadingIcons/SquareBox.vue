<template>
  <div class="square-box">
    <div class="panel"></div>
  </div>
</template>

<style lang="scss" scoped>
.square-box {
  perspective: 120px;

  .panel {
    width: 32px;
    height: 32px;
    background-color: #fc2f70;
    transform: rotate(0);
    animation: flip 1s infinite;
  }
}

@keyframes flip {
  50% {
    transform: rotateY(180deg);
  }
  100% {
    transform: rotateY(180deg) rotateX(180deg);
  }
}
</style>
