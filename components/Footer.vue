<template>
   <div>Footer</div>
</template>

<script lang="ts" setup>
import { toRefs } from "vue"

defineOptions({
  name: "Footer"
})

const props = withDefaults(
  defineProps<{}>(),
  {  }
)
const {  } = toRefs(props)
</script>