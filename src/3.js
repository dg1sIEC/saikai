import React, { useState } from "react";
import img3 from './image/003.jpg'

function Ch3(){
    const [answer, setAnswer] = useState("");
    const handleChange = ({ target : { value }}) => setAnswer(value);
    return <div className="chapters">
        <h2 className="title">3. Fall In Love</h2>
        <p className="story">용기내서 그녀에게 다가갔더니, 그녀도 내게 다가왔어요.<br/>
        그녀는 말없이 자신의 손을 보여주더니, 악수를 하자는 듯이 손을 내밀어 왔어요.<br/>
그녀는 새로운 사람이 왔다는 소식에 구경 온 나를 보고는,<br/>
응하지 않을 이유가 없었기에, 손을 내밀었죠.<br/>
이렇게 우리는 점점 가까워져 갔어요.</p>
<img className="questionImg" src={img3} width={600} /><br />
<details>
    <summary>Hint</summary>
    Color
</details>
<form className="answerField">
    <input class="input is-rounded is-small" type="text" placeholder="정답을 이곳에 입력하세요" value={answer} onChange={handleChange} />
    <button class="button is-small is-rounded" type="submit">정답 제출</button>
</form>
<p className="hint">Answer Type: Latin Alphabets</p>
    </div>
}

export default Ch3