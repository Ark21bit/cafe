export const useNavFixedStore = defineStore("navFixed", () => {
	const isShow = ref(false);

	return { isShow };
});
