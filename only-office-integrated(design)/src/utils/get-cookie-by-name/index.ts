
const getCookieValueByName = (name: String) => {
    const cookieValue = document.cookie.split("; ") .find((row) => row.startsWith(`${name}=`))
  ?.split("=")[1];
  return cookieValue;
}

const CookieUtils = {
    getCookieValueByName,
}

export default CookieUtils;

