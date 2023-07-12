<template>
    <div v-show="isShow" class="fixed top-0 left-0 w-full bg-[#221F20]/80 backdrop-blur-3xl border-b border-white/10 z-30">
        <Swiper :slidesPerView="'auto'" class="swiper-nav !overflow-visible" :spaceBetween="40">
            <SwiperSlide class="text-sm lg:text-lg mr-10" v-for="category of categories" :key="category.id">
                <NuxtLink :to="`#${category.title}`" :class="activeLink == category.title ? 'text-white after:opacity-100' : 'text-[#CFCFCF] after:opacity-0'"
                    class="py-5 lg:py-7 hover:text-white transition-colors flex relative after:w-full hover:after:opacity-100 after:transition-opacity after:h-[3px] after:absolute after:left-0 after:-bottom-[1.5px] after:bg-[#618967] after:shadow-[0_5px_12px_0] after:shadow-[#72a179]/30 after:mt-auto">
                    {{ category.title }}</NuxtLink>
            </SwiperSlide>
        </Swiper>
    </div>
</template>

<script setup>
const { data: categories } = await useFetch('/api/categories', { key: 'categories' })

const { isShow } = storeToRefs(useNavFixedStore())

const activeLink = ref(categories.value[0].title)
</script>

<style type="text/tailwindcss">
.swiper-nav {
    @apply flex wrapper;
}

.swiper-nav .swiper-slide {
    @apply w-fit;
}
</style>

