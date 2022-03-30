<template>
	<div class="card-container">
		<p>
			<slot></slot>
		</p>
		<div>
			<slot name="actionButtons" counter="5"></slot>
		</div>
	</div>
</template>

<script lang="ts">
	import { defineComponent } from "vue"
	import { useCounter } from "@/composables/userCounter"

	export default defineComponent({
		setup() {
			const { counter, plus, state, plusState, computdCounter } = useCounter()

			return { counter, plus, state, plusState, computdCounter }
		}
	})
</script>

<style scoped>
	.card-container {
		border: 2px solid rgb(207, 207, 207);
		max-width: 20rem;
		padding: 1rem;
	}
</style>
