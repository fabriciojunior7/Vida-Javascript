var largura = 901, altura = 505;
var linhaChunks = 25, colunaChunks = 14;
var chunks = [];
var numHerbivoros = 1, numCarnivoros = 0;
var herbivoros = [], carnivoros = [];
var frames = 60;
var mortos = [];
var maximoVidas = 0;

function setup(){
	frameRate(frames);
	tela = createCanvas(largura, altura);

	for(var i=0; i<colunaChunks; i++){
		for(var ii=0; ii<linhaChunks; ii++){
			chunks.push(new Chunk(36*ii+1, 36*i+1, 35, 35));
		}
	}

	for(var i=0; i<numHerbivoros; i++){
		herbivoros.push(new Herbivoro(random(10, largura-10), random(10, altura-10), 0, 0, 255), new Herbivoro(random(10, largura-10), random(10, altura-10), 255, 255, 0), new Herbivoro(random(10, largura-10), random(10, altura-10), 255, 0, 255));
	}

	popAtual = createP("");
	popMax = createP("");
	
}

function draw(){
	background(0);
	desenharChunks();
	desenharCelulas();
	popAtual.html("População Atual: "+herbivoros.length);
	popMax.html("População Máxima: "+maximoVidas);
	if(maximoVidas < herbivoros.length){
		maximoVidas = herbivoros.length;
	}
}

function keyPressed(k){
	if(keyCode == "32"){
		for(var i=0; i<chunks.length; i++){
			chunks[i].comida = 100;
		}
	}
}

function desenharChunks(){
	for(var i=0; i<chunks.length; i++){
		if(frameCount % 60 == 0){
			chunks[i].crescerComida();
		}
		chunks[i].desenhar();
	}
}

function desenharCelulas(){
	mortos = [];
	for(var i=0; i<herbivoros.length; i++){
		/*
		if(frameCount % 5 == 0){
			for(var ii=0; ii<chunks.length; ii++){
				sobreChunk = collideRectRect(chunks[ii].x, chunks[ii].y, chunks[ii].largura, chunks[ii].altura, herbivoros[i].x, herbivoros[i].y, 1, 1);
				if(sobreChunk == true){
					herbivoros[i].chunkAtual = chunks[ii];
					herbivoros[i].comer(chunks[ii]);
					break;
				}
			}

			herbivoros[i].andar(chunks);
			herbivoros[i].atualizarStatus();
		}*/

		if(frameCount % 5 == 0){
			for(var ii=0; ii<chunks.length; ii++){
				sobreChunk = collideRectRect(chunks[ii].x, chunks[ii].y, chunks[ii].largura, chunks[ii].altura, herbivoros[i].x, herbivoros[i].y, 1, 1);
				if(sobreChunk == true){
					herbivoros[i].chunkAtual = chunks[ii];
					herbivoros[i].comer(chunks[ii]);
					break;
				}
			}
			
			herbivoros[i].atualizarStatus();
		}

		if(herbivoros[i].energia >= 100){
			herbivoros.push(herbivoros[i].reproduzir());
		}
		herbivoros[i].passear(largura, altura);
		herbivoros[i].desenhar();
		if(herbivoros[i].energia <= 0){
			mortos.push(i);
		}
	}

	for(var i=0; i<mortos.length; i++){
		//herbivoros.pop(mortos[i]);
		herbivoros.splice(mortos[i], 1);
	}
}