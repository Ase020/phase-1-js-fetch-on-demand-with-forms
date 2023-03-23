const init = () => {
   const inputForm = document.querySelector("form");
   inputForm.addEventListener("submit", (e) => {
      e.preventDefault();
      //   const value = e.target.searchByID.value;
      const value = e.target.children[1].value;

      fetch(`http://localhost:3000/movies/${value}`)
         .then((res) => res.json())
         .then((movies) => {
            const title = document.querySelector("section#movieDetails h4");
            const summary = document.querySelector("section#movieDetails p");

            title.textContent = movies.title;
            summary.textContent = movies.summary;
            console.log(title);
         });
      inputForm.reset();
   });
};

document.addEventListener("DOMContentLoaded", init);
