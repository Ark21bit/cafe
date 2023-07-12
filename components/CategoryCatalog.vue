<template>
    <div class="col-span-full overflow-hidden border-t border-white/10 py-8  lg:py-12">
        <div class="wrapper">
            <h2 class="flex gap-2.5 lg:gap-5 before:w-1 before:bg-[#618967] uppercase font-bold text-xl lg:text-3xl">{{ title }}</h2>
            <Swiper :slidesPerView="1" :breakpoints="{ 640: { slidesPerView: 2 }, 1024: { slidesPerView: 4 } }"
                class="swiper-category-catalog !overflow-visible mt-8 lg:mt-12" :spaceBetween="16">
                <SwiperSlide v-for="item in products" :key="products.id" class="mr-4">
                    <CartCatalog :product="item" class="h-full" />
                </SwiperSlide>
            </Swiper>
        </div>
    </div>
</template>

<script setup>
const { products = {} } = defineProps({
    title: String,
    products: Object
})
</script>

<style type="text/tailwindcss">
.swiper-category-catalog {
    @apply flex wrapper w-full max-lg:px-4;
}

.swiper-category-catalog .swiper-slide {
    @apply w-fit lg:max-w-[calc(25%-16px)] h-auto
}
</style>
