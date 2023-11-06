export const tabsLoader = async () => {
	const res = await fetch('tabs.json');

	const tabs = await res.json();

	return { tabs };
};
