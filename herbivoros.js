function Herbivoro(x, y, r, g, b){
	//Atributos
	Celula.call(this, x, y, r, g, b, 0);
	this.chunkAtual = null;
	this.chunkMeta = new Chunk(50, 50, 50, 50);
	this.velocidadeX = random(-2, 2);
	this.velocidadeY = random(-2, 2);

	//Metodos
	this.comer = function(chunk){
		if(chunk != null){
			this.chunkAtual = chunk;
		}
		if(this.energia <= 99 && chunk.comida >= 2){
			this.energia += 2;
			chunk.comida -= 2;
		}
	}

	this.buscarComida = function(chunk){
		if(this.x > chunk.x + (chunk.largura/2.0)){
			this.x -= this.velocidade;
		}
		else if(this.x < chunk.x + (chunk.largura/2.0)){
			this.x += this.velocidade;
		}

		if(this.y > chunk.y + (chunk.altura/2.0)){
			this.y -= this.velocidade;
		}
		else if(this.y < chunk.y + (chunk.altura/2.0)){
			this.y += this.velocidade;
		}
	}

	this.andar = function(chunks){
		for (var i=0; i<chunks.length; i++){
			//sobre = collideRectCircle(chunks[i].x, chunks[i].y, chunks[i].largura, chunks[i].altura, this.x, this.y, this.campoLargura);
			sobre = collideRectRect(chunks[i].x, chunks[i].y, chunks[i].largura, chunks[i].altura, this.campoX, this.campoY, this.campoLargura, this.campoAltura);
			if(sobre == true && this.chunkAtual != chunks[i] && this.chunkAtual.comida < chunks[i].comida){
				this.chunkMeta = chunks[i];
				this.buscarComida(this.chunkMeta);
			}
			else if(this.chunkAtual.comida < this.chunkMeta.comida){
				this.buscarComida(this.chunkMeta);
			}
		}
	}

	this.passear = function(largura, altura){
		if(this.x-this.largura/2 <= 0){
			this.velocidadeX = random(0, 2);
		}
		else if(this.x+this.largura/2 >= largura){
			this.velocidadeX = random(-2, 0);
		}

		if(this.y-this.altura/2 <= 0){
			this.velocidadeY = random(0, 2);
		}
		else if(this.y+this.altura/2 >= altura){
			this.velocidadeY = random(-2, 0);
		}

		this.x += this.velocidadeX;
		this.y += this.velocidadeY;
	}

	this.reproduzir = function(){
		this.energia = 50;
		return(new Herbivoro(this.x+20, this.y, this.r, this.g, this.b));
	}

}