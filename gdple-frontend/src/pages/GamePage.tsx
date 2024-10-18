import EconomyDiagram from "../components/EconomyDiagram";
import Guesses from "../components/Guesses";

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

import { Link } from "wouter";

export default function GamePage() {
  return (
    <>
      <h1 className="gdple-heading">
        GDP<span style={{ color: "#ffc107" }}>LE</span>
      </h1>
      <EconomyDiagram />
      <Guesses />
      <Link href="/about" className="center-link">
        How to play/about this project
      </Link>
    </>
  );
}
