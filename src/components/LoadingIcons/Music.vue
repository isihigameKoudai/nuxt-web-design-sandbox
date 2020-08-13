<template>
  <div class="music">
    <span class="music-child"></span>
    <span class="music-child"></span>
    <span class="music-child"></span>
    <span class="music-child"></span>
  </div>
</template>

<style lang="scss" scoped>
.music {
  display: flex;
  flex-flow: row nowrap;
  align-items: flex-end;
  justify-content: space-between;
  width: 36px;
  height: 36px;

  .music-child {
    width: 4.8px;
    height: 16px;
    background-color: #fc2f70;
    transform-origin: bottom;

    &:nth-of-type(1) {
      animation: music-grow 2s ease-in-out infinite;
    }

    &:nth-of-type(2) {
      animation: music-grow 1.3s -0.5s ease-in-out infinite;
    }

    &:nth-of-type(3) {
      animation: music-grow 1.4s -0.7s ease-in-out infinite;
    }

    &:nth-of-type(4) {
      animation: music-grow 1s ease-in-out infinite;
    }
  }
}

@keyframes music-grow {
  0%,
  100% {
    transform: scaleY(0.7);
  }

  50% {
    transform: scaleY(2);
  }
}
</style>
