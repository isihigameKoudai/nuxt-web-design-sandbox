<template>
  <div class="microintaraction-page">
    <article class="wrap">
      <section>
        <LoadingContainer>
          <WaveBar />
        </LoadingContainer>
      </section>
    </article>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'

import LoadingContainer from '@/components/LoadingContainer'
import WaveBar from '@/components/LoadingIcons/WaveBar'

export default defineComponent({
  components: {
    LoadingContainer,
    WaveBar,
  },
})
</script>

<style lang="scss" scoped>
.microintaraction-page {
  animation: bg-color 5s ease 0s infinite forwards;
  min-height: 100vh;

  .wrap {
    width: 1024px;
    height: auto;
    margin: 0 auto;
    padding: 50px 0;
  }
}

@keyframes bg-color {
  0% {
    background-color: #e74c3c;
  }
  20% {
    background-color: #f1c40f;
  }
  40% {
    background-color: #1abc9c;
  }
  60% {
    background-color: #3498db;
  }
  80% {
    background-color: #9b59b6;
  }
  100% {
    background-color: #e74c3c;
  }
}
</style>
