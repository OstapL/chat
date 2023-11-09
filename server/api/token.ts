import { StreamChat } from 'stream-chat';
const config = useRuntimeConfig();

export default defineEventHandler((event) => {
  const { id } = getQuery(event);
  const serverClient = StreamChat.getInstance(config.public.STREAM_API_KEY, config.public.STREAM_API_SECRET);
  const token = serverClient.createToken(id);
  return { token };
})
