<script lang="ts">
	import { defineComponent } from "vue"
	// import TheWelcome from "@/components/TheWelcome.vue"
	import NumberPicker from "@/components/NumberPicker.vue"
	import counterVue from "@/components/counter.vue"
	import Card from "@/components/Card.vue"
	export default defineComponent({
		name: "Home",
		components: {
			NumberPicker,
			counterVue,
			Card
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
		<br />
		<card>
			Lorem, ipsum dolor sit amet consectetur adipisicing elit. Itaque distinctio doloribus ex, asperiores deleniti assumenda quis, commodi odio, cupiditate illo placeat in. Iusto corrupti blanditiis
			qui ipsam. Alias, impedit nulla.
			<template #actionButtons="{ counter }">
				{{ counter }}
				<button>submit</button>
				<button>info</button>
			</template>
		</card>
	</main>
</template>
