document.addEventListener('DOMContentLoaded', () => {
    // Evento 1: onclick
    const evento1 = document.getElementById('evento1');
    evento1.addEventListener('click', () => {
        alert('¡Hiciste click en Evento 1!');
    });

    // Evento 2: onmouseover
    const evento2 = document.getElementById('evento2');
    evento2.addEventListener('mouseover', () => {
        evento2.style.backgroundColor = '#ffcc00';
    });

    // Evento 3: onmouseout
    const evento3 = document.getElementById('evento3');
    evento3.addEventListener('mouseout', () => {
        evento3.style.backgroundColor = '#add8e6';
    });

    // Evento 4: onkeydown (en input)
    const input4 = document.getElementById('input4');
    input4.addEventListener('keydown', (e) => {
        console.log(`Tecla presionada: ${e.key}`);
    });

    // Evento 5: onfocus (en input)
    const input5 = document.getElementById('input5');
    input5.addEventListener('focus', () => {
        input5.style.border = '2px solid green';
    });

    // Evento 6: onblur (en input)
    const input6 = document.getElementById('input6');
    input6.addEventListener('blur', () => {
        input6.style.border = '1px solid #ccc';
    });

    // Evento 7: ondblclick
    const evento7 = document.getElementById('evento7');
    evento7.addEventListener('dblclick', () => {
        evento7.textContent = '¡Doble click detectado!';
    });

    // Evento 8: onkeypress (en el div, pero captura teclas globales si enfocado)
    const evento8 = document.getElementById('evento8');
    evento8.addEventListener('keypress', (e) => {
        alert(`Tecla presionada: ${e.key}`);
    });
});