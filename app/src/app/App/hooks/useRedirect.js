import { useEffect, useState } from "react";

/**
 * Custom hook to determine the initial route for navigation.
 * @returns {{
 *  isLoading: boolean,
 *  initialRouteName: string | null
 * }} - An object containing the loading state and initial route name.
 */
export const useRedirect = () => {
  const [isLoading, setIsLoading] = useState(true);

  const [initialRouteName, setInitialRouteName] = useState(null);

  useEffect(() => {
    let timeout;

    void (async () => {
      setInitialRouteName("ChatRoomsList");
      setIsLoading(false);
    })();

    return () => clearTimeout(timeout);
  }, []);

  return {
    isLoading,
    initialRouteName,
  };
};
