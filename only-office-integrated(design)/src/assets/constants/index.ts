import { TFrameConfig } from "@onlyoffice/docspace-react";

type TEvent = Event | String;

function onAppReady(e: TEvent): void {
  console.log("ONLYOFFICE DocSpace App is ready!");
}

function onAppError(e: TEvent) {
  console.log(e);
}

export function onLoadComponentError(
  errorCode: Number,
  errorDescription: String
): void {
  console.log(errorDescription);
}

export const defaultConfig: TFrameConfig = {
    buttonColor: "#5299E0",
    destroyText: "",
    checkCSP: true,
    disableActionButton: false,
    downloadToEvent: false,
    editorCustomization: {},
    editorGoBack: true,
    editorType: "desktop",
    events: {
      onAppError,
      onAppReady,
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
    height: "100%",
    id: null,
    infoPanelVisible: true,
    locale: null,
    mode: "manager",
    name: "frameDocSpace",
    requestToken:
      "m3FDTWhx7dpByzyK8dou4YqIxqaFqT96XLx1myCT8uxw2misNTlrZNsTv5HZGa2FBfiao3TGT2CweFIm8mAn/vgZj1UBkgDDmteikm+V690Ocwu7raHi6jtzlz3Tfbvc/baXAssqEersMXuljUrKnqaFqzEANdrchcu3pQVQ24E=",
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
    width: "100%",
    withBreadCrumbs: true,
    withSearch: true,
    withSubtitle: true,
    keysForReload: [""],
    waiting: false,
  };
  