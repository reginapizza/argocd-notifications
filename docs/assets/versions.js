setTimeout(function() {
    const callbackName = 'callback_' + new Date().getTime();
    window[callbackName] = function (response) {
        const div = document.createElement('div');
        div.innerHTML = response.html;
        document.body.appendChild(div);
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

    window.addEventListener("DOMContentLoaded", function() {
        var xhr = new XMLHttpRequest();
        xhr.open("GET", window.location + "../versions.json");
        xhr.onload = function() {
          var versions = JSON.parse(this.responseText);
          latest_version = ""
          for(id in versions)
              if(versions[id]["aliases"].length > 0 && versions[id]["aliases"].includes("latest")) 
                  latest_version = "/" + versions[id].version + "/"
          if(!window.location.pathname.includes("/latest/") && (latest_version.length > 0 && !window.location.pathname.includes(latest_version)))
              document.querySelector("div[data-md-component=announce]").innerHTML = "<div id='announce-msg'>You are viewing the docs for a previous version of Argo CD, <a href='https://argoproj.github.io/argo-cd/'>click here to go to the latest version</a></div>"
        };
        xhr.send();
    }); 
    
    var script = document.createElement('script');
    script.src = 'https://regina-argocd-notifications.readthedocs.io/_/api/v2/footer_html/?'+
        'callback=' + callbackName + '&project=regina-argocd-notifications&page=&theme=mkdocs&format=jsonp&docroot=docs&source_suffix=.md&version=' + (window['READTHEDOCS_DATA'] || { version: 'latest' }).version;
    
    document.getElementsByTagName('head')[0].appendChild(script); 
}, 50);
