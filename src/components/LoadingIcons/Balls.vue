<template>
  <div class="balls">
    <div class="balls-child"></div>
    <div class="balls-child"></div>
    <div class="balls-child"></div>
  </div>
</template>

<style lang="scss" scoped>
.balls {
  width: 60px;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: space-between;

  .balls-child {
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background-color: #fc2f70;

    &:nth-of-type(1) {
      transform: translateX(-100%);
      animation: left-swing 0.5s ease-in alternate infinite;
    }

    &:nth-of-type(3) {
      transform: translateX(-95%);
      animation: right-swing 0.5s ease-out alternate infinite;
    }
  }
}

@keyframes left-swing {
  50%,
  100% {
    transform: translateX(95%);
  }
}

@keyframes right-swing {
  50% {
    transform: translateX(-95%);
  }
  100% {
    transform: translateX(100%);
  }
}
</style>
