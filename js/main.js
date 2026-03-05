const categoryContainer = document.getElementById("category-container");

const loadCategories = async () => {
  // 1. Show skeleton/spinner immediately
  categoryContainer.innerHTML = `<p>Loading...</p>`;

  const res = await fetch(
    "https://openapi.programming-hero.com/api/categories",
  );
  const data = await res.json();
  const dataCategory = data.categories; // No `await` needed — it's not a Promise

  // 2. Clear loading state, then render buttons
  categoryContainer.innerHTML = "";

  dataCategory.forEach(loadButtons);
};

const loadButtons = (item) => {
  const categoryElement = document.createElement("div");
  categoryElement.innerHTML = `
      <button class="btn btn-success text-white w-full">
        ${item.category_name}
      </button>`;
  categoryContainer.appendChild(categoryElement); // ← Don't forget to append!
};

loadCategories();
loadButtons();
