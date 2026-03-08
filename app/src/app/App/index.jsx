import { Navigation } from "../Navigation";
import { useRedirect } from "./hooks/useRedirect";

export default function App() {
  const { initialRouteName, isLoading: isRedirectLoading } = useRedirect();

  if (isRedirectLoading) {
    return null;
  }

  return <Navigation initialRouteName={initialRouteName} />;
}
