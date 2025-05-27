package com.example.Backend.controllers;

import com.example.Backend.enums.DietType;
import com.example.Backend.enums.MealType;
import com.example.Backend.enums.RecipeCategory;
// models
import com.example.Backend.models.Recipe;
// repos
import com.example.Backend.repositories.RecipeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/recipes")
@CrossOrigin(origins = "http://localhost:3000")
public class RecipeController {

    @Autowired
    private RecipeRepository recipeRepository;

    @GetMapping
    public List<Recipe> getAllRecipes() {
        return recipeRepository.findAll();
    }

    @GetMapping("/filtered")
    public List<Recipe> getFilteredRecipes(
            @RequestParam(required = false) String category,
            @RequestParam(required = false) String mealType,
            @RequestParam(required = false) String dietType) {

        RecipeCategory cat = null;
        MealType meal = null;
        DietType diet = null;

        try {
            if (category != null) {
                cat = RecipeCategory.valueOf(category.toUpperCase());
            }
            if (mealType != null) {
                meal = MealType.valueOf(mealType.toUpperCase());
            }
            if (dietType != null) {
                diet = DietType.valueOf(dietType.toUpperCase());
            }
        } catch (IllegalArgumentException e) {
            throw new IllegalArgumentException("Invalid filter value. Use valid enum names.");
        }

        if (cat != null && meal != null && diet != null) {
            return recipeRepository.findByCategoryAndMealTypeAndDietType(cat, meal, diet);
        } else if (cat != null && meal != null) {
            return recipeRepository.findByCategoryAndMealType(cat, meal);
        } else if (cat != null && diet != null) {
            return recipeRepository.findByCategoryAndDietType(cat, diet);
        } else if (meal != null && diet != null) {
            return recipeRepository.findByMealTypeAndDietType(meal, diet);
        } else if (cat != null) {
            return recipeRepository.findByCategory(cat);
        } else if (meal != null) {
            return recipeRepository.findByMealType(meal);
        } else if (diet != null) {
            return recipeRepository.findByDietType(diet);
        } else {
            return recipeRepository.findAll();
        }
    }

    @GetMapping("/{id}")
    public ResponseEntity<Recipe> getRecipe(@PathVariable Long id) {
        Recipe recipe = recipeRepository.findById(id).orElseThrow();
        return ResponseEntity.ok(recipe);
    }

    @PostMapping
    public ResponseEntity<Recipe> createRecipe(@RequestBody Recipe recipe) {
        recipeRepository.findByTitle(recipe.getTitle()).ifPresent(existing -> {
            throw new IllegalArgumentException("A recipe with the title '" + recipe.getTitle() + "' already exists.");
        });

        Recipe saved = recipeRepository.save(recipe);
        return ResponseEntity.ok(saved);
    }

    @PostMapping("/bulk")
    public ResponseEntity<List<Recipe>> createRecipes(@RequestBody List<Recipe> recipes) {
        List<String> duplicates = recipes.stream()
                .map(Recipe::getTitle)
                .filter(title -> recipeRepository.findByTitle(title).isPresent())
                .toList();

        if (!duplicates.isEmpty()) {
            throw new IllegalArgumentException("Duplicate recipe titles: " + String.join(", ", duplicates));
        }

        List<Recipe> saved = recipeRepository.saveAll(recipes);
        return ResponseEntity.ok(saved);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Recipe> updateRecipe(@PathVariable Long id, @RequestBody Recipe updatedData) {
        Recipe existingRecipe = recipeRepository.findById(id)
                .orElseThrow(() -> new IllegalArgumentException("Recipe with ID " + id + " not found."));

        // Check if another recipe already has the new title
        recipeRepository.findByTitle(updatedData.getTitle()).ifPresent(conflicting -> {
            if (!conflicting.getId().equals(id)) {
                throw new IllegalArgumentException(
                        "Another recipe with the title '" + updatedData.getTitle() + "' already exists.");
            }
        });

        // Apply updates to the existing recipe
        existingRecipe.setTitle(updatedData.getTitle());
        existingRecipe.setPrepTime(updatedData.getPrepTime());
        existingRecipe.setCookTime(updatedData.getCookTime());
        existingRecipe.setServings(updatedData.getServings());
        existingRecipe.setImageUrl(updatedData.getImageUrl());
        existingRecipe.setVideoUrl(updatedData.getVideoUrl());
        existingRecipe.setIngredients(updatedData.getIngredients());
        existingRecipe.setInstructions(updatedData.getInstructions());
        existingRecipe.setCategory(updatedData.getCategory());
        existingRecipe.setMealType(updatedData.getMealType());
        existingRecipe.setDietType(updatedData.getDietType());

        Recipe saved = recipeRepository.save(existingRecipe);
        return ResponseEntity.ok(saved);
    }

    @DeleteMapping("/all")
    public ResponseEntity<String> deleteAllRecipes() {
        recipeRepository.deleteAll();
        return ResponseEntity.ok("All recipes have been deleted.");
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteRecipe(@PathVariable Long id) {
        Recipe recipe = recipeRepository.findById(id)
                .orElseThrow(() -> new IllegalArgumentException("Recipe with ID " + id + " not found."));
        recipeRepository.delete(recipe);
        return ResponseEntity.noContent().build();
    }
}