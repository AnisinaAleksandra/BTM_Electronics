import { makePostRequest } from "./api";

const telegramBotKey = import.meta.env.VITE_TELEGRAM_BOT_TOKEN;
const chat_id = import.meta.env.VITE_TELEGRAM_USER_ID;

export const sendNotification = async (text: string, parse_node: string) => {
  let response = "";
  const endpoint = `https://api.telegram.org/bot${telegramBotKey}/sendMessage`;
  await makePostRequest(endpoint, {
    text,
    parse_node,
    chat_id,
  })
    .then((res) => JSON.stringify(res))
    .then((data) => (response = data))
    .catch((error) => (response = error));
  return response;
};
