var text = "testing: 1, 2, 3"; // Exemplo de texto 
var pattern = /\d+/g // Corresponde a todas as instâncias de um ou mais // dígitos
pattern.test(text)   // => verdadeiro: existe uma correspondência 
text.search(pattern) // => 9: posição da primeira correspondência
text.match(pattern)  // => ["1", "2", "3"]: array de todas as correspondências
text.replace(pattern, "#"); // => "testing: #, #, #" 
text.split(/\D+/); // => ["","1","2","3"]: divide em não dígitos
   
