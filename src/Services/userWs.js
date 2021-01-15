import { _axios } from './api';

export const login = (data)=>{
    return _axios.post("/user/login",data)
};

export const signup = (data)=>{
    return _axios.post("/user/signup",data)
};
export const updateUser = (user) => {
    return _axios.patch(
      `/reservation/${user._id}`,
      user
    );
  };
export const logout = () => {
    return _axios.post("/user/logout")
}