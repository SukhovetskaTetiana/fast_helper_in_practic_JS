// 1. Elements

// nav>ul>li

<nav>
  <ul>
    <li></li>
  </ul>
</nav>;

// 2. Siblings

// main+h1+p

<main></main>
<h1></h1>
<p></p>

// 3. Multiplication

// ul>li*3

<ul>
    <li></li>
    <li></li>
    <li></li>
</ul>

// 4.  Climb Up

// header+main>h>span^section

<header></header>
<main>
    <h1>
      <span></span>
    </h1>
    <section></section>
</main>

// 5. Grouping

// body>(header>nav)

<body>
    <header>
      <nav></nav>
    </header>
</body>

// 6. Ids&Classes

// h1.heading+div#box

<h1 class='heading'></h1>
<div id='box'></div>