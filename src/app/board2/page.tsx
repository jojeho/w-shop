'use client'
import { useState } from 'react';
import { useMutation, useQuery ,useQueryClient } from 'react-query';

import { addMessage ,getMessages ,deleteMessage } from '../../components/board/appwrite2';

const messages = [
  { $id: 1, message: 'Hello world' },
  { $id: 2, message: 'Hello world 2' },
];

export default function Home() {
  const [input, setInput] = useState('');

  const queryClient = useQueryClient();

  const addMessageMutation = useMutation(addMessage, {
    onSuccess: () => {
      setInput('');
      queryClient.invalidateQueries('messages');
    },
  });

  const deleteMessageMutation = useMutation(deleteMessage, {
    onSuccess: () => {
      queryClient.invalidateQueries('messages');
    },
  });

  const { data: messages } = useQuery('messages', getMessages);

  return (
    <main className="flex min-h-screen justify-center p-24 text-black">
      <div className="bg-white rounded-lg shadow-lg p-8">
        
        <h1 className="text-4xl py-8 font-bold text-center">Message board</h1>
        <ul className="space-y-4">
          {messages?.map((message) => (
            <li key={message.$id} className="flex items-center justify-between w-full space-x-4">
              <p className="text-gray-700">{message.message}</p>
              <button 
               onClick={() => deleteMessageMutation.mutate(message.$id)}
              className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md">Delete</button>
            </li>
          ))}
        </ul>
        
        <textarea
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="w-full border border-gray-300 rounded-md p-2 mt-4"
        />
        <button
          onClick={() => addMessageMutation.mutate(input)}
          className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md mt-4"
        >
          Submit message
        </button>
      </div>
    </main>
  );
}