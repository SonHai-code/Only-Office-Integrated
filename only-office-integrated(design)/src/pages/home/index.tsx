import { Box, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import FilesService from "../../services/files-service";
import { DocumentEditor, IConfig } from "@onlyoffice/document-editor-react";
import DocspaceComponent from "../../components/docspace-component";

interface IHomeProps {}

const Home = () => {
  const [data, setData] = useState<IConfig | undefined>(undefined);

  const home;

  const handleData = async () => {
    try {
      const token = localStorage.getItem("token");

      if (token) {
        console.log(`Get the token from the local storage: ${token}`);
        const response = await FilesService.openFileById(
          "784215",
          "m3FDTWhx7dpByzyK8dou4YqIxqaFqT96XLx1myCT8uxw2misNTlrZNsTv5HZGa2FBfiao3TGT2CweFIm8mAn/vgZj1UBkgDDmteikm+V690Ocwu7raHi6jtzlz3TfbvcYJBq6rVqxqTVLmoI6ACyO6NAnw7TurorvR0/zbCGwQE="
        );
        setData(response.data.response);

        console.log(response.data.response);
      }
    } catch (error: any) {
      const resMessage =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      console.log(resMessage);
    }
  };

  useEffect(() => {
    handleData();
  }, []);

  return (
    <Box>
      <Typography variant="h6">Home Page</Typography>
      {data ? (
        <DocumentEditor
          id="ds-frame"
          config={data}
          documentServerUrl="https://sonhai.onlyoffice.com"
        />
      ) : (
        <Typography variant="h6">Cannot load the data</Typography>
      )}
    </Box>
  );
};

export default Home;
