<script lang="ts">
	import { defineComponent } from "vue"
	// import TheWelcome from "@/components/TheWelcome.vue"
	import NumberPicker from "@/components/NumberPicker.vue"
	import counterVue from "@/components/counter.vue"
	export default defineComponent({
		name: "Home",
		components: {
			NumberPicker,
			counterVue
		},
		data() {
			return { counter: 0 }
		}
	})
</script>

<template>
	<main>
		<!-- <TheWelcome /> -->
		<number-picker v-model:modelValue="counter"></number-picker>
		<counter-vue></counter-vue>
	</main>
</template>
