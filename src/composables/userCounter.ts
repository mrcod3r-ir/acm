import { ref, reactive, computed, watch, watchEffect } from "vue"
export const useCounter = () => {
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
