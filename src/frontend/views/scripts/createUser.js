const url = 'http://localhost:4000/createuser';

const btn = document.getElementById('enviar');

btn.addEventListener('click', () => {
    const nameInputText = document.getElementById('inputname').value;
    const emailInputText = document.getElementById('inputemail').value;
    const passwordInputText = document.getElementById('password').value;

    const dataToSend = {
        name: nameInputText,
        email: emailInputText,
        password: passwordInputText
    }

    fetch(url, {
        method: 'POST', // método HTTP
        headers: {
            'Content-Type': 'application/json' // cabeçalho indicando que o corpo é JSON
            // Adicione outros cabeçalhos conforme necessário
        },
        body: JSON.stringify(dataToSend) // converte o objeto para JSON
    })
        .then(response => {
            if (!response.ok) {
                throw new Error(`Erro HTTP! Status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            alert(`Bem-vindo(a),${nameInputText}! Seu usuário foi registrado com sucesso!`);
        })
        .catch(error => {
            console.error('Erro:', error);
        });
})