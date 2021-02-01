setTimeout(function() {
    const callbackName = 'callback_' + new Date().getTime();
    window[callbackName] = function (response) {
      const div = document.createElement('div');
      div.innerHTML = response.html;
      document.querySelector(".md-header-nav > .md-header-nav__title").appendChild(div);
      const container = div.querySelector('.rst-versions');
      div.querySelector('.rst-current-version').addEventListener('click', function() {
          const classes = container.className.split(' ');
          const index = classes.indexOf('shift-up');
          if (index === -1) {
              classes.push('shift-up');
          } else {
              classes.splice(index, 1);
          }
          container.className = classes.join(' ');
      });
    }
  
    var CSSLink = document.createElement('link');
    CSSLink.rel='stylesheet';
    CSSLink.href = '/assets/versions.css';
    document.getElementsByTagName('head')[0].appendChild(CSSLink);
  
    var script = document.createElement('script');
    script.src = 'https://regina-argocd-notifications.readthedocs.io/_/api/v2/footer_html/?'+
        'callback=' + callbackName + '&project=regina-argocd-notifications&page=&theme=mkdocs&format=jsonp&docroot=docs&source_suffix=.md&version=' + (window['READTHEDOCS_DATA'] || { version: 'latest' }).version;
  
    // console.log(script)
    document.getElementsByTagName('head')[0].appendChild(script); 
  
    console.log("RTD data is " + JSON.stringify((window['READTHEDOCS_DATA'])))
  }, 0);
  
//   window.addEventListener("DOMContentLoaded", function() {
    // var ex = new RegExp("/?assets/versions.css$");
    // var sheet = document.querySelector('link[href$="versions.css"]');
  
    // var ABS_BASE_URL = sheet.href.replace(ex, "");
    // var CURRENT_VERSION = ABS_BASE_URL.split("/").pop();
  
    // function makeSelect(options, selected) {
    //   var select = document.createElement("select");
    //   select.classList.add("form-control");
  
    //   options.forEach(function(i) {
    //     var option = new Option(i.text, i.value, undefined,
    //                             i.value === selected);
    //     select.add(option);
    //   });
  
    //   return select;
    // }
  
    // var versions = (window['READTHEDOCS_DATA'].version)
    // console.log("versions variable is " + versions)
  
    // var select = makeSelect(versions.map(function(i) {
    //   return {text: i.title, value: i.version};
    // }), realVersion);
    // select.addEventListener("change", function(event) {
    //   window.location.href = ABS_BASE_URL + "/../" + this.value;
    // });
  
    // var container = document.createElement("div");
    // container.id = "version-selector";
    // container.className = "md-header-nav";
    // container.appendChild(select);
  
    // var header = document.querySelector(".md-header-nav > .md-header-nav__title");
    // header.parentNode.insertBefore(container, header.nextSibling);
//   });

// VERSION WARNINGS
  window.addEventListener("DOMContentLoaded", function() {
    console.log("version in extra.js is " + (window['READTHEDOCS_DATA']).version)
    if ((window['READTHEDOCS_DATA']).version !== "latest") {
        document.querySelector("div[data-md-component=announce]").innerHTML = "<div id='announce-msg'>You are viewing the docs for a previous version of Argo CD, <a href='https://argoproj.github.io/argo-cd/'>click here to go to the latest version</a></div>"
    }
  
    if ((window['READTHEDOCS_DATA']).version === "latest") {
        document.querySelector("div[data-md-component=announce]").innerHTML = "<div id='announce-msg'>Yay you're on the latest version of docs!</div>"
    }
  }); 
  