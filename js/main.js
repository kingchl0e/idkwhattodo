
  
 
  
 

                  
  async function help(){
    const req = await fetch('../text/wordlist1.txt');
    const txt = await req.text();
    const options = txt.split('\n');
    const randOptionNum = Math.floor(Math.random() * options.length);
    const res = await fetch('https://api.dictionaryapi.dev/api/v2/entries/en/'+ options[randOptionNum])
    const json = await res.json()
    const meanings = json[0].meanings
    console.log(meanings[0].definitions[0])

    const propmpts =
    ['Write a poem using this word at the beginning of every line.',

    'Describe how this word tastes.',
    
    'Create an anagram of this word.', 
    
    'Write a list poem using the letters of this word.'];

    function prompt (){
        const randOptionNum = Math.floor(Math.random() * options.length);
    }
    

    
    document.getElementById('doThis').innerHTML = '';
    document.getElementById('doThis').innerHTML = options[randOptionNum];

    document.getElementById('define').innterHTML = '';
    document.getElementById('define').innerHTML = meanings[0].definitions[0].definition[0];
    
    
  }


	function writeWord (word) {
    document.body.style.marginTop = '50px'
    document.body.style.textAlign = 'center'
    document.body.style.fontSize = '20px'
    document.body.textContent = word
  }

  function writeDefinition (){
    document.body.style.marginTop = '50px'
    document.body.style.textAlign = 'center'
    document.body.style.fontSize = '20px'
    document.body.textContent = ''
  }

 

 





