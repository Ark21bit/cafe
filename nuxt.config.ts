// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	alias: {
		pinia: "/node_modules/@pinia/nuxt/node_modules/pinia/dist/pinia.mjs",
	},
	vue: {
		propsDestructure: true,
		compilerOptions: {
			isCustomElement: (tag: string) =>
				["swiper-container", "swiper-slide"].includes(tag),
		},
	},
	components: [
		{ path: "~/components/nav" },
		{ path: "~/components/atoms" },
		"~/components",
	],
	devtools: { enabled: true },
	modules: [
		"@nuxtjs/tailwindcss",
		"nuxt-icons",
		"@nuxtjs/google-fonts",
		"nuxt-icon",
		"@pinia/nuxt",
		"@vueuse/nuxt",
	],
	googleFonts: {
		families: {
			Roboto: true,
		},
		download: true,
	},
	imports: {
		dirs: ["stores"],
	},
	pinia: {
		autoImports: [
			"defineStore",
			["defineStore", "definePiniaStore"],
			"storeToRefs",
		],
	},
});
