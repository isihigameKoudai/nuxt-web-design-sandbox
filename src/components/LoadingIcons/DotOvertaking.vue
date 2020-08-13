<template>
  <div class="dot-overtaking"></div>
</template>

<style lang="scss" scoped>
.dot-overtaking {
  position: relative;
  width: 12px;
  height: 12px;
  border-radius: 6px;
  background-color: transparent;
  color: #3cefff;
  margin: -1px 0;
  box-shadow: 0 -20px 0 0;
  animation: dotOvertaking 2s infinite cubic-bezier(0.2, 0.6, 0.8, 0.2);

  &::before,
  &::after {
    content: '';
    display: inline-block;
    position: absolute;
    top: 0;
    left: 0;
    width: 12px;
    height: 12px;
    border-radius: 6px;
    background-color: transparent;
    color: #3cefff;
    box-shadow: #3cefff -20px 0 0;
  }

  &::before {
    animation: dotOvertaking 2s infinite cubic-bezier(0.2, 0.6, 0.8, 0.2);
    animation-delay: 0.3s;
  }

  &::after {
    animation: dotOvertaking 1.5s infinite cubic-bezier(0.2, 0.6, 0.8, 0.2);
    animation-delay: 0.6s;
  }
}

@keyframes dotOvertaking {
  0% {
    transform: rotateZ(0deg);
  }
  100% {
    transform: rotateZ(360deg);
  }
}
</style>
