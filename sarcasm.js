function sarcasm() {
    const res = document.getElementById('res');
    const phrase = document.getElementById("phrase").value; 

    let sarcasmPhrase = '';
    let cleanPhrase = phrase.toLowerCase();
    let toggleCase = true;
    
    for (let i = 0; i < cleanPhrase.length; i++) {
        let char = cleanPhrase[i];
       
        if (char !== '' && char !== ' ') {
            char = toggleCase ? char.toLowerCase() : char.toUpperCase();
          
            toggleCase = !toggleCase;
        }
        
        sarcasmPhrase = sarcasmPhrase.concat(char);
    }
    
    res.innerHTML = sarcasmPhrase;
}
