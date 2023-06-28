import { useState, useEffect, useReducer } from 'react'
import { MemberEntity } from './model/member'
import { getMembersCollection } from './api/memberApi'
import MemberRow from './components/MemberRow'

const initialState = {
  memberCollection: []
}
// useReducer  state  getters  actions
// reducer  纯函数  返回一个新的状态
const reducer = (state, action) => {
  switch(action.type) {
    case 'SET_COLLECTION':
      return {...state, memberCollection: action.payload}
    default:
      return state
  }
}

function App() {
  // 逻辑   
  // 响应式 空数组 
  // 生命周期 
  // 不要直接请求 redux 
  // const [memberCollection, setMemberCollection] = useState<MemberEntity[]>([])
  const [state, dispatch] = useReducer(reducer, 
    initialState)
  // 挂载后， 更新后 
  useEffect(() => {
    const fetchData = async () => {
      const memberCollection = await getMembersCollection()
      // setMemberCollection(memberCollection)
      dispatch({type: 'SET_COLLECTION', payload: memberCollection})
    }
    fetchData()
  }, [])
  return (
    <>
     <table>
        <thead>
          <tr>
            <th>Avatar</th>
            <th>Id</th>
            <th>Name</th>
          </tr>
        </thead>
     </table>
     <tbody>
      {
        state.memberCollection.map((member) => (
          <MemberRow key={member.id} member={member}/>
        ))
      }
     </tbody>
    </>
  )
}

export default App
