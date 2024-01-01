import { Account, Client, Databases, ID } from 'appwrite';
import { createContext } from 'react'
const client = new Client();
const account = new Account(client);

const database = process.env.NEXT_PUBLIC_DATABASE;
const collection = process.env.NEXT_PUBLIC_MESSAGES_COLLECTION;

client.setEndpoint(process.env.NEXT_PUBLIC_ENDPOINT).setProject(process.env.NEXT_PUBLIC_PROJECT);

const databases = new Databases(client);

export const addMessage = async (message) => {
  await databases.createDocument(
    database,
    collection,
    ID.unique(),
    {
      message,
    }
  );
};

export const getMessages = async () => {
    const { documents: messages } = await databases.listDocuments(database, collection);
  
    return messages;
  };

  export const deleteMessage = async (id) => {
    await databases.deleteDocument(database, collection, id);
  };






  export const signUp = async (email, password) => {
    return await account.create(ID.unique(), email, password);
  };
  
  export const signIn = async (email, password) => {
    return await account.createEmailSession(email, password);
  };
  
  export const signOut = async () => {
    return await account.deleteSessions();
  };
  
  export const getUser = async () => {
    try {
      return await account.get();
    } catch {
      return undefined;
    }
  };
  
  
  // import createContext from react beforehand
  export const UserContext = createContext(null);