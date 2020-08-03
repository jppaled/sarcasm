function sarcasm() {
    const res = document.getElementById('res');
    const phrase = document.getElementById("phrase").value; 

    let sarcasmPhrase = '';
    let cleanPhrase = phrase.toLowerCase();

    for (let i = 0; i < cleanPhrase.length; i++) {
        let char = cleanPhrase[i];
        
        if (char !== '') {
            if (i % 2 == 0) {
                char = char.toLowerCase();
            } else {
                char = char.toUpperCase();
            }
            
            sarcasmPhrase = sarcasmPhrase.concat(char);
        }
    }
    res.innerHTML = sarcasmPhrase;
}
