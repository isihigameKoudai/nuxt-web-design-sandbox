<template>
  <div class="bounth-dots">
    <div class="dot"></div>
    <div class="dot"></div>
    <div class="dot"></div>
  </div>
</template>

<style lang="scss" scoped>
.bounth-dots {
  width: 56px;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: space-between;

  .dot {
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background-color: #fc2f70;
    transform: translateY(-100%);
    animation: wave 0.8s ease-in-out alternate infinite;

    &:nth-of-type(1) {
      animation-delay: -0.4s;
    }

    &:nth-of-type(2) {
      animation-delay: -0.2s;
    }
  }
}

@keyframes wave {
  from {
    transform: translateY(-100%);
  }
  to {
    transform: translateY(100%);
  }
}
</style>
