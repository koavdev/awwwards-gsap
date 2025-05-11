<template>
    <div class="relative h-dvh w-screen overflow-x-hidden">

        <template v-if="false">
            <div class="flex-center absolute z-[100] h-dvh w-screen overflow-hidden bg-violet-50">
                <div class="three-body">
                    <div class="three-body__dot"></div>
                    <div class="three-body__dot"></div>
                    <div class="three-body__dot"></div>
                </div>
            </div>
        </template>
        <template v-else>
            <div
                id="video-frame"
                class="relative z-10 h-dvh w-screen overflow-hidden rounded-lg bg-blue-75"
            >
                <div>
                    <div class="mask-clip-path absolute-center absolute z-50 size-64 cursor-pointer overflow-hidden rounded-lg">
                        <div
                            @click="handleMiniVideoClick"
                            class="origin-center scale-50 opacity-0 transition-all duration-500 ease-in hover:scale-100 hover:opacity-100">
                            <video
                                ref="nextVideoRef"
                                :src="getVideoSrc(upComingVideoIndex)"
                                autoplay
                                loop
                                muted
                                id="current-video"
                                class="size-64 origin-center scale-150 object-cover object-center"
                                :loadeddata="handleVideoLoad"
                            />
                        </div>
                    </div>
    
                    <video
                        ref="nextVideoRef"
                        :src="getVideoSrc(upComingVideoIndex)"
                        loop
                        muted
                        id="next-video"
                        class="absolute-center invisible absolute z-20 size-64 object-cover object-center"
                        :loadeddata="handleVideoLoad"
                    />
    
                    <video
                        :src="getVideoSrc(currentIndex === totalVideos - 1 ? 1 : currentIndex)" 
                        autoplay
                        loop
                        muted
                        class="absolute left-0 top-0 size-full object-cover object-center"
                        :loadeddata="handleVideoLoad"
                    />
                </div>
    
                <h1 class="special-font hero-heading absolute bottom-5 right-5 z-40 text-blue-75">
                    G<b>a</b>ming
                </h1>
    
                <div class="absolute left-0 top-0 z-40 size-full">
                    <div class="mt-24 px-5 sm:px-10">
                        <h1 class="special-font hero-heading text-blue-100">
                            redefi<b>n</b><b>e</b>
                        </h1>
    
                        <p class="mb-5 max-w-64 font-robert-regular text-blue-100">
                            Enter the Metagame Layer <br />
                            Unleash the Play Economy
                        </p>
    
                        <Button
                            id="watch-trailer"
                            title="Watch Trailer"
                            :leftIcon="MoveUpRightIcon"
                            containerClass="bg-yellow-300 flex-center gap-1" />
                    </div>
                </div>
            </div>
            <h1 class="special-font hero-heading absolute bottom-5 right-5 text-black">
                G<b>a</b>ming
            </h1>
        </template>
    </div>
</template>

<script lang="ts" setup>
import { MoveUpRightIcon } from "lucide-vue-next";
import { ref, watch, computed, onMounted, toRefs } from 'vue'
import Button from '@/components/common/Button.vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger)

onMounted(() => {
    gsap.set("#video-frame", {
        clipPath: "polygon(14% 0%, 72% 0%, 90% 90%, 0% 100%)",
        borderRadius: "0 0 40% 10%",
    });

    gsap.from('#video-frame', {
        clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
        borderRadius: '0 0 0 0',
        ease: 'power1.inOut',
        scrollTrigger: {
            trigger: '#video-frame',
            start: 'center center',
            end: 'bottom center',
            scrub: true
        }
    })
})


defineOptions({
  name: "Hero"
})

const props = withDefaults(
  defineProps<{}>(),
  {  }
)

const {  } = toRefs(props)

const currentIndex = ref(1)
const hasClicked = ref(false)
const isLoading = ref(true)
const loadedVideos = ref(0)
const totalVideos = 4;
const nextVideoRef = ref(null)

const handleMiniVideoClick = () => {
    hasClicked.value = true
    currentIndex.value = upComingVideoIndex.value;
}

watch(loadedVideos, (newValue) => {
  if (newValue === totalVideos) {
    isLoading.value = false;
  }
});

const getVideoSrc = (index: number) => {    
    return `../assets/videos/hero-${index}.mp4`;   
}

function handleVideoLoad() {
    loadedVideos.value = loadedVideos.value + 1;
}

const upComingVideoIndex = computed(() => (currentIndex.value % 4) + 1)

watch(hasClicked, async (newValue) => {
  if (newValue) {
    gsap.set('#next-video', { visibility: 'visible' });
    gsap.to('#next-video', {
      transformOrigin: 'center center',
      scale: 1,
      width: '100%',
      height: '100%',
      duration: 1,
      ease: 'power1.inOut',
      onStart: async () => {
        await nextTick(); // Ensure DOM is updated
        if (nextVideoRef.value) {
          nextVideoRef.value.play().catch((err) => {
            console.error('Error playing video:', err);
          });
        }
      },
    });
    gsap.from('#current-video', {
      transformOrigin: 'center center',
      scale: 0,
      duration: 1.5,
      ease: 'power1.inOut',
    });
  }
}, { immediate: true });

</script>