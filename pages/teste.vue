<template>
    <div class="smooth-wrapper">
      <div class="smooth-content">
        <section class="h-screen flex items-center justify-center bg-gray-100">
          <h1 class="text-4xl">Seção 1</h1>
        </section>
        <section class="h-screen flex items-center justify-center bg-gray-200">
          <h1 class="text-4xl">Seção 2</h1>
        </section>
        <section class="h-screen flex items-center justify-center bg-gray-300">
          <h1 class="text-4xl">Seção 3</h1>
        </section>
      </div>
    </div>
  </template>
  
  <script setup>
  import { onMounted, onBeforeUnmount } from 'vue'
  import gsap from 'gsap'
  import { ScrollSmoother, ScrollTrigger } from 'gsap/all'
  
  gsap.registerPlugin(ScrollSmoother, ScrollTrigger)
  
  let smoother
  
  onMounted(() => {
    smoother = ScrollSmoother.create({
      wrapper: '.smooth-wrapper',
      content: '.smooth-content',
      smooth: 3,       // tempo de suavização
      effects: true      // habilita data-speed e data-lag atributos
    })
  })
  
  onBeforeUnmount(() => {
    if (smoother) smoother.kill()
  })
  </script>
  
  <style>
  .smooth-wrapper {
    position: fixed;
    width: 100%;
    height: 100%;
    overflow: hidden;
  }
  
  .smooth-content {
    overflow: visible;
    position: relative;
    width: 100%;
  }
  
  /* para que cada seção ocupe toda a tela */
  section {
    width: 100%;
  }
  </style>
  