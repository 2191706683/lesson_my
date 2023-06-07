import React, { useState, useEffect } from 'react';
// 内置的一批最重要的hooks函数
// Function Component
export const MyChildComponent :React.FC = () => {
    useEffect(() => {
        console.log('子组件挂载了');
        // unmount
        return () => {
            console.log('unmount时执行');
            
        }
    }, [])
    return <h4>Hello from Child Component</h4>;
}

export const MyComponent :React.FC = () => {
    const [ visible, setVisible ] = useState(false);
    useEffect(() => {
        console.log('---------');
    }, [visible])
    return (
        <>
            { visible && <MyChildComponent />}
            <button onClick={() => setVisible(!visible)}>
                Toggle Child Component Visibility
            </button>
        </>
    )
}


// interface UserInfo {
//     name: string;
//     lastname: string;
// }
/* export const MyComponent :React.FC = () => {
    // JSX
    const [ userInfo, setUserInfo ] = useState<UserInfo>({
        name: "John",
        lastname: "Doe"
    });
    return (
        <>
            <h4>{userInfo.name} {userInfo.lastname}</h4>
            <input  
                type='text'
                value={userInfo.name}
                onChange={(e) => setUserInfo({
                    ...userInfo,
                    name: e.target.value
                })}
            />
            <input  
                type='text'
                value={userInfo.lastname}
                onChange={(e) => setUserInfo({
                    ...userInfo,
                    lastname: e.target.value
                })}
            />
        </>        
    )
} */

// export const MyComponent :React.FC = () => {
//     // JSX
//     const [ username, setUsername ] = React.useState("");

//     // 生命周期
//     useEffect(() => {
//         // onMount
//         // console.log('挂载中...');
//         setTimeout(() => {
//             setUsername("John");
//         }, 1500)
//     }, [])
//     return (
//         <>
//             <h4>{username}</h4>
//             <input  
//                 type='text'
//                 value={username}
//                 onChange={(e) => setUsername(e.target.value)}
//             />
//         </>        
//     )
// }

export default MyComponent;