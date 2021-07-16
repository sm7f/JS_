var then = new Date(2010, 0, 1); // O 1o dia do 1o mês de 2010
var later = new Date(2010, 0, 1, 17, 10, 30); // O mesmo dia, às 5:10:30 da tarde, hora local
var now = new Date(); // A data e hora atuais 
//var elapsed = now – then; // Subtração de data: intervalo em milissegundos
later.getFullYear() // => 2010 
later.getMonth() // => 0: meses com base em zero 
later.getDate() // => 1: dias com base em um
later.getDay() // => 5: dia da semana. 0 é domingo, 5 é sexta-feira.
later.getHours() // => 17: 5 da tarde, hora local
later.getUTCHours() // Horas em UTC; depende do fuso h
later.toString()// => "Sexta-feira, 01 de janeiro de 2010, 17:10:30 GMT-0800
later.toUTCString() // => "Sábado, 02 de janeiro de 2010, 01:10:30 GMT"
later.toLocaleDateString() // => "01/01/2010"
later.toLocaleTimeString() // => "05:10:30 PM"


   

 
 
     