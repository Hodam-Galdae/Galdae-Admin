import axiosInstance from './axiosInstance';

export interface Member {
    id: string,
    nickname: string,
    university: string,
    universityArea: string,
    isAuthenticated: string,
}

export const getMember = async() => {
    const result = await axiosInstance.get<Member[]>('/admin/members');
    return result.data;
};

export const accept = async(id: string) => {
    const result = await axiosInstance.post('/admin/check', {id});
    return result.data;
}