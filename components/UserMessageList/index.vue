<script setup land="ts">
defineProps({
	messages: Array,
});

</script>

<template>
	<div class="UserMessageList user-message-list">
		<div
			v-for="(item, i) in messages"
			:key="i"
			class="user-message-list__item mb-2"
		>
			<h3 class="user-message-list__item-title">{{ item.name }}</h3>
			<p>{{ item.text }}</p>
		</div>
	</div>
</template>
