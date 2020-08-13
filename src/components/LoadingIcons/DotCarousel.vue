<template>
  <div class="dot-carousel"></div>
</template>

<style lang="scss" scoped>
.dot-carousel {
  position: relative;
  left: -9999px;
  width: 10px;
  height: 10px;
  border-radius: 5px;
  background-color: #3cefff;
  color: #3cefff;
  box-shadow: 9984px 0 0 0 #3cefff, 9999px 0 0 0 #3cefff, 10014px 0 0 0 #3cefff;
  animation: dotCarousel 1.5s infinite linear;
}

@keyframes dotCarousel {
  0% {
    box-shadow: 9984px 0 0 -1px #3cefff, 9999px 0 0 1px #3cefff,
      10014px 0 0 -1px #3cefff;
  }
  50% {
    box-shadow: 10014px 0 0 -1px #3cefff, 9984px 0 0 -1px #3cefff,
      9999px 0 0 1px #3cefff;
  }
  100% {
    box-shadow: 9999px 0 0 1px #3cefff, 10014px 0 0 -1px #3cefff,
      9984px 0 0 -1px #3cefff;
  }
}
</style>
