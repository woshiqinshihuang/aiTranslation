const translateDom = document.getElementById('translate');

translateDom.addEventListener('click', function () {
    translateDom.classList.add('loading');
    translateDom.setAttribute('disabled', true);
    const fromLang = document.getElementById('from_lang').value;
    const toLang = document.getElementById('to_lang').value;
    const apiValue = document.getElementById('api').value;
    const api = apiValue.includes("/v1/chat/completion") ? apiValue : apiValue + "/v1/chat/completion";
    const key = document.getElementById('key').value;
    const model = document.getElementById('model').value;
    const isStream = document.getElementById('is_stream').value;
    const randomValue = document.getElementById('random_value').value;
    const inputText = document.getElementById('input').value;
    const outputText = document.getElementById('output');
    outputText.value = ''

    const options = {
        fromLang: fromLang,
        toLang: toLang,
        api: api,
        key: key,
        model: model,
        isStream: isStream,
        randomValue: randomValue,
        inputText: inputText
    }

    fetchStream(options, function (data) {

        if (data.done) {
            translateDom.classList.remove('loading');
            translateDom.removeAttribute('disabled');
            outputText.value = outputText.value.slice(1, -1)
            return
        }

        outputText.value += data;
        outputText.scrollTop = outputText.scrollHeight;
    })

});

const playBtn = document.getElementsByClassName('play-btn');

for (let i = 0; i < playBtn.length; i++) {
    const e = playBtn[i];
    e.addEventListener('click', function () {

        const textarea = e.parentElement.querySelector('textarea');
        const value = textarea.value;
        const id = textarea.id;
        const lang = id == 'input' ? document.getElementById('from_lang').value : document.getElementById('to_lang').value;

        startReadSynth(value, lang)

    });
}

const copyBtn = document.getElementsByClassName('copy-btn');

for (let i = 0; i < copyBtn.length; i++) {
    const e = copyBtn[i];
    e.addEventListener('click', function () {
        const textarea = e.parentElement.querySelector('textarea');
        const value = textarea.value;
        navigator.clipboard.writeText(value).then(function () {
            showToast('文本已复制到剪贴板！', 2000);
        }, function (err) {
            showToast('无法复制文本：', 2000);
        });

    });
}