import React, { useState } from 'react';

function InputSample() {

    // useState를 사용하여 text 상태 선언 및 초기화 (초기값은 빈 문자열)
    const [text, setText] = useState('');

    // 이벤트 객체(e)를 받아서 해당 이벤트 타겟의 값(e.target.value)을 상태로 설정
    const onChange = (e) => {
        setText(e.target.value);
    }

    // text 상태 값을 빈 문자열로 설정하여 입력 필드를 초기화
    const onReset = () => {
        setText('');
    }

    return (
        <div>
            {/* 입력 필드에 onChange 핸들러와 value 속성을 설정하여 상태와 동기화 */}
            <input onChange={onChange} value={text} />
            {/* onReset 함수를 호출하는 버튼 */}
            <button onClick={onReset}>초기화</button>
            <div>
                {/* 현재 상태 값을 출력 */}
                <b>값: {text}</b>
            </div>
        </div>
    );
}

export default InputSample;
