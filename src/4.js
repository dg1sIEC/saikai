import React, { useState } from "react";

function Ch4(){
    const [answer, setAnswer] = useState("");
    const handleChange = ({ target : { value }}) => setAnswer(value);
    return <div className="chapters">
        <h2 className="title">4. Blue</h2>
        <p className="story">그녀와 함께했던, 행복했던 날들이 생각나요.<br/>하루는, 벚꽃이 만개한 날이었어요 온세상이 분홍빛과 하얀 빚으로 물들었던, 그런 날이죠.<br/>하늘을 푸르렀고, 그날 구름도 보이지 않았어요.<br/>그녀는 밖에 나가자고 하였고, 당연히 나는 그녀를 따라갔어요.</p>
<p>그녀의 몸 속에는 그녀와 똑 닮은 염기서열이 들어있었죠<br/>CAGTAAGCACTACGCCGTATG</p><br />

      <form className="answerField">
    <input class="input is-rounded is-small" type="text" placeholder="정답을 이곳에 입력하세요" value={answer} onChange={handleChange} />
    <button class="button is-small is-rounded" type="submit">정답 제출</button>
</form>
<p className="hint">DNA computer</p>
    </div>
}

export default Ch4