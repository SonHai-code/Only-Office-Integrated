import { Box, Button, Typography } from "@mui/material";
import { lightGreen } from "@mui/material/colors";
import { DocSpace, TFrameConfig } from "@onlyoffice/docspace-react";
import React, { useEffect, useState } from "react";

const defaultConfig: TFrameConfig = {
  buttonColor: "#5299E0",
  destroyText: "",
  checkCSP: true,
  disableActionButton: false,
  downloadToEvent: false,
  editorCustomization: {},
  editorGoBack: true,
  editorType: "desktop",
  events: {
    onAppError: null,
    onAppReady: null,
    onNoAccess: null,
    onNotFound: null,
    onContentReady: null,
    onAuthSuccess: null,
    onCloseCallback: null,
    onDownload: null,
    onEditorCloseCallback: null,
    onSelectCallback: null,
    onSignOut: null,
  },
  filter: {
    count: 100,
    page: 1,
    search: "",
    sortorder: "descending",
    sortby: "DateAndTime",
    withSubfolders: false,
  },
  filterParam: "ALL",
  frameId: "ds-frame",
  height: "1300px",
  id: null,
  infoPanelVisible: true,
  locale: null,
  mode: "manager",
  name: "frameDocSpace",
  requestToken: null,
  rootPath: "/rooms/shared/",
  selectorType: "exceptPrivacyTrashArchiveFolders",
  showFilter: false,
  showHeader: false,
  showMenu: false,
  showSelectorCancel: false,
  showSelectorHeader: false,
  showSettings: false,
  showSignOut: true,
  showTitle: true,
  src: "https://sonhai.onlyoffice.com",
  theme: "Base",
  type: "desktop",
  viewAs: "row",
  viewTableColumns: "Name,Type,Tags",
  width: "1300px",
  withBreadCrumbs: true,
  withSearch: true,
  withSubtitle: true,
  waiting: false,
  keysForReload: [""],
};

type TFrame = {
  frameId: String;
  showMenu: Boolean;
};

type TDocspace = {
  login(user: String, password: String): Promise<void>;
  initFrame(frame: TFrame): void;
  initManager(config: TFrameConfig): TDocspaceManager;
} | null;

type TDocspaceManager = {
  login(username: String, password: String): Promise<void>;
};

export default function DocspaceComponent(): JSX.Element {
  const [docspace, setDocspace] = useState<TDocspace>(null);
  const [isAuthenticated, setIsauthenticated] = useState(false);

  // const handleSDKApi = () => {
  //   // Load the APIs from the url.
  //   // Create script element with specific attributes: src and async.
  //   const script = document.createElement("script");
  //   script.src = url;
  //   script.async = true;

  //   // Do this after the script was loaded
  //   script.onload = () => {
  //     console.log("SDK Script was loaded!");
  //     if (window.DocSpace) {
  //       setDocspace(window.DocSpace.SDK);

  //       console.log(`Docspace SDK ${window.DocSpace.SDK}`);
  //     }
  //   };

  //   script.onerror = () => {
  //     console.log(`Fail to load the SDK`);
  //   };

  //   // Add the script element to the DOM tree
  //   document.body.appendChild(script);

  //   return () => {
  //     document.removeChild(script);
  //   };
  // };

  const handleLogin = async () => {
    if (docspace) {
      try {
        const username = "cd.sonhai@gmail.com";
        const password = "tiMsoh-pybrur-8symsu";

        const docSpaceManager = docspace.initManager(defaultConfig);

        const login = await docSpaceManager.login(username, password);
        console.log(`Login Successfully: ${login}`);
        setIsauthenticated(true);
        initializeFrame();
      } catch (err) {
        console.log(`Login Failed: ${err}`);
      }
    } else {
      console.log("Failed to load SDK APIs");
    }
  };

  const initializeFrame = () => {
    if (docspace && isAuthenticated) {
      const frame = docspace.initFrame({
        frameId: "frame",
        showMenu: true,
      });
      console.log(`Frame was initialize successfully!`);
    } else {
      console.log(`Please login first`);
    }
  };

  const handleFramePolicy = () => {
    const frame: any = document.getElementById("ds-frame");

    console.log(`In handleFramePolicy function ${frame}`);

    if (frame !== undefined) {
      frame.contentWindow.postMessage("https://sonhai.onlyoffice.com");

      window.addEventListener("message", (event) => {
        if (event.origin === "http://localhost:5173") {
          console.log(event.data);
        } else {
          // The data not sent from your site!!!
          return;
        }
      });
    }
  };

  useEffect(() => {
    handleFramePolicy();
  }, []);

  return (
    <Box>
      <Box id="ds-frame"></Box>
      {!isAuthenticated ? (
        <Button onClick={handleLogin}>Login and Initialize the Frame</Button>
      ) : (
        <Typography>
          Frame initialized. You can now use other docSpace functions
        </Typography>
      )}
    </Box>
  );
}
