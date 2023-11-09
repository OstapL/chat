<script setup lang="ts">
	import { storeToRefs } from 'pinia';

	const { $client } = useNuxtApp();
	const user = useUserStore();
	const { getUserToken } = useUserStore();
	const { loginData, token, fullName, isUserLoaded } = storeToRefs(user);
	let chanel = ref();
	const { setMessage, messages, getMessages } = useStreamStore();
	
	
	async function initChart() {
		await initRandomUser();
		const user = {
			id: loginData.value.login.username,
			name: loginData.value.name.last,
			picture: loginData.value?.picture?.thumbnail,
		};
		await getUserToken(user.id);
		await connectUserToClient(user, token, $client);
		chanel = await createStreamChatChannel('new-test', 'hello!', $client);
		getMessages(chanel.state.messages);
	}

	function onSendMessage(text) {
		sendMessage(chanel, text);
		setMessage({name: fullName.value, text});
	}
	
	onBeforeMount(() => {
		initChart();
	})
	
</script>

<template>
	<h1>Chat</h1>
	<v-sheet width="500" class="mx-auto mb-2">
		<UserMessageList
			v-if="messages.length > 0"
			:messages="messages"
		/>
	</v-sheet>
	<SendForm @send="onSendMessage" class="mt-10"/>
</template>
