import React, { useState } from "react";

function Ch6(){
    const [answer, setAnswer] = useState("");
    const handleChange = ({ target : { value }}) => setAnswer(value);
    return <div className="chapters">
        <h2 className="title">6. 여행</h2>
        <p className="story">그녀는 나를 쓰다듬는 걸 좋아했어요.<br/>쓰다듬는 느낌이 좋다면서, 계속 쓰다듬었지요.<br/>그 느낌이 싫지 않았기에, 가끔은 애교를 부리기도 하였어요.<br/>그럴 때마다 그녀는 나를 쓰다듬는 대신, 꼭 안아주었어요.<br/>그녀의 품은 정말 따뜻했어요.<br/>나를 안으면서 그녀도 기분 좋게 웃었어요.<br/>그 순간도, 나는 정말 행복했어요.</p>
<p>한 걸음 간다는 것은, 두 걸음 간다는 것은 단계를 뜻합니다.<br/><br/>지금부터 단계적으로 행동하십시오.<br/>단계는 중요한 요소입니다.<br/>단계란 우리가 걸어가야 할, 우리가 따라가야 할 방법입니다.<br/>단계가 당신의 걸음이 향하고 있는 피난처입니다.<br/>다만, 한가지 경고할 것은, 당신이 걸어온 길에서 악마, 저주를 품은 숫자 6, 불완전함을 뜻하는 숫자 6 정도는 덜어내는것이 좋습니다.<br/><br/>당신은 얼마나 왔습니까?</p>

      <form className="answerField">
    <input class="input is-rounded is-small" type="text" placeholder="정답을 이곳에 입력하세요" value={answer} onChange={handleChange} />
    <button class="button is-small is-rounded" type="submit">정답 제출</button>
</form>
<p className="hint">단계 , 를 무엇이라고 생각합니까?<br/><br/>덜어냄은 뒤로 돌아옴과 같습니다.</p>
    </div>
}

export default Ch6