<template>
    <div class="col-span-full overflow-hidden">
        <swiper-container ref="swiperContainerEl" :init="false" slides-per-view="auto" :space-between="40" class="wrapper">
            <template v-for="n in 10">
                <swiper-slide v-for="category of categories" :key="category.id" class="w-fit">
                    <NuxtLink :to="`#${category.title}`"
                        class="text-sm lg:text-lg py-5 lg:py-7 text-[#CFCFCF] hover:text-white transition-colors flex relative after:w-full after:opacity-0 hover:after:opacity-100 after:transition-opacity after:h-[3px] after:absolute after:left-0 after:-bottom-[1.5px] after:bg-[#618967] after:shadow-[0_5px_12px_0] after:shadow-[#72a179]/30 after:mt-auto">
                        {{ category.title }}</NuxtLink>
                </swiper-slide>
            </template>
        </swiper-container>
    </div>
</template>

<script setup>
import { register } from 'swiper/element';
register()

const swiperContainerEl = ref()

onMounted(() => {
    const options = {
        injectStyles: [
            '.swiper {overflow: visible; display:flex;}',
            'swiper-slide {width:fit-content}'
        ],
    }
    Object.assign(swiperContainerEl.value, options)
    swiperContainerEl.value.initialize()
})


const { data: categories } = useFetch('/api/categories', { key: 'categories' })
</script>



