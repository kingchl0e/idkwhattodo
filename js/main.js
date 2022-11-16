<script>
  
 
  
  const options = ['chat',
                  'cheap',
                  'cheaper',
                  'cheapest',
                  'cheat',
                  'cheats',
                  'check',
                  'checked',
                  'checking',
                  'checklist',
                  'checkout',
                  'checks',
                  'cheers',
                  'cheese',
                  'chef',
                  'chem'];
                  
  
  function help(){
    const randOptionNum = Math.floor(Math.random() * options.length);
    
    document.getElementById('doThis').innerHTML = '';
    document.getElementById('doThis').innerHTML = options[randOptionNum];
  }
  
	function writeWord (word) {
    document.body.style.marginTop = '50px'
    document.body.style.textAlign = 'center'
    document.body.style.fontSize = '10px'
    document.body.textContent = word
  }
  
 

</script>