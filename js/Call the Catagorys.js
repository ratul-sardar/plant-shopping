// Container that will hold the catagory buttons
const dynamicButtons = document.getElementById("dynamicButtons");

// Container that will hold the Tree Cards
const dynamicTrees = document.getElementById("dynamicTrees");

//function for calling the catagory buttons dynamically
async function callCatagorys() {
  //showing loading spinner
  showLoading("catagorysLoadingSpinner");

  // Fetching api
  const res = await fetch(
    "https://openapi.programming-hero.com/api/categories",
  );
  const data = await res.json();

  //hiding the loading spinner
  hideLoading("catagorysLoadingSpinner");

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

// to show loading spinner
function showLoading(id) {
  // had to
  let div = document.getElementById(id);

  div.classList.remove("hidden");
  div.classList.add("grid");
}

// to show hide spinner
function hideLoading(id) {
  // had to
  let div = document.getElementById(id);

  div.classList.remove("grid");
  div.classList.add("hidden");
}

// Dynamic url for Trees.
let url = "https://openapi.programming-hero.com/api/plants";

// function for calling all the tree data
async function callTrees() {
  // show loading spinner
  showLoading("treeLoadingSpinner");

  const res = await fetch(url);
  const data = await res.json();

  // hide loading spinner
  hideLoading("treeLoadingSpinner");
  console.log(data.image);

  // Adding all the cards dynamically based on tree data
  data.plants.forEach((item) => {
    //creating the card
    const div = document.createElement("div");
    div.classList =
      "card bg-base-100 shadow-xl border border-success/20 overflow-hidden hover:shadow-success/30 transition-shadow";

    // adding contents in the cards
    div.innerHTML = `
      <figure class="h-48 overflow-hidden">
                  <img
                    src="${item.image}"
                    alt="${item.image}"
                    class="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  />
                </figure>
                <div class="card-body p-5">
                  <h2 class="card-title text-success">${item.name}</h2>
                  <p class="line-clamp-2 text-sm text-base-content/70">
                    ${item.description}
                  </p>

                  <div class="flex justify-between items-end mt-4">
                    <span class="text-success font-semibold">${item.category}</span>
                    <span
                      class="text-lg font-bold text-success-content bg-success/20 px-2 py-1 rounded"
                      >$${item.price}</span
                    >
                  </div>

                  <div class="card-actions justify-end mt-4">
                    <button
                      class="btn btn-success text-white w-full hover:scale-[1.02] transition-transform"
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
    `;

    //adding the cards in the html
    dynamicTrees.appendChild(div);
  });
}

// calling the catagory api
callCatagorys();
//calling the tree api
callTrees();
