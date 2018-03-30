//runs when page is loaded
function readHex()  {
	if(window.location.hash)  {

		var hex = window.location.hash;
		//alert(hex);
		var len = hex.length;
		if(len == 7)  {
			setColors(hexToR(hex), hexToG(hex), hexToB(hex));
		}
		else random();
	}
	else random();
}

//runs when the hex field is changed
function hexUpdate()  {
	var hex = document.getElementById('hex').value;
	if(hex[0] == "#" && hex.length == 7)  {
		window.location.hash = hex;
		readHex();
	}
	else random();
}

//sets colors and hash. Definitive method to change the page
function send()  {
	formColorString();
	window.location.hash = document.getElementById('hex').value;
}

//update a given color
function update(n)  {
	if(document.getElementById("num" + n).value == '' || document.getElementById("num" + n).value == undefined || document.getElementById("num" + n).value < 0)  {
		document.getElementById("num" + n).value = 0;
		//alert("shit was empty");
	}
	else if(document.getElementById("num" + n).value > 255)  {
		document.getElementById("num" + n).value = 255;
	}

	document.getElementById("slider" + n).value = document.getElementById("num" + n).value;
	send();
}

//this takes the values from the 3 numbers and updates the page colors
function formColorString()  {
	var r = document.getElementById("num0").value;
	var g = document.getElementById("num1").value;
	var b = document.getElementById("num2").value;

	var string = "rgb(" + r + "," + g + "," + b + ")";
	document.getElementById('rgb').value = string;

	var hex = rgbToHex(r, g, b);
	document.getElementById('hex').value = "#" + hex;
	document.body.style.backgroundColor = string;


	var c = document.getElementsByClassName("change");
	var i;
	for (i = 0; i < c.length; i++) {
		c[i].style.backgroundColor = string;
	}


	var hsl = rgbToHSL(r, g, b);
	document.getElementById('hsl').value = hsl;
	//window.location.hash = hex;
}

//explicitly set each number to a given value
function setColors(r, g, b)  {
	setR(r);
	setG(g);
	setB(b);
	send();
}

function setR(r)  {
	document.getElementById("slider0").value=document.getElementById("num0").value = r;
}

function setG(g)  {
	document.getElementById("slider1").value=document.getElementById("num1").value = g;
}

function setB(b)  {
	document.getElementById("slider2").value=document.getElementById("num2").value = b;
}

function increment(n)  {
	document.getElementById("num" + n).value++;
	update(n);
}

function decrement(n)  {
	document.getElementById("num" + n).value--;
	update(n);
}

function slide(n)  {
	document.getElementById("num" + n).value = document.getElementById("slider" + n).value;
	formColorString();
}

function random()  {
	var r = Math.floor(Math.random() * 255);
	var g = Math.floor(Math.random() * 255);
	var b = Math.floor(Math.random() * 255);

	setColors(r, g, b);
}

function rainbowSlider()  {
	var i = (document.getElementById("sliderR").value / 159.1);
	setR(Math.round(127 * Math.cos(i  + (3.14159 * 2))) + 128);
  setG(Math.round(127 * Math.sin(i + (3.14159 * 2))) + 128);
  setB(Math.round(127 * Math.cos(i + 3.14159)) + 128);
	formColorString();
}


//this funciton takes a number and returns the hex value in a string
function componentToHex(c) {

	//keeps the value at 2 digits
	if(c < 16)  return "0" + toH(c);

	var string = "";
	var remainder = 0;
	while (c > 0)  {
		remainder = c % 16;
		remainder = toH(remainder);

		string = remainder + string;
		c = c / 16;
		c = Math.floor(c);
	}

	return string;
}

//this turns each digit into the associated hex value
function toH(c)  {

	if(c == 10) return 'A';
	else if(c == 11) return "B";
	else if(c == 12) return "C";
	else if(c == 13) return "D";
	else if(c == 14) return "E";
	else if(c == 15) return "F";

	return c.toString();

}

function rgbToHSL(r, g, b)  {
	var normR = r / 255;
	var normG = g / 255;
	var normB = b / 255;
	var string = "rgb(" + r + "," + g + "," + b + ")";
	var max = Math.max(normR, normG, normB);
	var min = Math.min(normR, normG, normB);

	var chroma = max - min;

	var lightness = (max + min) / 2;

	var saturation;

	if(chroma == 0)  {
		saturation = 0;
	}
	else saturation = chroma / (1 - (Math.abs(lightness * 2 - 1)));

	var hue;

	if(chroma == 0)  {
		hue = 0;
	}
	else if(max == normR)  {
		hue = 60 * (((normG - normB) / chroma) % 6);
	}
	else if(max == normG)  {
		hue = 60 * (((normB - normR) / chroma) + 2);
	}
	else if(max == normB)  {
		hue = 60 * (((normR - normG) / chroma) + 4);
	}

	saturation = Math.round(saturation * 100);
	lightness = Math.round(lightness * 100);
	hue = Math.round(hue);
	if(hue > 360)  {
		hue = 360 - (hue - 360);
	}
	if(hue < 0)  {
		hue = 360 + hue;
	}

	if(lightness < 10) var string = "hsl("+ hue +", "+ (saturation + 10) +"%, 10%)";		
	else var string = "hsl("+ hue +", "+ saturation +"%, "+ lightness +"%)";

	document.getElementById("title").style.textShadow = "2px 2px "+ string;
	document.getElementById("description").style.color = string;

	return "hsl("+ hue +"°, "+ saturation +"%, "+ lightness +"%)";
}

function hslToRGB(hue, saturation, lightness)  {
	alert(lightness);
	alert(hue);
	var chroma = (1 - Math.abs((2 * lightness) - 1)) * saturation;

	var x = chroma * (1 - Math.abs(((hue / 60) % 2) - 1));

	var m = lightness - (chroma / 2);

	var red, green, blue;

	if(hue >= 0 && hue < 60)  {
		red = chroma;
		green = x;
		blue = 0;
	}
	else if(hue >= 60 && hue < 120)  {
		red = x;
		green = chroma;
		blue = 0;
	}
	else if(hue >= 120 && hue < 180)  {
		red = 0;
		green = chroma;
		blue = x;
	}
	else if(hue >= 180 && hue < 240)  {
		red = 0;
		blue = x;
		green = chroma;
	}
	else if(hue >= 240 && hue < 300)  {
		red = x;
		green = 0;
		blue = chroma;
	}
	else if(hue >= 300 && hue < 360)  {
		red = chroma;
		green = 0;
		blue = x;
	}

	red = (red + m) * 255;
	green = (green + m) * 255;
	blue = (blue + m) * 255;

	return "rgb(" + red + "," + green + "," + blue + ")";
}

//utility funciton to break up rgb values
function rgbToHex(r, g, b) {
	return componentToHex(r) + componentToHex(g) + componentToHex(b);
}

//following functions break a hex value up into the resulting rgb values
function hexToR(h) {
	var digits = cutHex(h);
	var r = parseInt(digits.substring(0, 2), 16);
	return r;
}
function hexToG(h) {
	var digits = cutHex(h);
	var g = parseInt(digits.substring(2,4), 16);
	return g;
}
function hexToB(h) {
	var digits = cutHex(h);
	var b = parseInt(digits.substring(4,6), 16);
	return b;
}

function cutHex(h) {return (h.charAt(0)=="#") ? h.substring(1,7):h}
