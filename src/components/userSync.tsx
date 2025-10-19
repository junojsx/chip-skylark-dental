"use client";

import { syncUser } from "@/lib/actions/users";
import { useUser } from "@clerk/nextjs";
import { useEffect } from "react";
const UserSync = () => {
  const { isSignedIn, isLoaded } = useUser();

  useEffect(() => {
    const handleUserSync = async () => {
      if (isLoaded && isSignedIn) {
        try {
          await syncUser();
        } catch (error) {
          console.error("Error syncing user:", error);
        }
      }
    };
    handleUserSync();
  }, [isSignedIn, isLoaded]);
  return null;
};

export default UserSync;
