<template>
  <svg class="planet" viewBox="0 0 50 50">
    <circle class="planet-ring" cx="25" cy="25" r="20"></circle>
    <circle class="planet-ball" cx="25" cy="5" r="3.5"></circle>
  </svg>
</template>

<style lang="scss" scoped>
.planet {
  width: 60px;
  animation: 1.5s planet-spin ease infinite;

  .planet-ring {
    fill: none;
    stroke: hsla(341, 97%, 59%, 0.3);
    stroke-width: 2;
  }

  .planet-ball {
    fill: #fc2f70;
    stroke: none;
  }
}

@keyframes planet-spin {
  to {
    transform: rotate(360deg);
  }
}
</style>
