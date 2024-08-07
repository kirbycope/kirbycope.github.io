/** Populates the Projects cards on the page. */
function populateProjects(projects) {
    for (var i = 0; i < projects.length; i++) {

        // Append #readme to all GitHub URLs
        if (projects[i].url.indexOf("github") !== -1) {
            projects[i].url = projects[i].url + "#readme"
        }
        
        // <div class="col-md-4">
        var cardContainer = document.createElement("div");
        cardContainer.classList.add("col-md-4");
        cardContainer.classList.add("column");
        cardContainer.classList.add(projects[i].category);
        document.getElementById("projects").appendChild(cardContainer);

        // <div class="card mb-4 shadow-sm">
        var projectCard = document.createElement("div");
        projectCard.classList.add("card");
        projectCard.classList.add("mb-4");
        projectCard.classList.add("shadow-sm");
        cardContainer.appendChild(projectCard);

        // <div>
        var imageWrapper = document.createElement("div");
        imageWrapper.style.position = "relative";
        projectCard.appendChild(imageWrapper);

        // <a>
        var cardImageLink = document.createElement("a");
        cardImageLink.title = "Link to site for " + projects[i].title;
        cardImageLink.href = projects[i].url;
        imageWrapper.appendChild(cardImageLink);

        // <img class="card-img-top" data-src="holder.js/100px225?theme=thumb&bg=55595c&fg=eceeef&text=Thumbnail">
        var cardImageTop = document.createElement("img");
        cardImageTop.alt = "Screenshot of " + projects[i].title;
        cardImageTop.classList.add("card-img-top");
        cardImageTop.style.display = "block";
        cardImageTop.setAttribute("data-src", "holder.js/100px225?theme=thumb&bg=55595c&fg=eceeef&text=Thumbnail");
        cardImageTop.setAttribute("src", "/img/projects/" + projects[i].thumbnail);
        cardImageLink.appendChild(cardImageTop);

        // <img> overlay
        var cardImageOverlay = document.createElement("img");
        cardImageOverlay.style.filter = "drop-shadow(1px 0px 1px #666666)";
        cardImageOverlay.style.bottom = 0;
        cardImageOverlay.style.right = 0;
        cardImageOverlay.style.maxHeight = "64px";
        cardImageOverlay.style.marginLeft = "64px";
        cardImageOverlay.style.position = "absolute";
        if (projects[i].small.indexOf("MCAddon") !== -1 || projects[i].small.indexOf("MCTemplate") !== -1) {
            cardImageOverlay.setAttribute("src", "/img/minecraft_bedrock.png");
        }
        else if (projects[i].small.indexOf("MCFunction") !== -1) {
            cardImageOverlay.setAttribute("src", "/img/minecraft_java.png");
        }
        else if (projects[i].small.indexOf("Angular") !== -1) {
            cardImageOverlay.setAttribute("src", "/img/angular.png");
        }
        else if (projects[i].small.indexOf("Bash") !== -1) {
            cardImageOverlay.setAttribute("src", "/img/bash.png");
        }
        else if (projects[i].small.indexOf("C#") !== -1) {
            cardImageOverlay.setAttribute("src", "/img/csharp.png");
        }
        else if (projects[i].small.indexOf("Creation Kit") !== -1) {
            cardImageOverlay.setAttribute("src", "/img/creation_kit_white.png");
        }
        else if (projects[i].small.indexOf("Godot") !== -1) {
            cardImageOverlay.setAttribute("src", "/img/godot.png");
        }
        else if (projects[i].small.indexOf("Groovy") !== -1) {
            cardImageOverlay.setAttribute("src", "/img/groovy.png");
        }
        else if (projects[i].small.indexOf("Java") !== -1 && projects[i].small.indexOf("JavaScript") == -1) {
            cardImageOverlay.setAttribute("src", "/img/java.png");
        }
        else if (projects[i].small.indexOf("JavaScript") !== -1) {
            cardImageOverlay.setAttribute("src", "/img/javascript.png");
        }
        else if (projects[i].small.indexOf("Node") !== -1) {
            cardImageOverlay.setAttribute("src", "/img/nodejs.png");
        }
        else if (projects[i].small.indexOf("PowerShell") !== -1) {
            cardImageOverlay.setAttribute("src", "/img/powershell.png");
        }
        else if (projects[i].small.indexOf("Python") !== -1) {
            cardImageOverlay.setAttribute("src", "/img/python.png");
        }
        else if (projects[i].small.indexOf("React") !== -1) {
            cardImageOverlay.setAttribute("src", "/img/react.png");
        }
        else if (projects[i].small.indexOf("TI-BASIC") !== -1) {
            cardImageOverlay.setAttribute("src", "/img/ti-basic.png");
        }
        else if (projects[i].small.indexOf("TypeScript") !== -1) {
            cardImageOverlay.setAttribute("src", "/img/typescript.png");
        }
        else if (projects[i].small.indexOf("WordPress") !== -1) {
            cardImageOverlay.setAttribute("src", "/img/wordpress.png");
        }
        else if (projects[i].small.indexOf("Unity") !== -1) {
            cardImageOverlay.setAttribute("src", "/img/unity.png");
        }
        cardImageLink.appendChild(cardImageOverlay);

        // <div class="card-body">
        var cardBody = document.createElement("div");
        cardBody.classList.add("card-body");
        projectCard.appendChild(cardBody);

        // <h5 class="card-title"></p>
        var cardTitle = document.createElement("h5");
        cardTitle.classList.add("card-title");
        cardTitle.innerText = projects[i].title;
        cardBody.appendChild(cardTitle);

        // <h6 class="card-subtitle mb-2 text-muted">
        var cardSubTitle = document.createElement("h6");
        cardSubTitle.classList.add("card-subtitle");
        cardSubTitle.classList.add("mb-2");
        cardSubTitle.classList.add("text-muted");
        cardSubTitle.innerText = projects[i].created;
        cardBody.appendChild(cardSubTitle);

        // <p class="card-text"></p>
        var cardText = document.createElement("p");
        cardText.classList.add("card-text");
        cardText.innerText = projects[i].text;
        cardBody.appendChild(cardText);

        // <div class="d-flex justify-content-between align-items-center">
        var buttonContainer = document.createElement("div");
        buttonContainer.classList.add("d-flex");
        buttonContainer.classList.add("justify-content-between");
        buttonContainer.classList.add("align-items-center");
        cardBody.appendChild(buttonContainer);

        // <div class="btn-group">
        var buttonGroup = document.createElement("div");
        buttonGroup.classList.add("btn-group");
        buttonContainer.appendChild(buttonGroup);

        // <a href="#" class="btn btn-sm btn-outline-secondary" role="button"></a>
        var cardLink = document.createElement("a");
        cardLink.title = "Link to site for " + projects[i].title;
        cardLink.classList.add("btn");
        cardLink.classList.add("btn-sm");
        cardLink.classList.add("btn-outline-secondary");
        cardLink.setAttribute("role", "button");
        cardLink.innerText = "Visit Site";
        cardLink.href = projects[i].url;
        buttonGroup.appendChild(cardLink);

        // <a href="#" class="btn btn-sm btn-outline-primary" role="button"></a>
        var playLink = document.createElement("a");
        playLink.title = "Play " + projects[i].title;
        playLink.classList.add("btn");
        playLink.classList.add("btn-sm");
        playLink.classList.add("btn-outline-primary");
        playLink.setAttribute("role", "button");
        playLink.innerText = "Play Game";
        playLink.href = projects[i].play;
        if (playLink.href.endsWith("undefined") == false)
            buttonGroup.appendChild(playLink);
        
        // <small class="text-muted"></small>
        var smallText = document.createElement("small");
        smallText.classList.add("text-muted");
        buttonContainer.appendChild(smallText);
        smallText.innerText = projects[i].small;
    }
}

