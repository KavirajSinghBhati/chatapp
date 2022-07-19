import React from "react";
import { Button, Divider, Drawer, Alert } from "rsuite";
import EditableInput from "../EditableInput";
import ProviderBlock from "../ProviderBlock";
import AvatarUploadButton from "./AvatarUploadButton";

import { useProfile } from "../../context/profile.context";
import { database } from "../../misc/firebase.config";
import { getUserUpdates } from "../../misc/helper";

const Dashboard = ({ onSignOut }) => {
  const { profile } = useProfile();
  const onSave = async newData => {
    try {
      const updates = await getUserUpdates(
        profile.uid,
        "name",
        newData,
        database
      );
      await database.ref().update(updates);
      Alert.success("Nickname has been updated", 4000);
    } catch (err) {
      Alert.error(err.message, 4000);
    }
  };
  return (
    <>
      <Drawer.Header>
        <Drawer.Title>Dashboard</Drawer.Title>
      </Drawer.Header>
      <Drawer.Body>
        <h3>Hey, {profile.name}</h3>
        <ProviderBlock />
        <Divider />
        <EditableInput
          name="nickname"
          initialValue={profile.name}
          onSave={onSave}
          label={<h6 className="mb-2">Nickname</h6>}
        />
        <AvatarUploadButton />
      </Drawer.Body>
      <Drawer.Footer>
        <Button block color="red" onClick={onSignOut}>
          Sign out
        </Button>
      </Drawer.Footer>
    </>
  );
};

export default Dashboard;
