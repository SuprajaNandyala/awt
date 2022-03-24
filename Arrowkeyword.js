let emp=function(id,name){
    this.id=id;
    this.name=name;
    console.log(this);
    this.display=function(){
        setTimeout(()=>{
            console.log("id:"+this.id+"  name:"+this.name);
        },1000);
    }
}
let emp1=new emp(1201,"acv");
emp1.display();