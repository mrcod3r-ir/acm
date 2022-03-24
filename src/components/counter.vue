<template>
	<div>
		<button @click="plus">+</button>
		{{ counter }} <br />
		state:{{ state.counter }}
		<button @click="plusState">+</button>
	</div>
</template>

<script lang="ts">
	import { defineComponent, ref, reactive } from "vue"

	export default defineComponent({
		setup() {
			const counter = ref(0)
			const state = reactive({ counter: 0 })
			const plus = () => {
				counter.value++
			}
			const plusState = () => {
				state.counter++
			}
			return { counter, plus, state, plusState }
		}
	})
</script>

<style scoped></style>
