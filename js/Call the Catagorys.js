// Container that will hold the catagory buttons
const dynamicButtons = document.getElementById("dynamicButtons");

async function callCatagorys() {
  // Fetching api
  const res = await fetch(
    "https://openapi.programming-hero.com/api/categories",
  );
  const data = await res.json();

  // Clearing the section before adding dynamic buttons
  dynamicButtons.innerHTML = "";

  //Looping the array of object to get the catagory name and then adding the buttons
  data.categories.forEach((item) => {
    // Createing the buttons
    const div = document.createElement("div");
    div.innerHTML = `
    <button class="btn w-full">
        ${item.category_name}
    </button>
    `;

    // Adding the buttons
    dynamicButtons.appendChild(div);
  });
}

// calling the api
callCatagorys();
