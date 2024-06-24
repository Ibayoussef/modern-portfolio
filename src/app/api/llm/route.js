import axios from 'axios';
import { ChatOpenAI } from '@langchain/openai';
import { ChatPromptTemplate } from '@langchain/core/prompts'
import { NextResponse } from 'next/server';



export async function POST(req) {

    const body = await req.json();
    const question = body.question

    if (!question) {
        return NextResponse.json({ error: 'Missing question' });
    }

    try {
        // Fetch the Gist content
        const gistUrl = 'https://gist.githubusercontent.com/Ibayoussef/c4a187249f1665f3738082a3cea64abb/raw/ed958b9e4f67743f83d35a5fe4d2e8339047dee5/gistfile1.json';
        const response = await axios.get(gistUrl);
        const gistContent = response.data;

        // Initialize LangChain with OpenAI GPT-3.5 Turbo
        const model = new ChatOpenAI({ temperature: 0, modelName: "gpt-3.5-turbo", apiKey: process.env.NEXT_PUBLIC_OPENAI_KEY });


        const prompt = ChatPromptTemplate.fromMessages([
            ["system", `You are an assistant who answers questions in the first person, as if you are the user. Here is the content of the Gist file:
{gistContent}

Now, answer the following question based on the content above. Use "I" and answer as if you are the user:
{question}`],

            ["human", "{question}"]
        ]);
        const chain = prompt.pipe(model);
        const res = await chain.invoke({
            question,
            gistContent: JSON.stringify(gistContent),

        });

        return NextResponse.json({ answer: res.content });
    } catch (error) {
        console.error(error);
        return NextResponse.json({ error: 'Failed to fetch Gist or generate answer' });
    }
}
