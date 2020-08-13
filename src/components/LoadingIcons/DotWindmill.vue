<template>
  <div class="dot-windmill"></div>
</template>

<style lang="scss" scoped>
.dot-windmill {
  position: relative;
  top: -10px;
  width: 10px;
  height: 10px;
  border-radius: 5px;
  background-color: #3cefff;
  color: #3cefff;
  transform-origin: 5px 15px;
  animation: dotWindmill 2s infinite linear;

  &::before,
  &::after {
    content: '';
    display: inline-block;
    position: absolute;
  }

  &::before {
    left: -8.66px;
    top: 15px;
    width: 10px;
    height: 10px;
    border-radius: 5px;
    background-color: #3cefff;
    color: #3cefff;
  }

  &::after {
    left: 8.66px;
    top: 15px;
    width: 10px;
    height: 10px;
    border-radius: 5px;
    background-color: #3cefff;
    color: #3cefff;
  }
}

@keyframes dotWindmill {
  0% {
    transform: rotateZ(0deg) translate3d(0, 0, 0);
  }
  100% {
    transform: rotateZ(720deg) translate3d(0, 0, 0);
  }
}
</style>
