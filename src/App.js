import React from 'react';
import Hello from "./Hello";

function App() {
    const name = "react";
    const style = {
        backgroundColor: "black",
        color: "aqua",
        fontSize: "1.8rem",
        padding: "1rem",
    };


    return (
        // Fragment : dom을 좀더 유동적으로 관히하기 위함
        <>
            {/* 주석은 화면에 보이지 않습니다 */}
            /* 중괄호로 감싸지 않으면 화면에 보입니다 */
            <Hello
            />
            <div style={style}>{name}</div>
            <div className="gray-box"></div>
        </>
    );
}

export default App;
