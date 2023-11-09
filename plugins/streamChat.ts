import { StreamChat } from 'stream-chat';

export default defineNuxtPlugin(nuxtApp => {
  const config = useRuntimeConfig();
  const client = StreamChat.getInstance(config.public.STREAM_API_KEY);

  nuxtApp.vueApp.provide('client', client);
  nuxtApp.provide('client', client);
})
