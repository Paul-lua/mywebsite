function translateContainerUp() {
    const container = document.getElementById('container');
    container.style.transform = 'translate(-50%, -48vh)';
}

function translateContainerDown() {
  closePortfolio();
  setTimeout(couldntThinkOfAFunctionName, 100);
  function couldntThinkOfAFunctionName() {
    const container = document.getElementById('container');
    container.style.transform = 'translate(-50%, -50%)';
  }
}

function loadPortfolio() {
  setTimeout(actualLoad, 1100);
  function actualLoad() {
    const container = document.getElementById('container');
    container.innerHTML =
        `<h1>giro<span>.pw</span></h1>
        <ul>
          <li><a class="fa-brands fa-discord" href="https://discordlookup.com/user/530170572232196104" title="Discord"></a></li>
          <li><a class="fa-brands fa-github" href="https://github.com/EnzoTuCoco" title="Github"></a></li>
          <li><a class="fa-brands fa-youtube" href="https://www.youtube.com/channel/UCGtyhHo9bOf5Yn8sX2k-aJA" title="Youtube"></a></li>
          <li><a class="fa-brands fa-steam" href="https://steamcommunity.com/id/enzo75/" title="Steam"></a></li>
        </ul>
      <div id="portfolio">
        <div id="what">
          <h2><span>What</span> do you do?</h2>
          <p>I am a Network Engineer and do Web Development as a hobby and a class at my school.</p>
        </div>
        <div id="why">
            <h2><span>Why</span> do you do it?</h2>
            <p>It's what I love to do, and I'm exploring more things as I go along in my career. Eventually I want to develop cheats for games and get into cybersecurity.</p>
        </div>
        <div id="where">
            <h2><span>Where</span> can I find work you've done?</h2>
            <div id="spanhack"><p>Right at the bottom of this page. <span>(psst.. keep scrolling)</span></p></div>
        </div>
      
        <div class="box">
              <a class="item1" href="https://giroware.xyz"><div></div></a>
              <a class="item2" href="https://giro.pw"><div></div></a>
        </div>
          
        <div id="giroware">
            <h2>giroware:</h2>
            <p>giroware is a proof of concept/showcase website for a game cheat I want to make with the same name.</p>
        </div>
        <div id="giropw">
            <h2>giro.pw:</h2>
            <p>giro.pw is a short url page I can send to someone so they can easily access most of my socials.</p>
        </div>
      </div>
      </div>
      </div>`;
      
      ScrollReveal().reveal('#portfolio', { duration: 1e3,
        delay: 0,
        scale: .5 });
  }

}

function closePortfolio() {
    const container = document.getElementById('container');
    container.innerHTML =
    `<h1>giro<span>.pw</span></h1>
    <ul>
      <li><a class="fa-brands fa-discord" href="https://discordlookup.com/user/530170572232196104" title="Discord"></a></li>
      <li><a class="fa-brands fa-github" href="https://github.com/EnzoTuCoco" title="Github"></a></li>
      <li><a class="fa-brands fa-youtube" href="https://www.youtube.com/channel/UCGtyhHo9bOf5Yn8sX2k-aJA" title="Youtube"></a></li>
      <li><a class="fa-brands fa-steam" href="https://steamcommunity.com/id/enzo75/" title="Steam"></a></li>
    </ul>`;

}

let rainbow = document.getElementById('button');
let counter = 0;

rainbow.addEventListener('click', function() {
  // Increment the counter each time the button is clicked
  counter++;
  console.log(counter);

  if (counter === 15) {
    // If the button has been clicked 15 times, change the background color to rainbow
    document.body.style.animation = 'rainbow 10s ease infinite';
  }
});
