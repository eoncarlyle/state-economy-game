import "@mantine/core/styles/global.css";
import "@mantine/core/styles/ScrollArea.css";
import "@mantine/core/styles/UnstyledButton.css";
import "@mantine/core/styles/VisuallyHidden.css";
import "@mantine/core/styles/Paper.css";
import "@mantine/core/styles/Popover.css";
import "@mantine/core/styles/CloseButton.css";
import "@mantine/core/styles/Group.css";
import "@mantine/core/styles/Loader.css";
import "@mantine/core/styles/Overlay.css";
import "@mantine/core/styles/ModalBase.css";
import "@mantine/core/styles/Input.css";
import "@mantine/core/styles/InlineInput.css";
import "@mantine/core/styles/Flex.css";
import "@mantine/core/styles/Combobox.css";

import { Switch, Route } from "wouter";
import { createTheme, MantineProvider } from "@mantine/core";

import "./style/app.css";
import GamePage from "./pages/GamePage";
import AboutPage from "./pages/AboutPage";

export function App() {
  return (
    <MantineProvider
      theme={createTheme({ fontFamily: "Helvetica, sans-serrif" })}
    >
      <Switch>
        <Route path="/about" component={AboutPage} />
        <Route path="/" component={GamePage} />
      </Switch>
    </MantineProvider>
  );
}
