<script lang="ts">
	import { defineComponent, provide, reactive } from "vue"
	// import TheWelcome from "@/components/TheWelcome.vue"
	import NumberPicker from "@/components/NumberPicker.vue"
	import counterVue from "@/components/counter.vue"
	import Card from "@/components/Card.vue"
	import UserCard from "../components/userCard.vue"
	export default defineComponent({
		name: "Home",
		components: {
			NumberPicker,
			counterVue,
			Card,
			UserCard
		},
		setup() {
			const userInfo = reactive({ firstName: "Hasan", lastName: "Hadavi" })
			provide("user-info", userInfo)
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
				<br />
			</template>
		</card>
		<br />
		<user-card></user-card>
	</main>
</template>
