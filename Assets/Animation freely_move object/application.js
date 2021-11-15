let app = {
    init: function () {


        this.startAnimation = true;
        this.setupBaloons();
        this.animate();        

    },
    setupBaloons: function () {

        let boxArea = appContainer.getBoundingClientRect();
        let baloons = document.querySelectorAll('.baloon');

        baloons.forEach(function (baloon) {

            baloon.style.top = ((Math.random() * boxArea.height)) + 'px';
            baloon.style.left = ((Math.random() * boxArea.width)) + 'px';

            baloon.Xdirection = 0;
            baloon.Ydirection = 0;

            let newBounds = baloon.getBoundingClientRect();

            if ((newBounds.top + newBounds.height) > boxArea.height) {

                const outsideDifferenceY = (newBounds.top + newBounds.height) - boxArea.height;

                const currentPosition = parseFloat(baloon.style.top);
                baloon.style.top = (currentPosition - outsideDifferenceY) + 'px';



            }


        });

    },
    addBaloon:function(){   


        const boxArea = appContainer.getBoundingClientRect();

        let newBaloon = document.createElement('img');
        newBaloon.setAttribute('src', 'baloon.png');
        newBaloon.setAttribute('class', 'baloon');
        newBaloon.style.top = ((Math.random() * boxArea.height/2)) + 'px';
        newBaloon.style.left = ((Math.random() * boxArea.width/2)) + 'px';
        appContainer.appendChild(newBaloon);
        

        app.baloons = document.querySelectorAll('.baloon');
    },
    animate: function () {

        app.baloons = document.querySelectorAll('.baloon');
        let boxArea = appContainer.getBoundingClientRect();
        
        setInterval(() => {
            
            boxArea = appContainer.getBoundingClientRect();

            if (this.startAnimation) {


                app.baloons.forEach((baloon) => {

                    let newBounds = baloon.getBoundingClientRect();

                    let moveUp = Math.round(Math.random() * 1);

                    //moveUp is 1
                    // if (moveUp) {
                    //     let newTop = parseFloat(baloon.style.top) - Math.round((Math.random() * 4));
                    //     baloon.style.top = newTop + 'px';
                    // } else {
                    // let speed = Math.round((Math.random() * 4));
                    let speed = 1;
                    let newTop = parseFloat(baloon.style.top);
                    let newLeft = parseFloat(baloon.style.left);

                    baloon.style.top = (baloon.Ydirection ? newTop + speed : newTop - speed) + 'px';
                    baloon.style.left = (baloon.Xdirection ? newLeft + speed : newLeft - speed) + 'px';

                    checkPosition(baloon)

                    //}




                });


            }




        }, 5);


        function checkPosition(baloon){

            let newBounds = baloon.getBoundingClientRect();
            
            if(newBounds.top < boxArea.top){
                baloon.Ydirection = 1;
            }

            if((newBounds.top + newBounds.height) >= boxArea.top + boxArea.height){
                baloon.Ydirection = 0;
            }

            if(newBounds.left < boxArea.left){
                baloon.Xdirection = 1;
            }

            if((newBounds.left + newBounds.width) >= (boxArea.left + boxArea.width)){
                baloon.Xdirection = 0;
            }


        }

    }
};