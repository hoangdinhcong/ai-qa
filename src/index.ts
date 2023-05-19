import * as dotenv from "dotenv";
import { run } from "./retrieval.qa.ts";

dotenv.config();

// const model = new OpenAI({
//   modelName: "gpt-3.5-turbo",
//   openAIApiKey: process.env.OPENAI_API_KEY,
// });

const res = async () => {
  await run();
};

res();

// const res = async () => {
//   await model.call(
//     "What's a good idea for an application to build with GPT-3?"
//   );
// };

// console.log(await res());
