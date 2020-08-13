<template>
  <div class="list-item">
    <slot />
  </div>
</template>

<style scoped>
.list-item {
  width: 200px;
  height: 200px;
  margin-top: 6px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #1b1e48;
}
</style>
