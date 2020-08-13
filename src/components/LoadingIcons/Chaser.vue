<template>
  <div class="chaser">
    <div class="chaser-dot"></div>
    <div class="chaser-dot"></div>
    <div class="chaser-dot"></div>
    <div class="chaser-dot"></div>
    <div class="chaser-dot"></div>
    <div class="chaser-dot"></div>
  </div>
</template>

<style lang="scss" scoped>
.chaser {
  width: 40px;
  height: 40px;
  position: relative;
  animation: chase 2.5s infinite linear both;
}

.chaser-dot {
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  animation: chase-dots 2s infinite ease-in-out both;
  &::before {
    content: '';
    display: block;
    width: 25%;
    height: 25%;
    background-color: #3cefff;
    border-radius: 100%;
    animation: chaser-dot-before 2s infinite ease-in-out both;
  }

  &:nth-child(1) {
    animation-delay: -1.1s;
    &::before {
      animation-delay: -1.1s;
    }
  }
  &:nth-child(2) {
    animation-delay: -1s;
    &::before {
      animation-delay: -1s;
    }
  }
  &:nth-child(3) {
    animation-delay: -0.9s;
    &::before {
      animation-delay: -0.9s;
    }
  }
  &:nth-child(4) {
    animation-delay: -0.8s;
    &::before {
      animation-delay: -0.8s;
    }
  }
  &:nth-child(5) {
    animation-delay: -0.7s;
    &::before {
      animation-delay: -0.7s;
    }
  }
  &:nth-child(6) {
    animation-delay: -0.6s;
    &::before {
      animation-delay: -0.6s;
    }
  }
}

@keyframes chase {
  100% {
    transform: rotate(360deg);
  }
}

@keyframes chase-dots {
  80%,
  100% {
    transform: rotate(360deg);
  }
}

@keyframes chaser-dot-before {
  50% {
    transform: scale(0.4);
  }
  100%,
  0% {
    transform: scale(1);
  }
}
</style>
