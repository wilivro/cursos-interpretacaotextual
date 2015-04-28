var sub7 = [];

sub7.push(
	{
		start:0.01,
		txt:"O sol é o pé e a mão"
	}
);
sub7.push(
	{
		start:0.06,
		txt:"O sol é a mãe e o pai"
	}
);
sub7.push(
	{
		start:0.10,
		txt:"Dissolve a escuridão"
	}
);

sub7.push(
	{
		start:0.15,
		txt:"<br>"
	}
);

sub7.push(
	{
		start:0.22,
		txt:"O sol se põe se vai"
	}
);
sub7.push(
	{
		start:0.28,
		txt:"E após se pôr"
	}
);

sub7.push(
	{
		start:0.30,
		txt:"O sol renasce no Japão"
	}
);

sub7.push(
	{
		start:0.36,
		txt:"<br>"
	}
);

sub7.push(
	{
		start:0.38,
		txt:"Eu vi também"
	}
);

sub7.push(
	{
		start:0.42,
		txt:"Só pra poder entender"
	}
);

sub7.push(
	{
		start:0.49,
		txt:"<br>"
	}
);

sub7.push(
	{
		start:0.53,
		txt:"Na voz a vida ouvi dizer"
	}
);

// refrão

sub7.push(
	{
		start:0.59,
		txt:"Que os braços sentem"
	}
);

sub7.push(
	{
		start:0.65,
		txt:"E os olhos vêem"
	}
);

sub7.push(
	{
		start:0.70,
		txt:"Que os lábios beijam"
	}
);

sub7.push(
	{
		start:0.75,
		txt:"Dois rios inteiros"
	}
);

sub7.push(
	{
		start:0.80,
		txt:"<br>"
	}
);

sub7.push(
	{
		start:0.86,
		txt:"Sem direção"
	}
);

sub7.push(
	{
		start:0.90,
		txt:"<br>"
	}
);



var media = 0;
for(var i=0;i<sub7.length-1;i++){
	duration = (sub7[i+1].start-sub7[i].start);
	media = (duration + media)/2;
	//detecta fim da estrofe
	if(duration<0.1){
		sub7[i].duration = duration;
	}
	else{
		sub7[i].duration = media;
		media = 0;
	}

}