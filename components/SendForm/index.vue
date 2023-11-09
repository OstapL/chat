<script setup>
const text = ref('');
const emit = defineEmits(['send']);
function onSend() {
	emit('send', text);
}

</script>

<template>
	<v-sheet width="500" class="mx-auto">
		<v-form>
			<v-textarea
				v-model="text"
				label="Text"
			></v-textarea>
			<v-btn type="submit" block class="mt-2" :disabled="!text" @click.prevent="onSend">Submit</v-btn>
		</v-form>
	</v-sheet>
</template>
