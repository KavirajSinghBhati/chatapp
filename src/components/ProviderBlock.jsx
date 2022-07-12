import React, { useState } from "react";
import { Alert, Button, Icon, Tag } from "rsuite";
import { auth } from "../misc/firebase.config";
import firebase from "firebase/app";

const ProviderBlock = () => {
  const [isConnected, setIsConnected] = useState({
    "google.com": auth.currentUser.providerData.some(
      data => data.providerId === "google.com"
    ),
    "github.com": auth.currentUser.providerData.some(
      data => data.providerId === "github.com"
    ),
  });

  const updateIsConnected = (providerId, value) => {
    setIsConnected(p => ({ ...p, [providerId]: value }));
  };

  const unlink = async providerId => {
    try {
      if (auth.currentUser.providerData.length === 1) {
        throw new Error(`You can not disconnect from ${providerId}`);
      }
      await auth.currentUser.unlink(providerId);
      updateIsConnected(providerId, false);
      Alert.info(`Disconnected from ${providerId}`, 4000);
    } catch (err) {
      Alert.error(err.message, 4000);
    }
  };

  const unlinkGithub = () => {
    unlink("github.com");
  };

  const unlinkGoogle = () => {
    unlink("google.com");
  };

  const link = async provider => {
    try {
      await auth.currentUser.linkWithPopup(provider);
      Alert.info(`Linked with ${provider.providerId}`, 4000);
      updateIsConnected(provider.providerId, true);
    } catch (err) {
      Alert.error(err.message, 4000);
    }
  };

  const linkGithub = () => {
    link(new firebase.auth.GithubAuthProvider());
  };

  const linkGoogle = () => {
    link(new firebase.auth.GoogleAuthProvider());
  };

  return (
    <div>
      {isConnected["google.com"] && (
        <Tag color="green" closable onClose={unlinkGoogle}>
          <Icon icon="google" /> Connected
        </Tag>
      )}
      {isConnected["github.com"] && (
        <Tag closable onClose={unlinkGithub}>
          <Icon icon="github" /> Connected
        </Tag>
      )}
      <div className="mt-2">
        {!isConnected["google.com"] && (
          <Button block color="green" onClick={linkGoogle}>
            <Icon icon="google" /> Link to Google
          </Button>
        )}
        {!isConnected["github.com"] && (
          <Button block onClick={linkGithub}>
            <Icon icon="github" /> Link to GitHub
          </Button>
        )}
      </div>
    </div>
  );
};

export default ProviderBlock;
