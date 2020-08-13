<template>
  <div class="loader">
    <div class="outer"></div>
    <div class="middle"></div>
    <div class="inner"></div>
  </div>
</template>

<style lang="scss" scoped>
.loader {
  position: relative;

  .outer,
  .middle,
  .inner {
    border: 3px solid transparent;
    border-top-color: #3cefff;
    border-right-color: #3cefff;
    border-radius: 50%;
    position: absolute;
    top: 50%;
    left: 50%;
  }

  .outer {
    width: 56px;
    height: 56px;
    margin-left: -28px;
    margin-top: -28px;
    animation: spin 2s linear infinite;
  }

  .middle {
    width: 36px;
    height: 36px;
    margin-left: -18px;
    margin-top: -18px;
    animation: spin 1.75s linear reverse infinite;
  }

  .inner {
    width: 13px;
    height: 13px;
    margin-left: -6.5px;
    margin-top: -6.5px;
    animation: spin 1.5s linear infinite;
  }
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}
</style>
