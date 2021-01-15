import { _axios } from './api';

export const signUpTrainerWs = (data) => {
    return _axios.post("/trainers", data)
}