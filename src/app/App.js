import AppNavigator from "./appNavigator";
import { registerRootComponent } from "expo";

const App = () => {
  return <AppNavigator />;
};

export default registerRootComponent(App);
