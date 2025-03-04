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

    if (projects[i].preview !== undefined) {
      // Add listener to show preview on hover
      imageWrapper.addEventListener("mouseenter", function () {
        var thumbnail = this.querySelector('.card-img-top');
        thumbnail.style.display = "none";
        var preview = this.querySelector('.card-img-bottom');
        preview.style.display = "block";
        preview.play();
      });
      // Add listener to show thumbnail on mouse leave
      imageWrapper.addEventListener("mouseleave", function () {
        var thumbnail = this.querySelector('.card-img-top');
        thumbnail.style.display = "block";
        var preview = this.querySelector('.card-img-bottom');
        preview.style.display = "none";
        preview.pause();
      });
      // <video autoplay="false" loop="true" muted="true">
      var cardImageBottom = document.createElement("video");
      cardImageBottom.classList.add("card-img-bottom");
      cardImageBottom.style.display = "none";
      cardImageBottom.setAttribute("loop", "");
      cardImageBottom.setAttribute("muted", "");
      cardImageBottom.muted = true;
      // <source src="..." type="video/mp4">
      var source = document.createElement("source");
      source.setAttribute("src", "/img/project-previews/" + projects[i].preview);
      source.setAttribute("type", "video/mp4");
      cardImageBottom.appendChild(source);
      cardImageLink.appendChild(cardImageBottom);
    }

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

    //<p class="text-body-secondary">
    if (projects[i].goal !== undefined) {

      //<details style="padding-bottom: 0.5rem;">
      var details = document.createElement("details");
      details.style.paddingBottom = "0.5rem";
      cardBody.appendChild(details);

      // <summary><strong>Project Goal</strong></summary>
      var summary = document.createElement("summary");
      summary.innerHTML = "<strong>Project Goal</strong>";
      details.appendChild(summary);

      // <p>Testing <a href="https://docs.godotengine.org/en/stable/classes/class_softbody3d.html" target="_blank">SoftBody3D</a> physics and refraction shaders.</p>
      var goal = document.createElement("p");
      goal.innerHTML = projects[i].goal;
      details.appendChild(goal);
    }

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
  $.getJSON("projects.json", function (data) {
    populateProjects(data);
    // https://www.w3schools.com/howto/howto_js_portfolio_filter.asp
    filterSelection("all");
  });

  // Set the copyright year
  $('span#copyright-year').text(new Date().getFullYear());

};

// ----------------------------------------

/** 
 * Mobile viewport detection script for video preview
 * Enables video previews when thumbnails are in middle third of screen
 */

// Global observer reference to prevent duplicate initialization
let videoPreviewObserver = null;
let observerInitialized = false;
let hasUserInteracted = false;

/** Set up Intersection Observer for detecting when thumbnails are in the middle third of viewport (mobile only) */
function setupMobileVideoPreviewObserver() {
  // More reliable mobile detection using both width and user agent
  const isMobile = window.innerWidth <= 768 || /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

  // Don't run the observer if not on mobile
  if (!isMobile) {
    console.log("Not a mobile device, observer not initialized");
    return null;
  }

  // Don't reinitialize if already created
  if (observerInitialized) {
    console.log("Observer already initialized, skipping");
    return videoPreviewObserver;
  }

  console.log("Mobile device detected, initializing observer");

  // Get viewport height
  const viewportHeight = window.innerHeight || document.documentElement.clientHeight;

  // Calculate middle third boundaries
  const oneThird = viewportHeight / 3;
  const middleThirdStart = oneThird;
  const middleThirdEnd = oneThird * 2;

  // Create the IntersectionObserver
  const options = {
    root: null, // Use the viewport
    rootMargin: `-${middleThirdStart}px 0px -${viewportHeight - middleThirdEnd}px 0px`,
    threshold: 0.1 // Trigger when at least 10% of the target is visible
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      // Get the image wrapper div that contains both thumbnail and video
      const imageWrapper = entry.target;
      const thumbnail = imageWrapper.querySelector('.card-img-top');
      const videoPreview = imageWrapper.querySelector('.card-img-bottom');

      // Only proceed if we have both elements
      if (!thumbnail || !videoPreview) return;

      if (entry.isIntersecting) {
        // Show video when in middle third
        thumbnail.style.display = "none";
        videoPreview.style.display = "block";

        // Only try to play if the user has interacted with the page
        if (hasUserInteracted) {
          // Set src attribute only when in view to avoid excessive video loads
          if (!videoPreview.src && videoPreview.querySelector('source')) {
            videoPreview.src = videoPreview.querySelector('source').src;
          }

          // Force autoplay with muted attribute
          videoPreview.muted = true;
          videoPreview.setAttribute("muted", "");
          videoPreview.setAttribute("playsinline", "");

          const playPromise = videoPreview.play();
          if (playPromise !== undefined) {
            playPromise.catch(error => {
              console.log("Auto-play was prevented:", error);
            });
          }
        }
      } else {
        // Show thumbnail when outside middle third
        thumbnail.style.display = "block";
        videoPreview.style.display = "none";

        // Pause to conserve resources
        try {
          videoPreview.pause();
        } catch (e) {
          // Ignore errors on pause
        }
      }
    });
  }, options);

  // Find all image wrappers that have video previews
  const imageWrappers = document.querySelectorAll('div.card div[style="position: relative;"]');
  let observedCount = 0;

  imageWrappers.forEach(wrapper => {
    // Only observe elements that have a video preview
    if (wrapper.querySelector('.card-img-bottom')) {
      observer.observe(wrapper);
      observedCount++;
    }
  });

  console.log(`Observing ${observedCount} cards with video previews`);

  // Mark as initialized
  observerInitialized = true;
  videoPreviewObserver = observer;

  return observer;
}

