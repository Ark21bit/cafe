<template>
    <div class="about-bg gap-4 bg-cover p-8 min-[1100px]:p-16 flex items-center justify-between">
        <div class="flex gap-6 flex-col max-w-xl">
            <h2 class="uppercase text-3xl font-bold">НАШЕ КАФЕ</h2>
            <p class="text-xl text-[#CFCFCF]">Мы расположены в одном из самых живописных мест города — на берегу реки, это ваш оазис в черте города, куда можно сбежать от шумного и пыльного мегаполиса. Мы, действительно уникальные, ведь все продумано до мелочей: проект построен из дикого закарпатского сруба, камин в основном зале ресторана и панорамные окна с видом на реку, уютные беседки на берегу реки и лучшая видовая террасса, шатер с посадкой на 200 человек, сказочный детский домик и бассейн.</p>
            <Button class="mt-8 self-start" color="black" decoration="outline">ПОСМОТРЕТЬ МЕНЮ</Button>
        </div>
        <div class="shrink-0 grid grid-cols-2 gap-4">
            <div class="text-white text-center text-base min-[1100px]:text-lg flex flex-col items-center aspect-square bg-[#504B4A]/90 backdrop-blur-sm px-5 py-8 justify-end hover:text-[#79B282] transition-colors duration-300 ease-linear">
                <nuxt-icon name="onion" class="text-[50px] min-[1100px]:text-[70px]"></nuxt-icon>
                <p class="mt-6">Свежайшие продукты</p>
            </div>
            <div class="text-white text-center text-base min-[1100px]:text-lg flex flex-col items-center aspect-square bg-[#504B4A]/90 backdrop-blur-sm px-5 py-8 justify-end hover:text-[#79B282] transition-colors duration-300 ease-linear">
                <nuxt-icon name="flash" class="text-[50px] min-[1100px]:text-[70px]"></nuxt-icon>
                <p class="mt-6">Быстрая доставка</p>
            </div>
            <div class="text-white text-center text-base min-[1100px]:text-lg flex flex-col items-center aspect-square bg-[#504B4A]/90 backdrop-blur-sm px-5 py-8 justify-end hover:text-[#79B282] transition-colors duration-300 ease-linear">
                <nuxt-icon name="chef" class="text-[50px] min-[1100px]:text-[70px]"></nuxt-icon>
                <p class="mt-6">Лучшие повора</p>
            </div>
            <div class="text-white text-center text-base min-[1100px]:text-lg flex flex-col items-center aspect-square bg-[#504B4A]/90 backdrop-blur-sm px-5 py-8 justify-end hover:text-[#79B282] transition-colors duration-300 ease-linear">
                <nuxt-icon name="onion" class="text-[50px] min-[1100px]:text-[70px]"></nuxt-icon>
                <p class="mt-6">Свежайшие продукты</p>
            </div>
        </div>
    </div>
</template>

<script setup>

</script>

