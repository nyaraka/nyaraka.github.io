function UnityProgress(gameInstance, progress) {
  if (!gameInstance.Module)
    return;
  // if (!gameInstance.logo) {
  //   gameInstance.logo = document.createElement("div");
  //   gameInstance.logo.className = "logo " + gameInstance.Module.splashScreenStyle;
  //   gameInstance.container.appendChild(gameInstance.logo);
  // // }
  if (!gameInstance.animate) {
    gameInstance.animate = document.getElementById("animate");
  }
  if (!gameInstance.cloudone) {
    gameInstance.cloudone = document.getElementById("cloudone");
  }
  if (!gameInstance.cloudtwo) {
    gameInstance.cloudtwo = document.getElementById("cloudtwo");
  }
  if (!gameInstance.progress) {    
    gameInstance.progress = document.createElement("div");
    gameInstance.progress.className = "progress " + gameInstance.Module.splashScreenStyle;
    gameInstance.progress.empty = document.createElement("div");
    gameInstance.progress.empty.className = "empty";
    gameInstance.progress.appendChild(gameInstance.progress.empty);
    gameInstance.progress.full = document.createElement("div");
    gameInstance.progress.full.className = "full";
    gameInstance.progress.appendChild(gameInstance.progress.full);
    gameInstance.container.appendChild(gameInstance.progress);
  }
  gameInstance.progress.full.style.width = (100 * progress) + "%";
  gameInstance.progress.empty.style.width = (100 * (1 - progress)) + "%";

  if (progress == 1) {
    gameInstance.progress.style.display = "none";
    gameInstance.animate.style.display = "none";
    gameInstance.cloudone.style.display = "none";
    gameInstance.cloudtwo.style.display = "none";
  }
}