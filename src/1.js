import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; 
import img1 from './image/001.png'

function Ch1(){
    const [answer, setAnswer] = useState("");
    const handleChange = ({ target : { value }}) => setAnswer(value);

    const navigate = useNavigate();
  
    const handleSubmit = (e) => {
      e.preventDefault();
  
      if (answer.toLowerCase() === "a") {
        navigate("/3");
      } else {
        alert("틀렸습니다! 다시 생각해 보세요.");
      }
    };
  
    return <div className="chapters">
        <h2 className="title">1. Alpha</h2>
        <p className="story">그녀를 처음 만났던 건, 어느 따뜻한 봄날이었던 거 같아요.<br/>
따뜻한 햇살이 온몸을 감싸는, 그런 봄날 말이에요<br/>
그녀는 갑작스레 이곳으로 이사를 왔어요. 왜인지는 잘 모르지만.<br/>
그녀는 새로운 사람이 왔다는 소식에 구경 온 나를 보고는,<br/>
천천히 다가와 이름이 무엇이고, 또 어디 사는지를 물었어요.<br/>
하지만 그 순간, 너무 놀라서 나는 도망쳐버리고 말았죠.<br/>
그게 그녀와 나의 첫 만남이었어요.</p>
<img className="questionImg" src={img1} /><br />
<p>나는 누구인가?</p><br />
<form className="answerField" onSubmit={handleSubmit}>
    <input class="input is-rounded is-small" type="text" placeholder="정답을 이곳에 입력하세요" value={answer} onChange={handleChange} />
    <button class="button is-small is-rounded" type="submit">정답 제출</button>
</form>
<p className="hint">Answer Type: Latin Alphabet</p>
    </div>
}

export default Ch1