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
		methods: {
			plus() {
				this.$emit("update:modelValue", this.modelValue + 1)
			},
			minus() {
				this.$emit("update:modelValue", this.modelValue - 1)
			}
		}
	})
</script>

<style lang="scss" scoped></style>
