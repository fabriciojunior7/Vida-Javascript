function Celula(x, y, r, g, b, tipo){
	//Atributos
	this.x = x;
	this.y = y;

	this.energia = 50;
	this.largura = 40*(this.energia/100.0);
	this.altura = 40*(this.energia/100.0);
	this.velocidade = 1;
	this.idade = 0;
	this.tipo = tipo;
	this.r = r;
	this.g = g;
	this.b = b;

	this.campoLargura = 200;
	this.campoAltura = 200;
	this.campoX = this.x - this.campoLargura/2;
	this.campoY = this.y - this.campoAltura/2;

	//Metodos
	this.desenhar = function(){
		//noStroke();
		stroke(255, 0, 0);
		strokeWeight(2);
		//this.campoX = this.x - this.campoLargura/2;
		//this.campoY = this.y - this.campoAltura/2;

		//fill(255, 0, 0, 80);
		//rect(this.campoX, this.campoY, this.campoLargura, this.campoAltura);

		fill(this.r, this.g, this.b);
		ellipse(this.x, this.y, this.largura, this.altura);
	}

	this.atualizarStatus = function(){
		if(this.energia > 0){
			this.energia -= 1;
		}
		else{
			this.energia = 1;
		}
		this.largura = 40*(this.energia/100.0);
		this.altura = 40*(this.energia/100.0);
	}
	
}