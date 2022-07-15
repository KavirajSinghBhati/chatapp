import React, { useEffect, useRef, useState } from "react";
import DashboardToggle from "./dashboard/DashboardToggle";
import CreateRoomBtnModal from "./dashboard/CreateRoomBtnModal";
import ChatRoomList from "./rooms/ChatRoomList";
import { Divider } from "rsuite";

const Sidebar = () => {
  const [height, setHeight] = useState(0);
  const heightRef = useRef();
  useEffect(() => {
    if (heightRef.current) {
      setHeight(heightRef.current.scrollHeight);
    }
  }, [heightRef]);
  return (
    <div className="h-100 pt-2">
      <div ref={heightRef}>
        <DashboardToggle />
        <CreateRoomBtnModal />
        <Divider>Join conversation</Divider>
      </div>
      <ChatRoomList aboveElHeight={height} />
    </div>
  );
};

export default Sidebar;
