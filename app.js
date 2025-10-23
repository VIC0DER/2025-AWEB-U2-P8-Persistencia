const inputName = document.getElementById('inputName');
const taNotas = document.getElementById('taNotas');
const btnSave = document.getElementById('btnSave');
const btnTheme = document.getElementById('btnTheme');
const nav = document.querySelector('nav');

function loadInfo() {
    const modo = localStorage.getItem('modo');
    const data = sessionStorage.getItem('data');
    if(data){
        const objectData = JSON.parse(data);
        inputName.value = objectData.name;
        taNotas.value = objectData.notas;
    }
    if(modo === 'oscuro'){
        document.body.classList.add('modo-oscuro');
        btnTheme.classList.remove('btn-dark');
        btnTheme.classList.add('btn-light');
        btnTheme.textContent = 'Modo Claro';
    }else{
        btnTheme.classList.add('btn-dark');
        btnTheme.classList.remove('btn-light');
        btnTheme.textContent = 'Modo Oscuro';
    }
}

btnTheme.addEventListener('click', (e) => {
    document.body.classList.toggle('modo-oscuro');
    if(document.body.classList.contains('modo-oscuro')){
        localStorage.setItem('modo', 'oscuro');
    }else{
        localStorage.removeItem('modo');
    }
    loadInfo();
});

inputName.addEventListener('input', saveData);
taNotas.addEventListener('input', saveData);

function saveData() {
    const name = inputName.value;
    const notas = taNotas.value;
    const data = { name, notas };
    sessionStorage.setItem('data', JSON.stringify(data));
}