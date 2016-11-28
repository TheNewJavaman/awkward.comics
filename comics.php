<!DOCTYPE html>
<html>

  <!-- HEADER -->
  <head>

    <!-- CSS Files -->
    <link rel="stylesheet" type="text/css" href="style.css">

    <!-- Javascript / JQuery Files -->
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js"></script>
    <script src="script.js"></script>

    <!--
    - Page title -
    Replace "TITLE" with page title.
    -->
    <title>Awkward Comics | Comics</title>

  </head>

  <!-- BODY -->
  <body>

    <!-- Navigation Menu -->
    <section class="nav">

      <ul>

        <li><a href="./index.html#home" class="logo">AWKWARD COMICS</a></li>

        <li><a href="./index.html#home" class="link1">HOME</a></li>

      </ul>

    </section>

    <!-- SECTION 1 RED -->
    <section class="section s1">

      <div class="container">

        <!-- Top section -->
        <div class="column-top">

          <p class="header">Comics</p>

          <hr>

          <p class="paragraph">Latest comics are below</p>

        </div>



        <!-- Center Column, the main comic display -->
        <div class="column-center">
	  <?php
            echo "<img src='bg.jpg'/>";
	  ?>
        </div>



        <!-- Left Column -->
        <div class="left">

          <button onclick="location.href='index.html#home'" class="button btn1">BACK</button>

        </div>

        <!-- Right Column -->
        <div class="right">

          <button onclick="location.href='index.html#home'" class="button btn1">NEXT</button>
       
        </div>

	<div class="column-bottom">

	  <button onclick="location.href='index.html#home'" class="button btn1">READ MORE</button>

	</div>

      </div>
      	
      	<p class="paragraph credits">Original site design by Tyson Mak</p>
      
    </section>

  </body>

</html>