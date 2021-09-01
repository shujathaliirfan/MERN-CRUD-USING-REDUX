     export const setAuthToken = (token) => {
    return localStorage.setItem("token", token);
  };
  
  export const getAuthToken = () => {
    return localStorage.getItem("token");
  };
  
  export const removeAuthToken = () => {
    localStorage.removeItem("token");
    return true;
  };