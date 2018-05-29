// function UnityProgress(gameInstance, progress) {
//   if (!gameInstance.Module)
//     return;
//   if (!gameInstance.logo) {
//     gameInstance.logo = document.createElement("div");
//     gameInstance.logo.className = "logo " + gameInstance.Module.splashScreenStyle;
//     gameInstance.container.appendChild(gameInstance.logo);
//   }
//   if (!gameInstance.progress) {    
//     gameInstance.progress = document.createElement("div");
//     gameInstance.progress.className = "progress " + gameInstance.Module.splashScreenStyle;
//     gameInstance.progress.empty = document.createElement("div");
//     gameInstance.progress.empty.className = "empty";
//     gameInstance.progress.appendChild(gameInstance.progress.empty);
//     gameInstance.progress.full = document.createElement("div");
//     gameInstance.progress.full.className = "full";
//     gameInstance.progress.appendChild(gameInstance.progress.full);
//     gameInstance.container.appendChild(gameInstance.progress);
//   }
//   gameInstance.progress.full.style.width = (100 * progress) + "%";
//   gameInstance.progress.empty.style.width = (100 * (1 - progress)) + "%";
//   if (progress == 1)
//     gameInstance.logo.style.display = gameInstance.progress.style.display = "none";
// }

function init() {
    
}

function showUnity(show) {
    document.getElementById('loading').style.display = show ? 'none' : '';
    document.getElementById('canvas').style.display = show ? '' : 'none';
}

function UnityProgress (dom) {
  this.progress = 0.0;
  this.message = "";
  this.dom = dom;

  // createjs.CSSPlugin.install(createjs.Tween);
  // createjs.Ticker.setFPS(60);

  var parent = dom.parentNode;
  
  this.SetProgress = function (progress) { 
    if (this.progress < progress)
      this.progress = progress; 
    if (progress == 1) {
      this.SetMessage("Loading...");
      document.getElementById("bgBar").style.display = "none";
      document.getElementById("progressBar").style.display = "none";
    } 
    this.Update();
  }
  this.SetMessage = function (message) { 
    this.message = message; 
    this.Update();
  }
  this.Clear = function() {
    document.getElementById("loadingBox").style.display = "none";
  }
  this.Update = function() {
    var length = 200 * Math.min(this.progress, 1);
    bar = document.getElementById("progressBar");
    // createjs.Tween.removeTweens(bar);
    // createjs.Tween.get(bar).to({width: length}, 500, createjs.Ease.sineOut);
    bar.style.width = length + "px";
    document.getElementById("loadingInfo").innerHTML = this.message;
  }
  this.Update ();
}