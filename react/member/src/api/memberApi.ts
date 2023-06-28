import { MemberEntity } from "../model/member"
import Axios, { AxiosResponse } from "axios";
const githubMembersUrl = "https://api.github.com/orgs/lemoncode/members"

export const getMembersCollection = async (): Promise<MemberEntity[]> => {
    // 容错处理
    // 数据转换
    const promise = new Promise<MemberEntity[]>((resolve, reject) => {
        try {
            Axios.get(githubMembersUrl).then((response) => {
                resolve(mapMemberListApiToModel(response));
            })
        } catch (error) {
            reject(error);
        }
    })
    return promise;
}
const mapMemberListApiToModel = ({ data }: AxiosResponse<any[]>): MemberEntity[] =>
    data.map(githubMember => ({
        id: githubMember.id,
        login: githubMember.login,
        avatar_url: githubMember.avatar_url
    }))

