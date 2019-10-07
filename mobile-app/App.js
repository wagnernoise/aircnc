import React from "react";
import { YellowBox } from "react-native";
import Routes from "./src/routes";

YellowBox.ignoreWarnings(["Unreconized WebSocket"]);
export default function App() {
  return <Routes />;
}
