<template>
  <div class="wave-bar">
    <span class="wave-bar-child"></span>
    <span class="wave-bar-child"></span>
    <span class="wave-bar-child"></span>
    <span class="wave-bar-child"></span>
  </div>
</template>

<style lang="scss" scoped>
.wave-bar {
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: space-between;
  width: 32px;

  .wave-bar-child {
    width: 5px;
    height: 16px;
    background-color: #3cefff;

    &:nth-of-type(1) {
      animation: wave-grow 1s -0.45s ease-in-out infinite;
    }

    &:nth-of-type(2) {
      animation: wave-grow 1s -0.3s ease-in-out infinite;
    }

    &:nth-of-type(3) {
      animation: wave-grow 1s -0.15s ease-in-out infinite;
    }

    &:nth-of-type(4) {
      animation: wave-grow 1s ease-in-out infinite;
    }
  }
}

@keyframes wave-grow {
  0%,
  100% {
    transform: scaleY(1);
  }

  50% {
    transform: scaleY(2);
  }
}
</style>
