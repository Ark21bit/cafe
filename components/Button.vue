<template>
    <component :is="tag" :class="buttonClass">
        <slot name="prefix" />
        <slot />
        <svg v-if="loading" class="inline w-4 h-4 ml-auto animate-spin" viewBox="0 0 100 101" fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
                d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                fill="currentColor"></path>
        </svg>
        <slot name="suffix" />
    </component>
</template>

<script setup>


const { loading = false, tag = "button", category = "default", size = "md", decoration = "default", color = "green", hover = true, noDefaultAttrsClass = false, rounded = true } = defineProps({
    tag: String,
    category: String,
    size: [String, Boolean],
    decoration: String,
    color: [String, Boolean],
    hover: [String, Boolean, Object],
    rounded: [String, Boolean],
    noDefaultAttrsClass: Boolean,
    loading: [Boolean, String],
})

const slots = useSlots()

const buttonColorClasses = {
    default: {
        default: {
            green: 'text-white bg-[#72A479] focus:ring-4 focus:ring-[#72A479]',
        },
        hover: {
            green: 'hover:shadow-lg hover:shadow-[#72A479]',
        }
    },
    outline:{
        default: {
            black: 'text-white bg-black/05 outline outline-1 outline-black/20 -outline-offset-1' ,
        },
        hover: {
            black: 'hover:shadow-lg hover:shadow-black/20',
        }
    }
}

const buttonSizeClasess = {
    default: {
        md: 'text-sm font-semiBold px-4 py-2.5',
    },
    square: {
        md: 'text-sm p-2.5',
    }
};

const buttonRoundedClasess = {
    default: 'rounded-xl',
    full: 'rounded-full'
};

const buttonHoverClass = computed(() => {
    if (!hover) return ''
    if (typeof hover === Object) return buttonColorClasses[hover.decoration ?? decoration].hover[hover.color ?? color]
    if (hover === true) return buttonColorClasses[decoration].hover[color]
    return buttonColorClasses[decoration].hover[hover]
})

const defaultClass = computed(() => {
    if (noDefaultAttrsClass) return ''

    const classes = 'flex items-center transition-all duration-500 ease-linear gap-3 [&_.nuxt-icon]:shrink-0 [&_.nuxt-icon]:text-2xl [&_.icon]:shrink-0 [&_.icon]:text-2xl'

    if ((slots.prefix || slots.suffix)) return `${classes} justify-between`
    return `${classes} justify-center`
})

const roundedClass = computed(() => {
    if (!rounded) return ''
    if (rounded === true) return buttonRoundedClasess['default']
    if (rounded == 'auto') return buttonRoundedClasess[size]
    return buttonRoundedClasess[rounded]
})

const buttonClass = computed(() => {
    return [
        defaultClass.value,
        roundedClass.value,
        color && buttonColorClasses[decoration].default[color],
        size && buttonSizeClasess[category][size],
        buttonHoverClass.value
    ]
});

</script>
