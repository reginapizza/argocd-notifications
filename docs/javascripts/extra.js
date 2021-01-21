window.addEventListener("DOMContentLoaded", function() {
  // var xhr = new XMLHttpRequest();
  // xhr.open("GET", window.location + "assets/versions.json");
  // xhr.onload = function() {
  //   var versions = JSON.parse(this.responseText);
  //   latest_version = ""
  //   for(id in versions)
  //       if(versions[id]["aliases"].length > 0 && versions[id]["aliases"].includes("latest")) 
  //           latest_version = "/" + versions[id].version + "/"
  //   if(!window.location.pathname.includes("/latest/") && (latest_version.length > 0 && !window.location.pathname.includes(latest_version)))
  //       document.querySelector("div[data-md-component=announce]").innerHTML = "<div id='announce-msg'>You are viewing the docs for a previous version of Argo CD, <a href='https://argoproj.github.io/argo-cd/'>click here to go to the latest version</a></div>"
  // };
  // xhr.send();

  if (window(READTHEDOCS_DATA)!== "latest") {
    document.querySelector("div[data-md-component=announce]").innerHTML = "<div id='announce-msg'>You are viewing the docs for a previous version of Argo CD, <a href='https://argoproj.github.io/argo-cd/'>click here to go to the latest version</a></div>"
  }
}); 