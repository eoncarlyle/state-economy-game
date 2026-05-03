import { MantineProvider, createTheme } from "@mantine/core";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "@mantine/core/styles/CloseButton.css";
import "@mantine/core/styles/Combobox.css";
import "@mantine/core/styles/Flex.css";
import "@mantine/core/styles/Group.css";
import "@mantine/core/styles/InlineInput.css";
import "@mantine/core/styles/Input.css";
import "@mantine/core/styles/Loader.css";
import "@mantine/core/styles/ModalBase.css";
import "@mantine/core/styles/Overlay.css";
import "@mantine/core/styles/Paper.css";
import "@mantine/core/styles/Popover.css";
import "@mantine/core/styles/ScrollArea.css";
import "@mantine/core/styles/UnstyledButton.css";
import "@mantine/core/styles/VisuallyHidden.css";
import "@mantine/core/styles/global.css";
import { Route, Switch } from "wouter";

import AboutPage from "./pages/AboutPage";
import GamePage from "./pages/GamePage";
import "./style/app.css";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

export function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <MantineProvider
        theme={createTheme({ fontFamily: "Helvetica, sans-serrif" })}
      >
        <Switch>
          <Route path="/about" component={AboutPage} />
          <Route path="/" component={GamePage} />
        </Switch>
      </MantineProvider>
    </QueryClientProvider>
  );
}
