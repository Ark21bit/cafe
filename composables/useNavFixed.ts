export const useNavFixed = (node:HTMLElement) => {
	const { top: navTop } = useElementBounding(toValue(node));

	const { isShow } = toRefs(useNavFixedStore());
	watch(navTop, () => {
		isShow.value = navTop.value > 0 ? false : true;
	});
	return { isShow };
};
