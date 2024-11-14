import "./fb1InfoForFB.css";

const InfoForFB = () => {
    return(
        <div className="info">
          <textarea className="users-name"></textarea>  
          <textarea className="email"></textarea>
          <textarea className="msg"></textarea>
          <button className="send">Оправить</button>


        </div>

    );
}

export default InfoForFB;