<template>
	<div>
		<user-info></user-info>
		<button style="margin-top: 20px">edit</button>
	</div>
</template>

<script lang="ts">
	import { defineComponent } from "vue"
	import UserInfo from "./UserInfo.vue"

	export default defineComponent({
		components: { UserInfo },
		setup() {
			return {}
		}
	})
</script>

<style scoped></style>
