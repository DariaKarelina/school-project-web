import "./auth1Authorization.css";


const Authorization = () => {
    return(
        <div className="Authorization">
            <div className="head-auth">Вход</div>
            <textarea className="login">Логин</textarea>  
            <textarea className="password">Пароль</textarea>
            <button className="sign-on">Войти</button>
        </div>

    );
}


// document.getElementById('Authorization').addEventListener('sign-on', async (e) => 
// {
//     e.preventDefault();

//     const username = document.getElementById('login').value;
//     const password = document.getElementById('password').value;

//     try {
//       const response = await fetch('http://localhost:5000/api/auth/login', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({ username, password }),
//       });

//       const data = await response.json();

//       if (response.ok) {
//         localStorage.setItem('token', data.token);
//         window.location.href = '/home';
//       };
//     };

// });




export default Authorization;