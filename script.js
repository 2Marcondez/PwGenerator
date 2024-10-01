var senha = document.getElementById('senha');
function gerarSenha() {
    let chars = '0123456789abcdefghABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*ijklmnopqrstuvwxyz';
    let senhaTamanho = 12;
    let senha = '';
    for (let i = 0; i < senhaTamanho; i++) {
        let numeroAleatorio = Math.floor(Math.random() * chars.length);
        senha += chars.substring(numeroAleatorio, numeroAleatorio + 1);
    }
    document.getElementById('senha').value = senha;
}

function copiarSenha() {
    var copiarTexto = document.getElementById('senha');
    copiarTexto.select();
    copiarTexto.setSelectionRange(0, 999); 

    //copy to clipboard (copiar)
    navigator.clipboard.writeText(copiarTexto.value)
    
     alert('Senha copiada para o navegador: ' + copiarTexto.value);
        }


