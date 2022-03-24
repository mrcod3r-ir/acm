<script lang="ts">
	import { defineComponent } from "vue"
	// import TheWelcome from "@/components/TheWelcome.vue"
	import NumberPicker from "@/components/NumberPicker.vue"
	export default defineComponent({
		name: "Home",
		components: {
			NumberPicker
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
	</main>
</template>
