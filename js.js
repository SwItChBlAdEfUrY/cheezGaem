var cheez = 0; //cheez variable
var macaronie = 0; //macaronie
var grammies = 0 ; // grammie varaiable
var macAnCheze = 0; //Mac&Cheezez variable
var money = 0; //money variable
var maxgrammies = 5;
macps = setInterval(function(){ addmacaronie(1); }, 1000);
clearInterval(macps);

function automation(){
	if(grammies >= 1){
    pint = 1 / grammies;
    cps = pint * 1000;
    clearInterval(macps);
    macps = setInterval(function(){ addmacaronie(1); }, cps);
	}
}

function sellmacaronie(){
	if(macaronie >= 1000){
    	takemacaronie(1000);
        addmoney(1);
    }
}

function addmoney(x){
	money = money + x;
    update();
}

function addcheez(x) {
    cheez = cheez + x;
    update();
}
function takecheez(x){
	cheez = cheez - x;
    update();
}
function addmacaronie(x) {
    macaronie = macaronie + x;
    update();
}
function takemacaronie(x){
	macaronie = macaronie - x;
    update();
}
function buymacaronie(){
	if (cheez >= 200){
    	takecheez(200);
    	addmacaronie(1);
        
    }
}

function addMoney(x){
	money = money + x;
}

function purchgrammie(){
	if(macAnCheze >= 1 && grammies < maxgrammies){
   		takeMacAnCheze(1);
    	addGrammie(1);
    }

}

function addGrammie(x){
	grammies = grammies + x;
    update();
}

function takeGrammie(x){
	grammies = grammies - x;
    update();
}

function craftMacAnCheze(){
	if(cheez >= 500 && macaronie >= 50){
    	takecheez(500);
        takemacaronie(20);
        addMacAnCheze(1);
    }
}
function addMacAnCheze(x){
	macAnCheze = macAnCheze + x;
    update();
}


function takeMacAnCheze(x){
	macAnCheze = macAnCheze - x;
    update();
}

function update() {
	

					// update html
    document.getElementById("cheezdisplay").innerHTML = "You have " + cheez + " cheezez";
    document.getElementById("macaroniedisplay").innerHTML = "You have " + macaronie + " macaronies";
    document.getElementById("macancheezdisplay").innerHTML = "You have " + macAnCheze + " Mac&Cheezez";
    document.getElementById("grammiedisplay").innerHTML = "You have " + grammies + "/" + maxgrammies + " grammies";
    document.getElementById("money").innerHTML = "Money: $" + money;
   
   					// check if stuff should be hidden or disabled
   if(cheez >= 200){
    	document.getElementById("butt2").disabled = false;
        document.getElementById("macronie").hidden = false;
        document.getElementById("macronie2").hidden = false;
    }
    if(macAnCheze >= 1){
    	document.getElementById("grammiepurch").hidden = false;
        document.getElementById("butt4").disabled = false;
    }
    if(macAnCheze < 1){
    	document.getElementById("butt4").disabled = true;
    }
    if(cheez < 200){
    	document.getElementById("butt2").disabled = true;
    }
    if(cheez >= 500 && macaronie >= 50){
    	document.getElementById("butt3").disabled = false;
    }
    if(cheez < 500 || macaronie < 50){
    	document.getElementById("butt3").disabled = true;
    }
    if(macaronie >= 50){
    	document.getElementById("crafting").hidden = false;
    }
     if(macaronie >= 1000){
    	document.getElementById("sellmac").hidden = false;
        document.getElementById("sellmac").disabled = false;
    }
    if(macaronie < 1000){
    	document.getElementById("sellmac").disabled = true;
    }
    
    //functions
    automation();
    
}
