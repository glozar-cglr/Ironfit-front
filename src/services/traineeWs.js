import { _axios } from './api';

export const signUpTraineeWs = (data) => {
    return _axios.post("/trainees", data)
}