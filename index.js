import { NativeModules, Platform } from "react-native";

const isAndroid = Platform.OS === "android";

const { RNTestFlight } = NativeModules;
const Main = isAndroid ? { isTestFlight: false } : RNTestFlight;

export default Main;
