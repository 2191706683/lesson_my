import { MemberEntity } from "../model/member"

const MemberRow = ({member}: {member: MemberEntity}) => {
    return (
        <>
            <tr key={member.id}>
                <td><img src={member.avatar_url} style={{ maxWidth: '10rem' }} /></td>
                <td>{member.id}</td>
                <td>{member.login}</td>
            </tr>
        </>
    )
}
export default MemberRow