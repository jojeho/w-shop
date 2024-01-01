'use client'
import { useEffect, useState } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';

import { UserContext, getUser } from '../../components/board/appwrite';

export default function RootLayout({ children }) {

    const [queryClient] = useState(() => new QueryClient());
    const [user, setUser] = useState(null);


    useEffect(() => {
        const user = async () => {
            const user = await getUser();

            if (!user) return;

            setUser(user);
        };

        user();
    }, []);

    return (
        <UserContext.Provider value={{ user, setUser }}>
            <QueryClientProvider client={queryClient}>
                {
                    children
                }
            </QueryClientProvider>
        </UserContext.Provider>
    );
}