/** Execute the function and show all columns */
function filterSelection(c) {
    var x, i;
    x = document.getElementsByClassName("column");
    if (c == "all") c = "";
    // Add the "show" class (display:block) to the filtered elements, and remove the "show" class from the elements that are not selected
    for (i = 0; i < x.length; i++) {
        w3RemoveClass(x[i], "show");
        if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
    }
}

/** Show filtered elements **/
function w3AddClass(element, name) {
    var i, arr1, arr2;
    arr1 = element.className.split(" ");
    arr2 = name.split(" ");
    for (i = 0; i < arr2.length; i++) {
        if (arr1.indexOf(arr2[i]) == -1) {
            element.className += " " + arr2[i];
        }
    }
}

/** Hide elements that are not selected **/
function w3RemoveClass(element, name) {
    var i, arr1, arr2;
    arr1 = element.className.split(" ");
    arr2 = name.split(" ");
    for (i = 0; i < arr2.length; i++) {
        while (arr1.indexOf(arr2[i]) > -1) {
            arr1.splice(arr1.indexOf(arr2[i]), 1);
        }
    }
    element.className = arr1.join(" ");
}

// Add active class to the current button (highlight it)
var btnContainer = document.getElementById("myBtnContainer");
var btns = btnContainer.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function () {
        var current = document.getElementsByClassName("active");
        current[0].className = current[0].className.replace(" active", "");
        this.className += " active";
    });
}

// After the window has loaded...
window.onload = function () {

    // Populate the page
    $.getJSON("projects.json", function(data){
        populateProjects(data);
        // https://www.w3schools.com/howto/howto_js_portfolio_filter.asp
        filterSelection("all");
    });

    // Set the copyright year
    $('span#copyright-year').text(new Date().getFullYear());

};
