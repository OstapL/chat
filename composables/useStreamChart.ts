import {StreamChat} from "stream-chat";

// const client = StreamChat.getInstance('7bft8qsnhn6j');

export const createStreamChatChannel = async (channelId: string, channelName: string, client) => {
  const channel = client.channel('messaging', channelId, {
    name: channelName,
  });
  await channel.watch();
  return channel;
}


export const connectUserToClient = async (user, token, client) => {
  console.log(client);
  await client.connectUser(
    user,
    token.value,
  );
}

export const sendMessage = async (channel, text) => {
  const message = await channel.sendMessage({
    text,
  });
}

export const getChannels = async (userId) => {
  const filter = { type: 'messaging', members: { $in: [userId] } };
  const sort = { last_message_at: -1 };
  const result = await client.queryChannels(filter, sort, {watch:true});
  return result;
}
