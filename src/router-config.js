export function routerConfig(router) {
	router.map({
		'/input': {
			component: (resolve) => require(['./components/text'], resolve)
		},
		'/list': {
			component: (resolve) => require(['./components/list'], resolve)
		}
	});
}