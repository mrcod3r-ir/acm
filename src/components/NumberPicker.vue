<template>
	<div>
		<button @click="plus">+</button>
		{{ modelValue }}
		<button @click="minus">-</button>
	</div>
</template>

<script lang="ts">
	import { defineComponent } from "vue"
	export default defineComponent({
		props: {
			modelValue: { type: Number, default: 0 }
		},
		emits: ["update:modelValue"],
		setup(props, { emit }) {
			const plus = () => {
				emit("update:modelValue", props.modelValue + 1)
			}
			const minus = () => {
				emit("update:modelValue", props.modelValue - 1)
			}
			return { plus, minus }
		}
	})
</script>

<style lang="scss" scoped></style>
