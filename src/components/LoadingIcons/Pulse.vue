<template>
  <div class="pulse"></div>
</template>

<style lang="scss" scoped>
.pulse {
  display: flex;
  width: 56px;
  height: 56px;
  border: 3px solid transparent;
  border-top-color: #3cefff;
  border-bottom-color: #3cefff;
  border-radius: 50%;
  animation: pulse-spin 1.5s linear infinite;

  &::before {
    content: '';
    display: block;
    margin: auto;
    width: 12px;
    height: 12px;
    border: 3px solid #3cefff;
    border-radius: 50%;
    animation: pulse 1s alternate ease-in-out infinite;
  }
}

@keyframes pulse-spin {
  to {
    transform: rotate(360deg);
  }
}

@keyframes pulse {
  from {
    transform: scale(0.5);
  }
  to {
    transform: scale(1);
  }
}
</style>
