

main();

function main () {
	createTA();
	ta.value+= " Hello, Wafa Fatimah Rastiadi yang ber-NIM 10215048"
}

function createTA(){
	ta=document.createElement("textarea");
	
	document.body.append(ta);
}
