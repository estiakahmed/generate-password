function Asif(){
	const allcharacter= "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789~`!@#$%^&*()_-+={[}]|\:;'<,>.?/";

	var generatepassword="";

	for(var a=0; a<16; a++){
		var gp = Math.floor(Math.random() * allcharacter.length);

		generatepassword += allcharacter.substring(gp,gp+1);
	}

	document.querySelector("#output").value=generatepassword;
}