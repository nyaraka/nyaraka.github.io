<?php
    session_start();

		if(!isset($_SESSION['batteruser'])){
			echo "<script> window.location='http://dev.nationalmathbee.com/batterup/SignIn.html'; </script>";
		}

		if( $_SESSION['batteruser'] != $_GET["student"]){
			echo "<script> window.location='http://dev.nationalmathbee.com/batterup/selectgame.php'; </script>";
		}
		
?>
<!DOCTYPE html>

<html>
	<head id="Head1">
				<!-- Global site tag (gtag.js) - Google Analytics -->
		<script async src="https://www.googletagmanager.com/gtag/js?id=UA-117972733-1"></script>
		<script>
			window.dataLayer = window.dataLayer || [];
			function gtag(){dataLayer.push(arguments);}
			gtag('js', new Date());

			gtag('config', 'UA-117972733-1');
		</script>
		<!-- Facebook Pixel Code -->
		<script>
		!function(f,b,e,v,n,t,s)
		{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
		n.callMethod.apply(n,arguments):n.queue.push(arguments)};
		if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
		n.queue=[];t=b.createElement(e);t.async=!0;
		t.src=v;s=b.getElementsByTagName(e)[0];
		s.parentNode.insertBefore(t,s)}(window,document,'script',
		'https://connect.facebook.net/en_US/fbevents.js');
		 fbq('init', '1583115981709288'); 
		fbq('track', 'PageView');
		</script>
		<noscript>
		 <img height="1" width="1" 
		src="https://www.facebook.com/tr?id=1583115981709288&ev=PageView
		&noscript=1"/>
		</noscript>
		<!-- End Facebook Pixel Code -->
		<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
		<meta name="viewport" content="width=device-width, maximum-scale=1.0, minimum-scale=1.0, initial-scale=1.0" />
		<title>BatterUp</title>
		<link rel="shortcut icon" href="favicon.ico" type="image/x-icon" />
		<link rel="Stylesheet" type="text/css" href="../css/screen_styles.css" />
		<link rel="Stylesheet" type="text/css" href="../css/screen_layout_large.css" />
		<link rel="stylesheet" type="text/css" media="only screen and (min-width:50px) and (max-width:500px)" href="../css/screen_layout_small.css" />
		<link rel="stylesheet" type="text/css" media="only screen and (min-width:501px) and (max-width:800px)" href="../css/screen_layout_medium.css" />
		 <script src="../Release/UnityLoader.js"></script>
    <script>
      var gameInstance = UnityLoader.instantiate("canvas", "../Release/BatterUp.json");
    </script>
	</head>

	<body class="batteruppage">
		<div> 
			<div class="batterupheader">
				<h1 id="h1Player"></h1>           
			</div>
			<div class="batterupgame" style="text-align:center;">
				<a id="btnBack" class="batterup_back" href="selectgame.php"></a>
		
				<div id="canvas" style="width: 800px; height: 600px; margin: auto"></div>
				<br /><br />
				<h3 style="color:#fff;">Use the SPACEBAR to pitch, skip base running, and bypass the scoreboard.</h3>
			</div>
		</div>

	</body>
</html>
