function Chunk(x, y, largura, altura){
	//Atributos
	this.x = x;
	this.y = y;
	this.altura = altura;
	this.largura = largura;
	//this.comida = random(100);
	this.comida = 100;

	//Metodos
	this.desenhar = function(){
		noStroke();
		var porcentagem = (99-this.comida)/100.0;
		fill(255*porcentagem, 255, 255*porcentagem);
		rect(this.x, this.y, this.largura, this.altura);
	}

	this.crescerComida = function(){
		if(this.comida <= 95){
			this.comida += 5;
		}
	}
}