// Captura e exibe os dados da URL em actionform.html
document.addEventListener('DOMContentLoaded', function () {
    const urlParams = new URLSearchParams(window.location.search);
    const nome = urlParams.get('nome');
    const email = urlParams.get('email');
    const evento = urlParams.get('evento');
    const descricao = urlParams.get('descricao');

    // Verifica se está na página actionform.html e preenche os dados
    if (window.location.pathname.includes('actionform.html') && nome && email && evento && descricao) {
        document.getElementById('informacoes').innerHTML = `
            <p><strong>Nome:</strong> ${nome}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Evento:</strong> ${evento}</p>
            <p><strong>Descrição:</strong> ${descricao}</p>
        `;
    }
});

// Validação básica no formulário
document.getElementById('formulario')?.addEventListener('submit', function (event) {
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const evento = document.getElementById('evento').value;
    const descricao = document.getElementById('descricao').value;

    if (!nome || !email || !evento || !descricao) {
        alert('Por favor, preencha todos os campos.');
        event.preventDefault();
    }
});
