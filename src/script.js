document.addEventListener("DOMContentLoaded", function () {
    const catsContainer = document.getElementById("catsContainer");

    fetch("http://localhost:3000/characters")
        .then(result => { return result.json(); })
        .then(data => {
            const catNames = [];
            const catContainers = [];
            const catImageContainers = [];
            const catImages = [];

            for (const key in data) {
                const catName = data[key].name;
                const catImage = data[key].image;


                const catContainer = document.createElement("div");
                catContainer.classList.add("cat");


                const catImageElement = document.createElement("div");
                catImageElement.classList.add("cat-image");


                const catElement = document.createElement("h3");
                catElement.classList.add("cat-name");
                catElement.textContent = `${catName}`;

                catsContainer.appendChild(catContainer);
                catContainer.appendChild(catImageElement);
                catContainer.appendChild(catElement);

                catNames.push(catElement);
                catContainers.push(catContainer);
                catImageContainers.push(catImageElement);
                catImages.push(catImage);

            }

            console.log(catImages);

            attachEventListeners(catNames, catContainers, catImageContainers, catImages);


        }).catch(error => {
            console.error(error);
        });

    function attachEventListeners(catNames, catContainers, catImageContainers, catImages) {
        catNames.forEach(catNameElement => {
            catNameElement.addEventListener("click", event => {
                const clickedName = event.target.textContent;
                let index = catNames.indexOf(catNameElement);
                console.log(index);

                const catContainer = catContainers[index];
                if (catContainer.children.length < 3) {

                    const buttonElement = document.createElement("button");
                    buttonElement.classList.add("like-button");
                    buttonElement.textContent = "Vote";

                    catContainer.appendChild(buttonElement);
                }

                const catImageContainer = catImageContainers[index];
                if (catImageContainer.children.length < 3) {

                    const imageElement = document.createElement("img");
                    imageElement.src = catImages[index];

                    catImageContainer.appendChild(imageElement);
                }
            });

        });
    }
})