<template>
  <div class="bubble-scale"></div>
</template>

<style lang="scss" scoped>
.bubble-scale {
  height: 60px;
  width: 60px;
  -webkit-animation: ball-scale 1s 0s ease-in-out infinite;
  animation: ball-scale 1s 0s ease-in-out infinite;
  background-color: #ff1d5e;
  border-radius: 100%;
  margin: 2px;
}

@keyframes ball-scale {
  0% {
    transform: scale(0);
  }
  100% {
    transform: scale(1);
    opacity: 0;
  }
}
</style>
