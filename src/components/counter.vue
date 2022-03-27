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
	import {
		defineComponent,
		ref,
		reactive,
		computed,
		watch,
		watchEffect
	} from "vue"

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
			// computed
			const computdCounter = computed(() => counter.value * 2)
			// watch
			const watchedCounter = watch(counter, (newVal, oldVal) =>
				console.log(`new val is ${newVal} and oldVal is ${oldVal}`)
			)
			const watchedState = watch(state, (newVal, oldVal) =>
				console.log(`new val is ${newVal} and oldVal is ${oldVal}`)
			)
			// watch
			console.log("counter setup", counter.value)
			watchEffect(() => {
				console.log("counter", counter.value)
			})
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
