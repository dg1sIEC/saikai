import React, { useState } from "react";

function Ch5(){
    const [answer, setAnswer] = useState("");
    const handleChange = ({ target : { value }}) => setAnswer(value);
    return <div className="chapters">
        <h2 className="title">5. 팔찌</h2>
        <p className="story">그녀와 함께 벚꽃 사이를 걸으며, 어느덧 작은 연못 앞 벤치에 오게 되었어요.<br/>그녀는 떨어진 벚꽃 가지 한 송이를 가져와, 내 머리에 달아 주었어요.<br/>그녀는 그러한 나의 모습을 보고 웃었지만, 나는 그녀의 웃는 모습이 좋았기에, 나 역시 행복했어요.</p>
<p>그녀가 내게 꽃을 달아줄 때 팔찌를 보았다. 팔찌에는 이런 단어(3글자)가 있었다.<br/>첫 번째 : 그녀는 누군가의 *이다. 그녀는 연못에 있다.<br/>두 번째 : 연못에 벚꽃이 피었다.<br/>세 번째 : 그녀는 기분이 좋아서 웃었다.<br/>그녀의 팔찌에 적힌 단어를 알아내라.</p>

      <form className="answerField">
    <input class="input is-rounded is-small" type="text" placeholder="정답을 이곳에 입력하세요" value={answer} onChange={handleChange} />
    <button class="button is-small is-rounded" type="submit">정답 제출</button>
</form>
<p className="hint">Dague 1 Science High School 에는 있고, American West에는 없다.</p>
    </div>
}

export default Ch5