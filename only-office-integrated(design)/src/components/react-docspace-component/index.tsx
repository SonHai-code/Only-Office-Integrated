import { DocSpace, TFrameConfig } from "@onlyoffice/docspace-react";
import React, { useRef } from "react";
import { defaultConfig, onLoadComponentError } from "../../assets/constants";

export default function ReactDocspaceComponent() {
  return (
    <pre>
      <DocSpace url="https://sonhai.onlyoffice.com/" config={defaultConfig} />
    </pre>
  );
}