// Remove desktop hover behaviors on mobile
function disableMobileHoverEvents() {
  if ((window.innerWidth <= 768 || /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent))
    && !window.mobileHoverDisabled) {

    console.log("Removing hover events on mobile");
    const imageWrappers = document.querySelectorAll('div.card div[style="position: relative;"]');

    imageWrappers.forEach(wrapper => {
      // Create a clone without event listeners
      const newWrapper = wrapper.cloneNode(true);
      wrapper.parentNode.replaceChild(newWrapper, wrapper);
    });

    // Mark as done so we don't repeat this operation
    window.mobileHoverDisabled = true;
  }
}

// Main initialization function
function initVideoPreview() {
  // Only do this once
  if (window.videoPreviewInitialized) return;

  console.log("Initializing video preview system");

  // Disable the desktop hover behavior
  disableMobileHoverEvents();

  // Set up the intersection observer
  setupMobileVideoPreviewObserver();

  // Listen for resize events with debounce to adjust the observer
  let resizeTimer;
  window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
      // Check if mobile state changed
      const wasMobile = observerInitialized;
      const isMobile = window.innerWidth <= 768 || /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

      if (wasMobile && !isMobile) {
        // Disconnecting observer when switching to desktop
        console.log("Switching to desktop, disconnecting observer");
        if (videoPreviewObserver) {
          videoPreviewObserver.disconnect();
          videoPreviewObserver = null;
          observerInitialized = false;
        }

        // Reset all videos to thumbnail state
        const videos = document.querySelectorAll('.card-img-bottom');
        videos.forEach(video => {
          video.style.display = "none";
          video.pause();

          // Show the corresponding thumbnail
          const thumbnail = video.parentElement.querySelector('.card-img-top');
          if (thumbnail) {
            thumbnail.style.display = "block";
          }
        });
      }
      else if (!wasMobile && isMobile) {
        // Switching to mobile
        console.log("Switching to mobile, initializing observer");
        disableMobileHoverEvents();
        setupMobileVideoPreviewObserver();
      }
    }, 250);
  });

  // Mark as initialized
  window.videoPreviewInitialized = true;
}

// Wait for user interaction before enabling video playback
function enableVideoPlayback() {
  if (!hasUserInteracted) {
    console.log("User interaction detected, enabling video playback");
    hasUserInteracted = true;

    // Find all currently visible videos and try to play them
    const visibleVideos = document.querySelectorAll('.card-img-bottom[style="display: block;"]');
    visibleVideos.forEach(video => {
      // Set necessary attributes for mobile playback
      video.muted = true;
      video.setAttribute("muted", "");
      video.setAttribute("playsinline", "");

      // Try to load and play the video
      if (video.querySelector('source') && !video.src) {
        video.src = video.querySelector('source').src;
      }

      video.play().catch(e => {
        // Just log errors, don't stop execution
        console.log("Could not autoplay:", e);
      });
    });
  }
}

// Add various user interaction listeners to enable video playback
document.addEventListener('touchstart', enableVideoPlayback, { once: false, passive: true });
document.addEventListener('click', enableVideoPlayback, { once: false, passive: true });
document.addEventListener('scroll', enableVideoPlayback, { once: false, passive: true });

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', function () {
  console.log("DOM Content Loaded, waiting for projects to load");

  // Watch for when projects are added to the DOM
  const projectsContainer = document.getElementById('projects');
  if (projectsContainer) {
    const observer = new MutationObserver(function (mutations) {
      for (let mutation of mutations) {
        if (mutation.type === 'childList' && mutation.addedNodes.length > 0) {
          console.log("Projects detected in DOM");

          // Give a small delay for everything to render
          setTimeout(() => {
            // Only initialize once
            if (!window.videoPreviewInitialized) {
              initVideoPreview();
            }
          }, 500);

          // No need to keep watching after we've detected projects
          observer.disconnect();
          return;
        }
      }
    });

    // Start observing the projects container
    observer.observe(projectsContainer, { childList: true, subtree: true });
  }

  // Fallback initialization in case the mutation observer doesn't trigger
  setTimeout(() => {
    if (!window.videoPreviewInitialized) {
      console.log("Fallback initialization");
      initVideoPreview();
    }
  }, 2000);
});
