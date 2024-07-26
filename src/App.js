import React from 'react';
import Hello from "./Hello";
import Wrapper from "./Wrapper";

function App() {
    return (
        <Wrapper>
            {/* isSpecial 의 값을 생략하면 TRUE */}
            <Hello name="react" color="red" isSpecial={true} />
            <Hello color="pink" />
        </Wrapper>
    );
}

export default App;
