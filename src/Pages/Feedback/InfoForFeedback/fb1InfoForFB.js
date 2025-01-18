import "./fb1InfoForFB.css";

const InfoForFB = () => {
    return(
        <div className="info">
          <div className="head-fb">Обратная связь</div>
          <textarea className="users-name">Имя Фамилия</textarea>  
          <textarea className="email">Email</textarea>
          <textarea className="msg">Сообщение</textarea>
          <button className="send">Оправить</button>


        </div>

    );
}

export default InfoForFB;