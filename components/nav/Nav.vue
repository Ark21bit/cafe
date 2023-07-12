<template>
    <div class="col-span-full  overflow-hidden">
        <Swiper :slidesPerView="'auto'" class="swiper-nav !overflow-visible" :spaceBetween="40">
            <SwiperSlide class="text-sm lg:text-lg mr-10" v-for="category of categories" :key="category.id">
                <NuxtLink :to="`#${category.title}`"
                    class="py-5 lg:py-7 text-[#CFCFCF] hover:text-white transition-colors flex relative after:w-full after:opacity-0 hover:after:opacity-100 after:transition-opacity after:h-[3px] after:absolute after:left-0 after:-bottom-[1.5px] after:bg-[#618967] after:shadow-[0_5px_12px_0] after:shadow-[#72a179]/30 after:mt-auto">
                    {{ category.title }}</NuxtLink>
            </SwiperSlide>
        </Swiper>
    </div>
</template>

<script setup>
const { data: categories } = useFetch('/api/categories', { key: 'categories' })
</script>

<style type="text/tailwindcss">
.swiper-nav {
    @apply flex wrapper;
}

.swiper-nav .swiper-slide {
    @apply w-fit;
}
</style>

