import React, { useState } from "react";

function Ch7(){
    const [answer, setAnswer] = useState("");
    const handleChange = ({ target : { value }}) => setAnswer(value);
    return <div className="chapters">
        <h2 className="title">7. Fly High, Lcarus</h2>
        <p className="story">그녀의 집 앞에서, 그녀를 불렀는데도 그녀는 대답하지 않았어요.<br/>왜 인지 궁금했지만, 물어볼 수도 없었기에 돌아가려 했죠.<br/>그때, 옆집 아주머니가 그런 나를 보시고는 그녀는 여기 없다는 듯 고개를 저었어요 나는 그녀가 떠난 것 같아 슬퍼했지만, 아주머니는 나를 데리고 길 건너의 흰 건물로 가셨어요.<br/>아무래도 그녀는 이사를 갔나봐요.</p>
<p>Daedalus managed to create gigantic wings, using branches of osier and connected them with wax. He taught Icarus how to fly, but told him to keep away from the sun because the heat would make the wax melt, destroying the wings.<br/>Daedalus and Icarus managed to escape the Labyrinth and flew to the sky, free. The flight of Daedalus and Icarus was the first time that man managed to fight the laws of nature and beat gravity.<br/>Although he was warned, Icarus was too young and too enthusiastic about flying. He got excited by the thrill of flying and carried away by the amazing feeling of freedom and started flying high to salute the sun, diving low to the sea, and then up high again.<br/>His father Daedalus was trying in vain to make young Icarus to understand that his behavior was dangerous, and Icarus soon saw his wings melting.<br/>Icarus fell into the sea and drowned. The Icarian Sea, where he fell, was named after him and there is also a nearby small island called Icaria. <br/>
What height did character “Icarus” tried to reach?<br/>Answer Type : Number</p>

      <form className="answerField">
    <input class="input is-rounded is-small" type="text" placeholder="정답을 이곳에 입력하세요" value={answer} onChange={handleChange} />
    <button class="button is-small is-rounded" type="submit">정답 제출</button>
</form>
<p className="hint">Hint : 가장 높은 곳에서 가장 낮은 곳으로</p>
    </div>
}

export default Ch7