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

    //     const div = document.createElement('div');
    //     div.innerHTML = response.html
    //     console.log(response.html)
    //     document.body.appendChild(div);
    //     var versions = JSON.parse(response.html);

    //     var realVersion = versions.find(function(i) {
    //     return i.version === "latest" ||
    //             i.aliases.includes("latest");
    //     }).version;

    //     var select = makeSelect(versions.map(function(i) {
    //         return {text: i.title, value: i.version};
    //       }), realVersion);
    //       select.addEventListener("change", function(event) {
    //         window.location.href = ABS_BASE_URL + "/../" + this.value;
    //       });
      
    //       var container = document.createElement("div");
    //       container.id = "version-selector";
    //       container.className = "md-header-nav";
    //       container.appendChild(select);
    //       var header = document.querySelector(".md-header-nav > .md-header-nav__title");
    // header.parentNode.insertBefore(container, header.nextSibling);

    }
    
    // document.getElementsByTagName('head')[0].appendChild(<base href="/"/>);

    var link = document.createElement('link');
    link.rel='stylesheet';
    link.href = 'https://assets.readthedocs.org/static/css/badge_only.css';
    document.getElementsByTagName('head')[0].appendChild(link);

    // RTD version
    var versionRTDLink = document.createElement('link');
    versionRTDLink.rel='stylesheet';
    versionRTDLink.href = 'assets/versions.css';
    document.getElementsByTagName('head')[0].appendChild(versionRTDLink);

    // my version
    var versionCSSLink = document.createElement('link');
    versionCSSLink.rel='stylesheet';
    versionCSSLink.href = '../css/version-select.css';
    document.getElementsByTagName('head')[0].appendChild(versionCSSLink);

    var versionWarningCSSLink = document.createElement('link');
    versionWarningCSSLink.rel='stylesheet';
    versionWarningCSSLink.href = '../stylesheets/extra.css';
    document.getElementsByTagName('head')[0].appendChild(versionWarningCSSLink);

    var versionScript = document.createElement('script');
    versionScript.src = '../js/version-select.js';
    document.getElementsByTagName('head')[0].appendChild(versionScript);

    var versionWarningScript = document.createElement('script');
    versionWarningScript.src ='../javascripts/extra.js';
    document.getElementsByTagName('head')[0].appendChild(versionWarningScript);

    var script = document.createElement('script');
    script.src = 'https://regina-argocd-notifications.readthedocs.io/_/api/v2/footer_html/?'+
        'callback=' + callbackName + '&project=regina-argocd-notifications&page=&theme=mkdocs&format=jsonp&docroot=docs&source_suffix=.md&version=' + (window['READTHEDOCS_DATA'] || { version: 'latest' }).version;
    
    document.getElementsByTagName('head')[0].appendChild(script); 

    console.log("version is " + (window['READTHEDOCS_DATA']).version)
    console.log("test")
}, 0);
