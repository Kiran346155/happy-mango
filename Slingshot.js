class Slingshot{

       constructor(a,b){

      
            var options={

             bodyA:a,
             pointB:b,
             lenght:10,
             Stiffeness:0.3
            }

        
        this.sling=Constraint.create(options)
        World.add(world,this.sling)

       this.pointB=b
    }

                 display(){
                

                 if(this.sling.bodyA){
                    strokeWeight(3)
                    line(this.sling.bodyA.position.x,this.sling.bodyA.position.y,this.sling.pointB.x,this.sling.pointB.y)
                 }
                 
                }



fly(){
this.sling.bodyA=null;
}

attach(body){
    this.sling.bodyA=body
}
                

}








