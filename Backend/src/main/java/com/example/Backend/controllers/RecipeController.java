package com.example.Backend.controllers;

// models
import com.example.Backend.models.Recipe;
// repos
import com.example.Backend.repositories.RecipeRepository;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

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

    @GetMapping("/{id}")
    public ResponseEntity<Recipe> getRecipe(@PathVariable Long id) {
        Recipe recipe = recipeRepository.findById(id).orElseThrow();
        return ResponseEntity.ok(recipe);
    }

    @PostMapping
    public Recipe createRecipe(@RequestBody Recipe recipe) {
        Optional<Recipe> existing = recipeRepository.findByTitle(recipe.getTitle());
        if (existing.isPresent()) {
            throw new IllegalArgumentException("A recipe with that title already exists.");
        }
        return recipeRepository.save(recipe);
    }

    @PutMapping("/{id}")
    public Recipe updateRecipe(@PathVariable Long id, @RequestBody Recipe recipe) {
        recipe.setId(id);
        return recipeRepository.save(recipe);
    }

    @DeleteMapping("/{id}")
    public void deleteRecipe(@PathVariable Long id) {
        recipeRepository.deleteById(id);
    }
}
