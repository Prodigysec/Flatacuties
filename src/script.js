document.addEventListener("DOMContentLoaded", function () {
    const catsContainer = document.getElementById("catsContainer");

    fetch("http://localhost:3000/characters")
        .then(result => { return result.json(); })
        .then(data => {
            const catNames = [];

            for (const key in data) {
                const catName = data[key].name;


                const catContainer = document.createElement("div");
                catContainer.classList.add("cat");


                const catImageElement = document.createElement("div");
                catImageElement.classList.add("cat-image");


                const catElement = document.createElement("h3");
                catElement.classList.add("cat-name");
                catElement.textContent = `${catName}`;


                // const buttonElement = document.createElement("button");
                // buttonElement.classList.add("like-button");
                // buttonElement.textContent = "Vote";

                catsContainer.appendChild(catContainer);
                catContainer.appendChild(catImageElement);
                catContainer.appendChild(catElement);
                // catElement.appendChild(buttonElement);

                catNames.push(catElement);

            }

            const catContainer = document.querySelector(".cat");

            attachEventListeners(catNames, catContainer);

        }).catch(error => {
            console.error(error);
        });

    function attachEventListeners(catNames, catContainer) {
        catNames.forEach(catNameElement => {
            catNameElement.addEventListener("click", event => {
                const clickedName = event.target.textContent;
                let index = catNames.indexOf(catNameElement);
                console.log(index);

                if (catContainer.children[3] === undefined) {
                    alert("Progress")
                }
            });

        });
    }
})