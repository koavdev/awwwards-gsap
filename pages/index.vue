<template>
    <main className="relative min-h-screen w-screen overflow-x-hidden">
      <Navbar />
      <Hero />
      <section class="z-0 min-h-screen bg-blue-500">

      </section>
      <About />
      <Features />
      <Story />
      <Contact />
      <Footer />
    </main>
</template>

<script lang="ts" setup>
import { toRefs } from "vue"

defineOptions({
  name: "index"
})

const props = withDefaults(
  defineProps<{}>(),
  {  }
)
const {  } = toRefs(props)
</script>