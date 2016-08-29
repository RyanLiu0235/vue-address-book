<script>
	import list from './list';
	import text from './text';
	import store from '../vuex/store';

	export default {
		store
	}
</script>

<template>
	<div>
		<h3>联系人表</h3>
		<div>
			<a v-link="{ path: '/input' }">新增联系人</a>
			<a v-link="{ path: '/list' }">查看联系人</a>
		</div>
		<router-view></router-view>
	</div>
</template>