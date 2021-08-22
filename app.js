/* 

a=2  
e=4
i=1
o=7
u=8

*/


let vowelgame = document.getElementById('vowelgame');
let button = document.getElementById('btn');
let input = document.getElementById('textinput');
let clearbtn = document.getElementById('clearbtn');


button.addEventListener("click", function(){

    let String = input.value;

    function PrintVowels (String) {
        
        let Vowels = 0;
    
    for (let i = 0; i < String.length; i++) {
        
        if (String[i] == 'a') {
            console.log('a = 2');
            Vowels += 2;
        } else if (String[i] == 'e') {
            console.log('e = 4');
            Vowels += 4;
        } else if (String[i] == 'i') {
            console.log('i = 1');
            Vowels += 1;
        } else if (String[i] == 'o') {
            console.log('o = 7');
            Vowels += 7;
        } else if (String[i] == 'u') {
            console.log('u = 8');
            Vowels += 8;
        };     
    };
    
     return 'total sum of vowels is: ' + Vowels + ' pts';
    
    };
    
    let StringVowels = PrintVowels(String);
    
    console.log(StringVowels);
    
    vowelgame.innerHTML = `The string: "${String}" ${StringVowels}`;
    
    
   }
    );

    clearbtn.addEventListener("click", function(){
        document.getElementById('textinput').value="";
        vowelgame.innerHTML = "";
        
    });

   




