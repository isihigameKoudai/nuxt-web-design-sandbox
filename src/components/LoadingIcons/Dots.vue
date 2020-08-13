<template>
  <div class="dots">
    <div class="dots-child"></div>
    <div class="dots-child"></div>
    <div class="dots-child"></div>
  </div>
</template>

<style lang="scss" scoped>
.dots {
  width: 56px;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: space-between;

  .dots-child {
    width: 13px;
    height: 13px;
    border-radius: 50%;
    background-color: #fc2f70;
    animation: fade 0.8s ease-in-out alternate infinite;

    &:nth-of-type(1) {
      animation-delay: -0.4s;
    }

    &:nth-of-type(2) {
      animation-delay: -0.2s;
    }
  }
}

@keyframes fade {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
</style>
