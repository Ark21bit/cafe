<template>
    <div class="flex flex-col rounded bg-gradient-to-b from-[#494544] to-[#504B4A]">
        <div>
            <img :src="product?.img" alt="" class="w-full h-56 object-cover rounded-t">
        </div>
        <div class="p-4 grow flex gap-1 flex-col">
            <div class="flex gap-1 justify-between items-end">
                <p class="text-xl font-bold">{{ product?.title ?? '' }}</p>
                <p class="text-xs">Вес: {{ product?.weight ?? '' }} г</p>
            </div>
            <p class="text-xs text-[#CFCFCF] grow">{{ product?.description ?? '' }}</p>
            <div class="flex items-center gap-2 justify-between mt-2" v-if="true">
                <p class="text-xl font-semibold">{{ product?.price ?? '' }} ₽</p>
                <Button>
                    В корзину
                    <template #suffix>
                        <nuxt-icon name="buy"></nuxt-icon>
                    </template>
                </Button>
            </div>
            <div v-else-if="false">

            </div>
        </div>
    </div>
</template>

<script setup>
const { product = {} } = defineProps({
    product: Object
})
</script>
