

let app = {
    // key:null,
    start() {
        // app.startAnimation();

        app.createClouds(4);

    },
    createClouds(clouds) {

        for (var i = 0; i < clouds; i++) {

            let newCloud = new Image();

            newCloud.className = "cloud";

            newCloud.src = "./images/cloud.png";

            appContainer.appendChild(newCloud);

            setInterval(function () {

                if (newCloud.offsetLeft > appContainer.offsetWidth) {
                    newCloud.style.left = -newCloud.offsetWidth+'px';
                } else {
                    newCloud.style.left = (newCloud.offsetLeft + 1) + 'px';
                }

            }, (i+1) * 10);

        }

    },
    startAnimation() {

        app.key = setInterval(function () {

            debugger;

            if (cloud.offsetLeft > appContainer.offsetWidth) {
                cloud.style.left = 0;
            } else {
                cloud.style.left = (cloud.offsetLeft + 1) + 'px';
            }

        }, 10);

    }
}


window.onload = app.start;