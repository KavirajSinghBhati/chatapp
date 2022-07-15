import React, { createContext, useEffect, useState } from "react";
import { database } from "../misc/firebase.config";

import { transformToArrayWithId } from "../misc/helper";

const RoomsContext = createContext();

export const RoomsProvider = ({ children }) => {
  const [rooms, setRooms] = useState(null);
  useEffect(() => {
    const roomListRef = database.ref("rooms");
    roomListRef.on("value", snapshot => {
      const data = transformToArrayWithId(snapshot.val());
      setRooms(data);
    });
    return () => {
      roomListRef.off();
    };
  }, []);
  return (
    <RoomsContext.Provider value={rooms}>{children}</RoomsContext.Provider>
  );
};
