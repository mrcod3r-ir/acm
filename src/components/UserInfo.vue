<template>
	<div style="margin-tip: 20px">
		<span
			>firstName : <span> {{ userInfo.firstName }}</span></span
		>
		&nbsp;
		<span
			>lastName : <span> {{ userInfo.lastName }}</span></span
		>
	</div>
</template>

<script lang="ts">
	import { defineComponent, inject } from "vue"

	export default defineComponent({
		setup() {
			const userInfo = inject("user-info")
			return { userInfo }
		}
	})
</script>

<style scoped></style>
