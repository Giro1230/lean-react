import React from 'react';

// 구조화 할당
// function Hello(props) {
//     return <div style={{color: props.color}}>안녕하세요 {props.name}</div>
// }

// 비구조화 할당
function Hello({color, name}) {
    return <div style={{color}}>안녕하세요 {name}</div>
}

Hello.defaultProps = {
    name: '이름없음'
}

export default Hello;