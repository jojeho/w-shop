'use client'
import { useEffect, useLayoutEffect, useState } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { UserContext, getUser } from '../../components/board/appwrite2';


export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    const [queryClient] = useState(() => new QueryClient());
   
    const [user, setUser] = useState('');

    //setUser('a')

    useEffect(() => {
        const users = async () => {
            const user = await getUser();

             if (!user) return;
       
           setUser(user)
        };

        users();
    }, []);


    return (
        
        <QueryClientProvider client={queryClient}>
            <UserContext.Provider value={{ user, setUser }}>
                {children}
            </UserContext.Provider>
        </QueryClientProvider>



    );
}