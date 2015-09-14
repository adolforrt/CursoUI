function vehicles(type,speed){
	this.speed = speed;
	this.propulsion = this.type;
	this.accelerate = function(){
		this.speed += this.propulsion.accelerationFactor;
	};
	
	this.type = function(){
		switch(type){
			case 1: this.propulsion = new wheel(); //tierra
					break;
			
			case 2: this.propulsion = new propeller(); //agua
					break;
					
			case 3: this.propulsion = new propNozzle(); //tierra
					break;
											
			default: this.propulsion = new wheel(); //tierra
		}
	};	
	
	
}

function wheel(){
	this.radius = parseInt(prompt("Number of wheels: "),10);
	this.accelerationFactor = this.radius*Math.PI;

}

function propeller(){
	this.fins = parseInt(prompt("Number of fins: "),10);
	this.spinDirection = parseInt(prompt("Spin direction (1: forward, -1 backward): "),10);;
	this.accelerationFactor = this.fins * this.spinDirection;
}

function propNozzle(){
	this.power = parseInt(prompt("Power: "),10);;
	this.afterBurner = parseInt(prompt("Enable after burners? (1= YES, 0 = NO ): "),10);;
	this.accelerationFactor = this.power + this.power*this.afterBurner;
};
