'use client'
import { useContext, useState } from 'react';
import { useMutation, useQuery, useQueryClient  } from 'react-query';

import { addMessage, getMessages, deleteMessage, UserContext, signOut } from '../../components/board/appwrite';
import { useRouter ,usePathname  } from 'next/navigation'
import path from 'path';
import {Button} from  "@nextui-org/react";



export default function Home() {
    const queryClient = useQueryClient();
    const [input, setInput] = useState('');
    const router = useRouter();
    const pathname = usePathname()
    const { user, setUser } = useContext(UserContext);
   
        const queryKey=['mmm']


    const addMessageMutation = useMutation(addMessage, {
        onSuccess: () => {
            setInput('');
        
           
            queryClient.invalidateQueries(queryKey);      

         
          
        },
    });

    const { data: messages } = useQuery(queryKey, getMessages);

    const deleteMessageMutation = useMutation(deleteMessage, {
        onSuccess: () => {
            queryClient.invalidateQueries(queryKey );
       
        },
    });

    const canDelete = (userID, array) => {
        return array.some((element) => element.includes('delete') && element.includes(userID));
      };

    const handleSignOut = async () => {
        await signOut();

        setUser(null);
    };

    return (
        <main className="flex min-h-screen justify-center p-24 text-black">



            <div className="bg-white rounded-lg shadow-lg p-8">
                <h1 className="text-4xl py-8 font-bold text-center">Message board</h1>
                <ul className="space-y-4">
                    {messages?.map((message) => (
                        <li key={message.$id} className="flex items-center justify-between w-full space-x-4">
                            <p className="text-gray-700">{message.message}</p>
                            {canDelete(user?.$id, message.$permissions) && (
                            <button
                                onClick={() => deleteMessageMutation.mutate(message.$id)}
                                className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md"
                            >
                                Delete
                            </button>
                            )}


                        </li>
                    ))}
                </ul>
            
             

                {user && ( 

                    <div>
                        <textarea
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            className="w-full border border-gray-300 rounded-md p-2 mt-4"
                        />



                        <button
                        
                        onClick={() => addMessageMutation.mutate({ message: input, userId: user?.$id })}
                            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md mt-4"
                        >submit message </button>


                        <button
                            onClick={handleSignOut}
                            className="bg-red-500 ml-4 hover:bg-red-600 text-white px-4 py-2 rounded-md mt-4"
                        >
                            Sign out
                        </button>
                    </div>
                )}

            </div>


        </main>
    );
}