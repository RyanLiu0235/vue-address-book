<script>
	import { addContacts } from '../vuex/actions';
	import { getContacts } from '../vuex/getters';

	export default {
		data: function() {
			return {
				name: '',
				address: ''
			}
		},
		methods: {
			submit() {
				let newName = this.name;
				let newAddress = this.address;
				
				if (newName && newAddress) {
					this.addContacts({
						name: newName,
						address: newAddress,
						id: Date.now()
					});
					this.name = '';
					this.address = '';
				}
			}
		},
		vuex: {
			actions: {
				addContacts
			},
			getters: {
				getLists: getContacts
			}
		}
	}
</script>

<template>
	<div>
		<input v-model="name" type="text" name="name" placeholder="请输入姓名" />
		<input v-model="address" type="text" name="address" placeholder="请输入住址" />
		<button @click="submit">确认提交</button>
	</div>
</template>