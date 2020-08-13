<template>
  <div class="square-dots">
    <div class="square-dots-child"></div>
    <div class="square-dots-child"></div>
    <div class="square-dots-child"></div>
    <div class="square-dots-child"></div>
    <div class="square-dots-child"></div>
    <div class="square-dots-child"></div>
    <div class="square-dots-child"></div>
    <div class="square-dots-child"></div>
    <div class="square-dots-child"></div>
  </div>
</template>

<style lang="scss" scoped>
.square-dots {
  width: 48px;
  height: 48px;
  display: grid;
  grid-template-rows: repeat(3, 1fr);
  grid-template-columns: repeat(3, 1fr);
  justify-items: center;
  align-items: center;

  .square-dots-child {
    width: 8px;
    height: 8px;
    background-color: #3cefff;
    border-radius: 50%;
    animation: square-fade 1.5s alternate ease-in-out infinite;

    &:nth-of-type(2),
    &:nth-of-type(4) {
      animation-delay: 0.25s;
    }

    &:nth-of-type(3),
    &:nth-of-type(5),
    &:nth-of-type(7) {
      animation-delay: 0.5s;
    }

    &:nth-of-type(6),
    &:nth-of-type(8) {
      animation-delay: 0.75s;
    }

    &:nth-of-type(9) {
      animation-delay: 1s;
    }
  }
}

@keyframes square-fade {
  to {
    opacity: 0.2;
  }
}
</style>
