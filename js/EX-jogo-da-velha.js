'use strict';

document.addEventListener('DOMContentLoaded', () => {
    const cells = document.querySelectorAll('.cell');
    const status = document.querySelector('.status');
    const restartBtn = document.querySelector('.restart-btn');

    let jogadorInicial = 'X';
    const vezDeJogar = () => {
        jogadorInicial = jogadorInicial === "X" ? "O" : "X";
    };

    let jogoLigado = true;
    let estadosDoJogo = ['', '', '', '', '', '', '', '', ''];

    function cellClick(cellIndex) {
        const selecionandoCell = document.querySelector(`[data-cell="${cellIndex}"]`);
        if (jogoLigado && estadosDoJogo[cellIndex] === '') {
            estadosDoJogo[cellIndex] = jogadorInicial;
            selecionandoCell.textContent = jogadorInicial;

            if (checarVencedor()) {
                status.textContent = `O jogador ${jogadorInicial} venceu!`;
                jogoLigado = false;
            } else if (checarEmpate()) {
                status.textContent = 'O jogo terminou em empate!';
                jogoLigado = false;
            } else {
                vezDeJogar();
            }
        }
    }

    cells.forEach(cell => {
        cell.addEventListener('click', () => {
            const cellIndex = cell.getAttribute('data-cell');
            cellClick(cellIndex);
        });
    });

    function checarVencedor() {
        const condicoesVencedoras = [
            // Condições de vitória
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
        ];

        for (let condicao of condicoesVencedoras) {
            const [a, b, c] = condicao;
            if (estadosDoJogo[a] !== '' && estadosDoJogo[a] === estadosDoJogo[b] && estadosDoJogo[a] === estadosDoJogo[c]) {
                return true;
            }
        }
        return false;
    }

    function checarEmpate() {
        return estadosDoJogo.every(cell => cell !== '');
    }

    function resetarJogo() {
        estadosDoJogo = ['', '', '', '', '', '', '', '', ''];
        jogadorInicial = 'X';
        jogoLigado = true;
        status.textContent = '';
        const cells = document.querySelectorAll('.cell');
        cells.forEach(cell => {
            cell.textContent = '';
        });
    }

    restartBtn.addEventListener('click', resetarJogo);
});
