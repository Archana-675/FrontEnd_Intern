// Sample Recipe Data
const recipes = [
    { name: "Spaghetti Carbonara", cuisine: "italian", ingredients: ["pasta", "eggs", "cheese", "bacon"], image: "images/image1.jpg" },
    { name: "Butter Chicken", cuisine: "indian", ingredients: ["chicken", "tomato", "cream", "spices"], image: "images/image2.jpg" },
    { name: "Tacos", cuisine: "mexican", ingredients: ["tortilla", "beef", "lettuce", "cheese"], image: "images/image3.jpg" },
    { name: "Fried Rice", cuisine: "chinese", ingredients: ["rice", "eggs", "vegetables", "soy sauce"], image: "images/image4.jpg" },
    { name: "Margherita Pizza", cuisine: "italian", ingredients: ["dough", "tomato", "mozzarella", "basil"], image: "images/image5.jpg" },
   
];

// DOM Elements
const recipeList = document.getElementById("recipes");
const searchInput = document.getElementById("search");
const cuisineFilter = document.getElementById("cuisine-filter");
const ingredientFilter = document.getElementById("ingredient-filter");
const filterMenu = document.getElementById("filter-menu");

// Display All Recipes Initially
displayRecipes(recipes);

// Filter Recipes Function
function filterRecipes() {
    const searchTerm = searchInput.value.trim().toLowerCase();
    const cuisine = cuisineFilter.value;
    const ingredient = ingredientFilter.value;

    const filteredRecipes = recipes.filter(recipe => {
        const matchesSearch = recipe.name.toLowerCase().includes(searchTerm);
        const matchesCuisine = cuisine === "all" || recipe.cuisine === cuisine;
        const matchesIngredient = ingredient === "all" || recipe.ingredients.includes(ingredient);
        return matchesSearch && matchesCuisine && matchesIngredient;
    });

    displayRecipes(filteredRecipes);
}

// Display Recipes Function
function displayRecipes(recipes) {
    recipeList.innerHTML = "";
    recipes.forEach(recipe => {
        const recipeCard = document.createElement("div");
        recipeCard.classList.add("recipe-card");
        recipeCard.innerHTML = `
            <img src="${recipe.image}" alt="${recipe.name}">
            <h3>${recipe.name}</h3>
            <p><strong>Cuisine:</strong> ${recipe.cuisine}</p>
            <p><strong>Ingredients:</strong> ${recipe.ingredients.join(", ")}</p>
        `;
        recipeList.appendChild(recipeCard);
    });
}

// Toggle Filter Menu
function toggleFilterMenu() {
    filterMenu.style.display = filterMenu.style.display === "block" ? "none" : "block";
}

// Toggle Theme
function toggleTheme() {
    document.body.classList.toggle("dark-theme");
}
