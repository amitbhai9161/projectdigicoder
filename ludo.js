document.addEventListener('DOMContentLoaded', () => {
    const board = document.getElementById('ludo-board');
    
    function createBoard() {
        for (let i = 0; i < 225; i++) {
            const cell = document.createElement('div');
            cell.className = 'cell';
            board.appendChild(cell);
        }
    }

    function addLudoSections() {
        const cells = document.querySelectorAll('.cell');
        
        // Example: marking the center for home areas (simplified)
        for (let i = 0; i < 25; i++) {
            cells[i + 75].classList.add('home'); // Center 5x5 home area
        }
        
        // Example: marking a start area (simplified)
        cells[0].classList.add('start');

        // Example: marking paths (simplified)
        for (let i = 10; i < 15; i++) {
            cells[i].classList.add('path');
        }

        // Example: marking safe areas (simplified)
        cells[150].classList.add('safe');
    }

    createBoard();
    addLudoSections();
});
