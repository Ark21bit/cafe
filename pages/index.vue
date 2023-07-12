<template>
    <HeroBlock class="col-span-full"></HeroBlock>
    <NavFixed></NavFixed>
    <Nav ref="nav"></Nav>
    <CategoryCatalog v-for="catalogCategory in catalog" :title="catalogCategory.title" :id="catalogCategory.title" :products="catalogCategory.products" :key="catalogCategory.id"></CategoryCatalog>
    <About class="max-lg:hidden" />
</template>

<script setup>
const { data: catalog, error } = await useFetch('/api/catalog', { key: 'catalog' })

const nav = ref(null)

onMounted(()=>{
    useNavFixed(nav)
})
</script>

