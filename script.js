document.addEventListener('DOMContentLoaded', () => {

    // 1. click
    document.getElementById('e1').addEventListener('click', function() {
        this.style.background = 'linear-gradient(135deg, #ff9a9e, #fad0c4)';
        this.textContent = '¡Click detectado!';
    });

    // 2. mouseover
    document.getElementById('e2').addEventListener('mouseover', function() {
        this.style.transform = 'scale(1.08)';
    });

    // 3. mouseout
    document.getElementById('e3').addEventListener('mouseout', function() {
        this.style.transform = 'scale(1)';
    });

    // 4. dblclick
    document.getElementById('e4').addEventListener('dblclick', function() {
        this.textContent = '¡Doble click!';
        this.style.background = 'linear-gradient(135deg, #a8e063, #56ab2f)';
    });

    // 5. input (cambio en valor del input)
    document.querySelector('#e5 input').addEventListener('input', function() {
        this.parentElement.style.background = 'linear-gradient(135deg, #f6d365, #fda085)';
        this.parentElement.textContent = 'Escribiendo...';
    });

    // 6. focus
    document.querySelector('#e6 input').addEventListener('focus', function() {
        this.parentElement.style.border = '4px solid #4caf50';
        this.parentElement.style.background = '#e8f5e9';
    });

    // 7. blur
    document.querySelector('#e7 input').addEventListener('blur', function() {
        this.parentElement.style.border = 'none';
        this.parentElement.style.background = 'linear-gradient(135deg, #a1c4fd, #c2e9fb)';
    });

    // 8. keydown (necesita tabindex para que el div reciba foco)
    document.getElementById('e8').addEventListener('keydown', function(e) {
        this.textContent = `Tecla presionada: ${e.key}`;
        this.style.background = 'linear-gradient(135deg, #667eea, #764ba2)';
    });

});