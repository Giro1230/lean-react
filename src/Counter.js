// useState : 컴포넌트의 상태 관리를 위한 함수
import React, {useState} from "react";

function Counter() {

    // useState 호출 시 배열 반환, 첫 번째 요소는 상태 값, 두 번째 요소는 상태 값을 갱신하는 함수 (Setter)
    const [number, setNumber] = useState(0);

    // const onIncrease = () => {
    //     console.log('+1')
    //
    //     // Setter 호출 및 데이터 변환
    //     setNumber(number + 1)
    // }

    // 함수 형태의 업데이트
    const onIncrease = () => {
        console.log('+1')

        // Setter 호출 및 상태 갱신, 현재 상태 값을 인자로 받아 새 상태 값을 반환하는 함수형 업데이트 사용
        setNumber(prevNumber => prevNumber + 1)
    }

    // const onDecrease = () => {
    //     console.log('-1')
    //
    //     // Setter 호출 및 데이터 변환
    //     setNumber(number - 1)
    // }

    // 함수 형태의 업데이트
    const onDecrease = () => {
        console.log('-1')

        // Setter 호출 및 상태 갱신, 현재 상태 값을 인자로 받아 새 상태 값을 반환하는 함수형 업데이트 사용
        setNumber(prevNumber => prevNumber - 1)
    }

    return (
        <div>
            {/* Setter 함수로 값이 변화되었으면 데이터 최신화 */}
            <h1>{number}</h1>
            <button onClick={onIncrease}>+1</button>
            <button onClick={onDecrease}>-1</button>
        </div>
    );
}

export default Counter;