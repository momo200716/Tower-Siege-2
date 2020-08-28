class Box extends BaseClass{
	constructor(x, y, width, height){
		super(x, y, width, height)
		this.image = loadImage("box.png");
		this.Visiblity = 255;
	}
	
    display(){
		console.log(this.body.speed)
		

		if(this.body.speed < 3){
			super.display();
			
		}
		else{
			World.remove(world,this.body)
			push()
			
			this.Visiblity = this.Visiblity-150;
			tint(255,this.Visiblity);
			image(this.image,this.body.position.x,this.body.position.y,this.width,this.height)
			pop()
		}
	//	imageMode(CENTER)
	//	
		//this.width = 0;
		//this.height = 0;
		
		
	}
}