<template>
	<div>
		<button @click="plus">+</button>
		{{ counter }} <br />
		state:{{ state.counter }}
		<button @click="plusState">+</button>
		<br />
		computed counter : {{ computdCounter }}
		<br />
		watch counter : see console ! watch state : see console !
	</div>
</template>

<script lang="ts">
	import { defineComponent } from "vue"
	import { useCounter } from "@/composables/userCounter"

	export default defineComponent({
		setup() {
			const {
				counter,
				plus,
				state,
				plusState,
				computdCounter,
				watchedCounter,
				watchedState
			} = useCounter()

			return {
				counter,
				plus,
				state,
				plusState,
				computdCounter,
				watchedCounter,
				watchedState
			}
		}
	})
</script>

<style scoped></style>
