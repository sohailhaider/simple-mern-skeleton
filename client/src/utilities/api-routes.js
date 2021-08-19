const serverURL = process.env.REACT_APP_SERVER_URL;

export const usersEndPoint = `${serverURL}/users`;
export const userLoginEndPoint = `${usersEndPoint}/login`;
export const userSignupEndPoint = `${usersEndPoint}/signup`;
