<template>  
    <HeroBlock class="col-span-full"></HeroBlock>
    <NavFixed></NavFixed>
    <Nav ref="nav"></Nav>
    <CategoryCatalog v-for="catalogCategory in catalog" :title="catalogCategory.title" :id="catalogCategory.title" :products="catalogCategory.products"
        :key="catalogCategory.id"></CategoryCatalog>
    <About class="max-lg:hidden" />
</template>

<script setup>
import { useElementBounding } from '@vueuse/core'
const { data: catalog, error } = await useFetch('/api/catalog', { key: 'catalog' })

const { isShow: isShowNavFixed } = storeToRefs(useNavFixedStore())

const nav = ref(null)

const { top: navTop } = useElementBounding(nav)

watch(navTop, () => {
    isShowNavFixed.value = navTop.value > 0 ? false : true
})
</script>

