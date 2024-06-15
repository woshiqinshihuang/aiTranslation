document.getElementById('from_lang').addEventListener('change', (e) => {
    localStorage.setItem('fromLang', e.target.value);
})

document.getElementById('to_lang').addEventListener('change', (e) => {
    localStorage.setItem('toLang', e.target.value);
})

document.getElementById('api').addEventListener('change', (e) => {
    localStorage.setItem('api', e.target.value);
})

document.getElementById('key').addEventListener('change', (e) => {
    localStorage.setItem('key', e.target.value);
})

document.getElementById('model').addEventListener('change', (e) => {
    localStorage.setItem('model', e.target.value);
})

document.getElementById('is_stream').addEventListener('change', (e) => {
    localStorage.setItem('isStream', e.target.value);
})

document.getElementById('random_value').addEventListener('change', (e) => {
    localStorage.setItem('randomValue', e.target.value);
})

if (localStorage.getItem('fromLang')) {
    const selectElement = document.getElementById('from_lang');
    const localValue = localStorage.getItem('fromLang');

    for (let option of selectElement.options) {
        if (option.value === localValue) {
            option.selected = true;
            break;
        }
    }
}

if (localStorage.getItem('toLang')) {
    const selectElement = document.getElementById('to_lang');
    const localValue = localStorage.getItem('toLang');

    for (let option of selectElement.options) {
        if (option.value === localValue) {
            option.selected = true;
            break;
        }
    }
}

localStorage.getItem('api') ? document.getElementById('api').value = localStorage.getItem('api') : ''

localStorage.getItem('key') ? document.getElementById('key').value = localStorage.getItem('key') : ''

if (localStorage.getItem('model')) {
    const selectElement = document.getElementById('model');
    const localValue = localStorage.getItem('model');

    for (let option of selectElement.options) {
        if (option.value === localValue) {
            option.selected = true;
            break;
        }
    }
}

if (localStorage.getItem('isStream')) {
    const selectElement = document.getElementById('is_stream');
    const localValue = localStorage.getItem('isStream');

    for (let option of selectElement.options) {
        if (option.value === localValue) {
            option.selected = true;
            break;
        }
    }
}

if (localStorage.getItem('randomValue')) {
    const selectElement = document.getElementById('random_value');
    const localValue = localStorage.getItem('randomValue');

    for (let option of selectElement.options) {
        if (option.value === localValue) {
            option.selected = true;
            break;
        }
    }
}