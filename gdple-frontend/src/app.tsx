import EconomyDiagram from "./components/EconomyDiagram";
import Guesses from "./components/Guesses";

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

import { createTheme, MantineProvider } from "@mantine/core";

import "./style/app.css";

export function App() {
  return (
    <MantineProvider
      theme={createTheme({ fontFamily: "Helvetica, sans-serrif" })}
    >
      <div className="landing-copy">
        <h1 className="gdple-heading">
          GDP<span style={{ color: "#ffc107" }}>LE</span>
        </h1>
        <p>
          Guess which US state has this GDP breakdown! A new puzzle created
          every 24 hours. Puzzle data is from Bureau of Economic Analysis,
          collected for 2022. Email{" "}
          <a href="mailto:gdple@iainschmitt.com">Iain</a> to report any issues!
        </p>
      </div>
      <EconomyDiagram />
      <Guesses />
    </MantineProvider>
  );
}
