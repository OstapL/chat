<script setup lang="ts">
	import { storeToRefs } from 'pinia';
	const { getUserToken } = useUserStore();
	const { $client } = useNuxtApp();
	const user = useUserStore();
	const { loginData, token, fullName } = storeToRefs(user);
	let chanel = ref();
	const { setMessage, messages, getMessages } = useStreamStore();
	
	async function initChart() {
		await initRandomUser();
		
		const userId = loginData.value.login.username;
		const userName = `${loginData.value.name.first} ${loginData.value.name.last}`;
		const userPicture = loginData.value?.picture?.thumbnail;
		
		await getUserToken(userId);
		await connectUserToClient({ id: userId, name: userName, picture: userPicture }, token, $client);
		
		chanel = await createStreamChatChannel('new-test', 'hello!', $client);
		getMessages(chanel.state.messages);
	}
	
	function onSendMessage(text) {
		sendMessage(chanel, text);
		setMessage({ name: fullName.value, text });
	}
	
	initChart();
</script>

<template>
	<div>
		<h1>Chat</h1>
		<v-sheet width="500" class="mx-auto mb-2">
			<UserMessageList v-if="messages.length > 0" :messages="messages" />
		</v-sheet>
		<SendForm @send="onSendMessage" class="mt-10" />
	</div>
</template>
