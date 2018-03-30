<?php

function makeHTML( $number )  {
	echo "<div id='sliderDiv" . $number . "' class='mid part'>";
	echo "<button type='button' id='iButton" . $number . "' onclick='decrement(" . $number . ")' class='font2 change'>Decrement</button>";
	echo "<input type='range' id='slider" . $number . "' value='255' min='0' max='255' oninput='slide(" . $number . ")' onchange='send()'/>";
	echo "<button type='button' id='dButton" . $number . "' onclick='increment(" . $number . ")' class='font2 change'>Increment</button></div>";
	echo "<div id='numDiv" . $number . "' class='part mid'>";
	echo "<input type='number' required id='num" . $number . "' class='font2' value='255' min='0' max='255' onchange='update(" . $number . ")' oninput='update(" . $number . ")'></div>";
}

?>

<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
    <title>Color Picker App</title>
    <link rel="stylesheet" type="text/css" href="style.css">
    <link href="https://fonts.googleapis.com/css?family=Limelight" rel="stylesheet">
    <script src="scripts.js">
    </script>
  </head>
  <body id="body" onload="readHex()">
  	<div id="wrapper">
  		<div id="header" class="mid">
  			<h1 id="title" class='font2'>C H R O M A T A</h1>
  			<h2 id="description" class='font2'>Created by HG King</h2>
  		</div>
			<br>
  		<div id="datContainer" class="mid">
  			<input type="text" id="rgb" class='font2' required pattern="^#?([a-fA-F0-9]{6}|[a-fA-F0-9]{3})$" value="" onchange="hexUpdate()">
  			<input type="text" id="hex" class='font2' value="rgb(255,255,255)" onchange="">
				<input type="text" id="hsl" class='font2' value="hsl(0,0,0)" onchange="">
  		</div>
  		<br>
  		<div id="topContainer" class="mid color">
			<? makeHTML(0) ?>
  		</div>
  		<br>
  		<div id="midContainer" class="mid color">
  			<? makeHTML(1) ?>
  		</div>
  		<br>
  		<div id="botContainer" class="mid color">
  			<? makeHTML(2) ?>
  		</div>
  		<br>
  		<div class="mid">
  			<input type='range' id='sliderR' value='500' min='0' max='1000' oninput='rainbowSlider()' onchange='send()'/>
  		</div>
  		<div id="butContainer" class="mid">
			<button type="button" id='blueButton' onclick="setColors(0, 0, 255)" class='font2'>Blue</button>
	  		<button type="button" id='bButton' onclick="setColors(0, 0, 0)" class='font2'>Black</button>
			<button type="button" id='rButton'  onclick="random()" class='font2 change'>Random</button>
			<button type="button" id='wButton' onclick="setColors(255, 255, 255)" class='font2'>White</button>
			<button type="button" id='redButton' onclick="setColors(255, 0, 0)" class='font2'>Red</button>
		</div>
  	</div>
  </body>
</html>
