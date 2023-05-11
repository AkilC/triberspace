import { createContext, useContext, useState, useEffect } from 'react';
import { Client } from 'colyseus.js';

const SocketContext = createContext();

export const useSocket = () => {
  return useContext(SocketContext);
};

export const SocketProvider = ({ children }) => {
  const [client, setClient] = useState(null);
  const [room, setRoom] = useState(null);

  useEffect(() => {
    const endpoint = process.env.REACT_APP_COLYSEUS_SERVER_URL || 'ws://localhost:3001';
    const newClient = new Client(endpoint);
    setClient(newClient);
  }, []);

  useEffect(() => {
    const joinRoom = async () => {
      if (!client) return;

      const domain = window.location.hostname;
      const roomId = `${domain}_${Math.random().toString(36).substr(2, 9)}`;
      let newRoom;
      try {
        // Try joining an existing room by ID
        newRoom = await client.joinById(roomId);
      } catch (e) {
        // If room not found, create a new room with the desired ID
        newRoom = await client.create('my_room', { roomId, domain });
      }

      console.log("NewRoom", newRoom);
      setRoom(newRoom);
    };

    joinRoom();
  }, [client]);

  return <SocketContext.Provider value={{ client, room }}>{children}</SocketContext.Provider>;
};
