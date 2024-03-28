function validateForm() {
    var form = document.getElementById('myForm');
    var firstName = form['firstName'].value.trim();
    var lastName = form['lastName'].value.trim();
    var seniority = form['seniority'].value.trim();
    var email = form['email'].value.trim();
    var question1 = form['question1'].value.trim();
    var comments = form['comments'].value.trim();
    var file = form['file'].files[0]; // Adicionando a variável para o arquivo

    // Verifica se pelo menos um campo obrigatório está preenchido
    if (firstName === '' || lastName === '' || seniority === '' || email === '' || question1 === '' || !file) {
        // Exibe um alerta indicando que todos os campos obrigatórios devem ser preenchidos
        alert('Por favor, preencha todos os campos obrigatórios e selecione um arquivo.');
        return false;
    }

    // Verifica se o arquivo é do tipo desejado
    var allowedExtensions = /(\.pdf|\.docx|\.txt)$/i; // Extensões permitidas
    if (!allowedExtensions.exec(file.name)) {
        // Exibe um alerta indicando que o tipo de arquivo não é suportado
        alert('Por favor, selecione um arquivo PDF, DOCX ou TXT.');
        return false;
    }

    var resultsDiv = document.getElementById('formResults');

    resultsDiv.innerHTML = `
        <p><strong>Nome:</strong> ${firstName} ${lastName}</p>
        <p><strong>Senioridade:</strong> ${seniority}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Qual sua escolha de área?</strong> ${question1}</p>        
        <p><strong>Comentários:</strong> ${comments}</p>
        <p><strong>Arquivo:</strong> ${file.name}</p>
    `;

    resultsDiv.style.display = 'block';

    // Define um temporizador para ocultar a resposta após 5 segundos
    setTimeout(function() {
        resultsDiv.style.display = 'none';
    }, 10000);

    // Mostra o alerta de cadastro realizado com sucesso
    alert('Cadastro realizado com sucesso!');

    // Limpa o formulário após o envio
    form.reset();

    // Retorna false para evitar o envio do formulário
    return false;
}

