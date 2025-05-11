<template>
   <div>Story</div>
</template>

<script lang="ts" setup>
import { toRefs } from "vue"

defineOptions({
  name: "Story"
})

const props = withDefaults(
  defineProps<{}>(),
  {  }
)
const {  } = toRefs(props)
</script>