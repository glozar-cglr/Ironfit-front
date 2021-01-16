import { _axios } from './api';

export const getTrainersWs = (data) => {
    return _axios.post("/trainees", data)
}