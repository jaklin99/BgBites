classDiagram

%% === Models ===
class Recipe {

- Long id
- String title
- int prepTime
- int cookTime
- int servings
- String imageUrl
- String videoUrl
- List<String> ingredients
- List<String> instructions
  }

class AdminUser {

- Long id
- String email
- String password

* manageUsers()
  }

class GuestUser {

- Long id
- String email

* viewRecipes()
* signUp(email, password)
  }

%% === Controllers ===
class RecipeController {

- getAllRecipes()
- getRecipeById(id)
- createRecipe(recipe)
- updateRecipe(id, recipe)
- deleteRecipe(id)
  }

class AdminController {

- login(email, password)
- register(adminUser)
  }

%% === Services ===
class RecipeService {

- findAll()
- findById(id)
- save(recipe)
- update(id, recipe)
- delete(id)
  }

class AdminService {

- findByEmail(email)
- save(adminUser)
  }

%% === Repositories ===
class RecipeRepository {

- findAll()
- findById(id)
- save(recipe)
- deleteById(id)
  }

class AdminRepository {

- findByEmail()
- save(adminUser)
  }

%% === Relationships ===
RecipeController --> RecipeService : delegates to
RecipeService --> RecipeRepository : uses for DB ops

AdminController --> AdminService : delegates to
AdminService --> AdminRepository : uses for DB ops

GuestUser --> RecipeController : accesses recipes
AdminUser --> RecipeController : full CRUD access
AdminUser --> AdminController : account/login access
