    import axios from "axios";
    import { FileAPIS } from "../../apis/file-apis";
    import CookieUtils from "../../utils/get-cookie-by-name";

    axios.defaults.withCredentials = true;

    const openFileById = (fileId: String, token: String) => {
    return axios.get(FileAPIS.openFile + `/${fileId}`, {
        params: {
            token
        },
        headers: {
            "Content-Type": "application/json; charset=utf-8",  
            Accept: "application/json",
        }, 
    })  
    }

    const getTest = () => {
        return axios.get("{{url.local.server}}/api/auth/test");
    }

    const getFolderById = (folderId: String, token: String) => {
        return axios.get(FileAPIS.getFolderById + `/${folderId}}`, {
            headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "application/json; charset=utf-8",  
                Accept: "application/json",
                'Access-Control-Allow-Headers': 'Content-Type, X-Amz-Date,Authorization,X-Api-Key,X-Amz-Security-Token',
                'Access-Control-Allow-Methods': 'OPTIONS,POST,GET,PUT,PATCH',
                'Access-Control-Allow-Credentials': 'true',
                'Access-Control-Allow-Origin': '*',
                'X-Requested-With': '*',
                "vary":"origin" 
                
            },
            withCredentials: false
        })
    }
        
    const FilesService = {openFileById, getFolderById, getTest};

    export default FilesService;