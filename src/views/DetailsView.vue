<script lang="ts">
	import { useRoute } from "vue-router"
	import { defineComponent } from "vue"

	export default defineComponent({
		name: "Details",
		setup() {
			const route = useRoute()
			console.log("route.params.id", route.params.id)
			console.log("query ", route.query)
			return {}
		}
	})
</script>
<template>
	<div class="details">
		<h1>This is an details page</h1>
	</div>
</template>

<style>
	@media (min-width: 1024px) {
		.details {
			min-height: 100vh;
			display: flex;
			align-items: center;
		}
	}
</style>
