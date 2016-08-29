<script>
	import { getContacts } from '../vuex/getters';
	export default {
		filters: {
			timeFormat (value) {
				return new Date(value).toLocaleString();
			}
		},
		computed: {
			getAllLists() {
				return this.getLists;
			}
		},
		vuex: {
			getters: {
				getLists: getContacts
			}
		}
	}
</script>

<template>
	<div>
		<ul>
			<li v-for="item in getAllLists">
				<div>登记于：{{ item.id | timeFormat }}</div>
				<div>姓名：{{ item.name }}</div>
				<div>住址：{{ item.address }}</div>
			</li>
		</ul>
	</div>
</template>