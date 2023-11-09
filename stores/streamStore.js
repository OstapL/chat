import { defineStore } from 'pinia'

export const useStreamStore = defineStore('streamStore', () => {
  let messages = reactive([{name: 'awd', text: 'awdaw'}, {name: 'awd', text: 'awdaw'}]);

  function getMessages(data) {
    data.forEach((item) => {
      messages.push({
        name: item?.user?.name,
        text: item?.text,
        picture: item?.user?.picture,
      });
    });
  }

  function setMessage(data) {
    messages.push(data);
  }

  return { setMessage, messages, getMessages };
})
