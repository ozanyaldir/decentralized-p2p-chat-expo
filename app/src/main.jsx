import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { LoadingProvider } from "./context/LoadingContext";
import App from "./app/App";
import { KeyboardProvider } from "react-native-keyboard-controller";
import { Provider } from "react-redux";
import { store, persistor } from "./store/index";
import { PersistGate } from "redux-persist/integration/react";
import BareApiProvider from "./context/BareApiContext";
import { rpcHandler } from "./lib/rpc";

export const Main = () => {
  return (
    <>
      <StatusBar style="light" />

      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <BareApiProvider rpcHandler={rpcHandler}>
            <SafeAreaProvider>
              <KeyboardProvider>
                <LoadingProvider>
                  <GestureHandlerRootView style={{ flex: 1 }}>
                    <NavigationContainer>
                      <App />
                    </NavigationContainer>
                  </GestureHandlerRootView>
                </LoadingProvider>
              </KeyboardProvider>
            </SafeAreaProvider>
          </BareApiProvider>
        </PersistGate>
      </Provider>
    </>
  );
};
