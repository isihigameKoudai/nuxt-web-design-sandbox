<template>
  <div class="ring-box">
    <div class="ring"></div>
  </div>
</template>

<style lang="scss" scoped>
.ring-box {
  perspective: 120px;
}

.ring {
  width: 36px;
  height: 36px;
  border-radius: 50%;
  border: 4px solid #3cefff;
  animation: spin 1.5s ease-in-out infinite;
}

@keyframes spin {
  to {
    transform: rotateY(540deg);
  }
}
</style>
