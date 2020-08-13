<template>
  <div class="microintaraction-page">
    <article class="wrap">
      <section>
        <LoadingContainer>
          <WaveBar />
        </LoadingContainer>
        <LoadingContainer>
          <BoxTurn />
        </LoadingContainer>
        <LoadingContainer>
          <RingBox />
        </LoadingContainer>
        <LoadingContainer>
          <Balls />
        </LoadingContainer>
        <LoadingContainer>
          <Rolls />
        </LoadingContainer>
        <LoadingContainer>
          <Dots />
        </LoadingContainer>
        <LoadingContainer>
          <SquareBox />
        </LoadingContainer>
        <LoadingContainer>
          <SquareDots />
        </LoadingContainer>
        <LoadingContainer>
          <Loader />
        </LoadingContainer>
        <LoadingContainer>
          <Pulse />
        </LoadingContainer>
        <LoadingContainer>
          <Planet />
        </LoadingContainer>
        <LoadingContainer>
          <TurnCircle />
        </LoadingContainer>
        <LoadingContainer>
          <LoadCircle />
        </LoadingContainer>
        <LoadingContainer>
          <BounceDots />
        </LoadingContainer>
        <LoadingContainer>
          <Music />
        </LoadingContainer>
        <LoadingContainer>
          <OrbitSpinner />
        </LoadingContainer>
        <LoadingContainer>
          <AtomSpinner />
        </LoadingContainer>
        <LoadingContainer>
          <DotWindmill />
        </LoadingContainer>
        <LoadingContainer>
          <DotCarousel />
        </LoadingContainer>
        <LoadingContainer>
          <DotOvertaking />
        </LoadingContainer>
        <LoadingContainer>
          <BubbleScale />
        </LoadingContainer>
        <LoadingContainer>
          <BallTrianglePath />
        </LoadingContainer>
        <LoadingContainer>
          <Packman />
        </LoadingContainer>
        <LoadingContainer>
          <Chaser />
        </LoadingContainer>
        <LoadingContainer>
          <SlowSpinner />
        </LoadingContainer>
        <LoadingContainer>
          <CubeGrid />
        </LoadingContainer>
      </section>
    </article>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'

import LoadingContainer from '@/components/LoadingContainer'
import AtomSpinner from '@/components/LoadingIcons/AtomSpinner'
import Balls from '@/components/LoadingIcons/Balls'
import BallTrianglePath from '@/components/LoadingIcons/BallTrianglePath'
import BounceDots from '@/components/LoadingIcons/BounceDots'
import BoxTurn from '@/components/LoadingIcons/BoxTurn'
import BubbleScale from '@/components/LoadingIcons/BubbleScale'
import Chaser from '@/components/LoadingIcons/Chaser'
import CubeGrid from '@/components/LoadingIcons/CubeGrid'
import DotCarousel from '@/components/LoadingIcons/DotCarousel'
import DotOvertaking from '@/components/LoadingIcons/DotOvertaking'
import Dots from '@/components/LoadingIcons/Dots'
import DotWindmill from '@/components/LoadingIcons/DotWindmill'
import LoadCircle from '@/components/LoadingIcons/LoadCircle'
import Loader from '@/components/LoadingIcons/Loader'
import Music from '@/components/LoadingIcons/Music'
import OrbitSpinner from '@/components/LoadingIcons/OrbitSpinner'
import Packman from '@/components/LoadingIcons/Packman'
import Planet from '@/components/LoadingIcons/Planet'
import Pulse from '@/components/LoadingIcons/Pulse'
import RingBox from '@/components/LoadingIcons/RingBox'
import Rolls from '@/components/LoadingIcons/Rolls'
import SlowSpinner from '@/components/LoadingIcons/SlowSpinner'
import SquareBox from '@/components/LoadingIcons/SquareBox'
import SquareDots from '@/components/LoadingIcons/SquareDots'
import TurnCircle from '@/components/LoadingIcons/TurnCircle'
import WaveBar from '@/components/LoadingIcons/WaveBar'

export default defineComponent({
  components: {
    LoadingContainer,
    AtomSpinner,
    Balls,
    BallTrianglePath,
    BounceDots,
    BoxTurn,
    BubbleScale,
    Chaser,
    CubeGrid,
    DotCarousel,
    DotOvertaking,
    Dots,
    DotWindmill,
    LoadCircle,
    Loader,
    Music,
    OrbitSpinner,
    Packman,
    Planet,
    Pulse,
    RingBox,
    Rolls,
    SlowSpinner,
    SquareBox,
    SquareDots,
    TurnCircle,
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
