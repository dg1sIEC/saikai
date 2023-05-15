import React, { useState } from "react";
import img2 from './image/002.jpg'
function Ch2(){
    const [answer, setAnswer] = useState("");
    const handleChange = ({ target : { value }}) => setAnswer(value);
    return <div className="chapters">
        <h2 className="title">2. Flower</h2>
        <p className="story">첫 만남 이후, 그녀는 내가 보일때마다 내 이름을 붙러주었어요<br/> 그녀가 이름을 부르면 내가 다가가서 꽃이 되어 주기라도 하는 줄 알았나 보죠.<br/>
그런데 계속 불리다 보니, 내가 진짜 꽃이 된 기분이예요</p>
      <img className="questionImg" src={img2} /><br/>


      <form className="answerField">
    <input class="input is-rounded is-small" type="text" placeholder="정답을 이곳에 입력하세요" value={answer} onChange={handleChange} />
    <button class="button is-small is-rounded" type="submit">정답 제출</button>
</form>
<p className="hint">꽃으로 하는 성냥문제</p>
    </div>
}

export default Ch2