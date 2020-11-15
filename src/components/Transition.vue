<template>
  <transition :name="effectName">
    <slot />
  </transition>
</template>
<script src="./js/transition.js"></script>
<style lang="scss" scoped>
/*FADE-EFFECT*/
.fade-effect-enter-active,
.fade-effect-leave-active {
  transition: opacity 0.3s ease-in-out;
}
.fade-effect-enter,
.fade-effect-leave-to {
  opacity: 0;
}

/*SLIDE-DOWN*/
.slide-down-enter {
  transform: translateY(-10px);
  opacity: 0;
}
.slide-down-enter-active {
  transition: all 0.3s ease;
}
.slide-down-leave-active {
  transition: all 0.3s ease-out;
}
.slide-down-leave-to {
  transform: translateY(-10px);
  opacity: 0;
}
</style>
