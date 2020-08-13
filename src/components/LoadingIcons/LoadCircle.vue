<template>
  <div class="load-circle"></div>
</template>

<style lang="scss" scoped>
.load-circle {
  border: 3px solid hsla(185, 100%, 62%, 0.2);
  border-top-color: #3cefff;
  border-radius: 50%;
  width: 48px;
  height: 48px;
  animation: load-circle-spin 1s linear infinite;
}

@keyframes load-circle-spin {
  to {
    transform: rotate(360deg);
  }
}
</style>
