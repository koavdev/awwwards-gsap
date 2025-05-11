<template>
    <button
        :id="id"
        :class="`group relative z-10 w-fit cursor-pointer overflow-hidden rounded-full px-7 bg-violet-500 py-3 text-black ${containerClass}`"
    >
        <component :is="leftIcon" class="h-4"/>
        <span class="relative inline-flex overflow-hidden font-general text-xs uppercase">
            <div>
                {{ title }}
            </div>
        </span>
        <component :is="rightIcon" class="h-4"/>
    </button>
</template>

<script lang="ts" setup>
import { toRefs } from "vue"

defineOptions({
  name: "Button"
})

const props = withDefaults(
  defineProps<{
    title: string
    id: string
    rightIcon?: Component
    leftIcon?: Component
    containerClass?: string
  }>(),
  {  }
)
const { title, id, rightIcon, leftIcon, containerClass } = toRefs(props)
</script>