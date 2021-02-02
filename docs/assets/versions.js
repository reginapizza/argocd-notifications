setTimeout(function() {
        const callbackName = 'callback_' + new Date().getTime();
        window[callbackName] = function (response) {
        const div = document.createElement('div');
        div.innerHTML = response.html;
        document.querySelector(".md-header-nav > .md-header-nav__title").appendChild(div);
        const container = div.querySelector('.rst-versions');
        var caret = document.createElement('div');
        caret.innerHTML = "<span class='fa fa-caret-down'></span>"
        caret.classList.add('dropdown-caret')
        div.querySelector('.rst-current-version').appendChild(caret);
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
        document.getElementsByTagName('head')[0].appendChild(script);
  }, 0);

// VERSION WARNINGS
  window.addEventListener("DOMContentLoaded", function() {
    if ((window['READTHEDOCS_DATA']).version !== "latest") {
        document.querySelector("div[data-md-component=announce]").innerHTML = "<div id='announce-msg'>You are viewing the docs for a previous version of Argo CD, <a href='https://argoproj.github.io/argo-cd/'>click here to go to the latest version</a></div>"
    }
  
    if ((window['READTHEDOCS_DATA']).version === "latest") {
        document.querySelector("div[data-md-component=announce]").innerHTML = "<div id='announce-msg'>Yay you're on the latest version of docs!</div>"
    }
  }); 
  
