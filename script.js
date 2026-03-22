let tg = window.Telegram.WebApp;
tg.expand();
tg.ready();

// Configura o botão principal do Telegram (opcional para finalizar pedido)
tg.MainButton.text = "VER CARRINHO";
tg.MainButton.hide();

function abrirCategoria(nome) {
    let produtos = {
        bebidas: ["Coca 2L", "Guaraná", "Água mineral"],
        acougue: ["Frango", "Carne moída", "Bife"],
        frios: ["Presunto", "Mussarela", "Leite"],
        cereais: ["Arroz", "Feijão", "Macarrão"]
    };

    const lista = produtos[nome].join("\n• ");
    
    // Mostra um Popup Nativo do Telegram em vez de um Alert comum
    tg.showPopup({
        title: nome.toUpperCase(),
        message: "Itens disponíveis:\n\n• " + lista,
        buttons: [{type: 'close'}]
    });

    // Haptic Feedback (vibração leve ao clicar - apenas em celulares)
    tg.HapticFeedback.impactOccurred('light');
}
