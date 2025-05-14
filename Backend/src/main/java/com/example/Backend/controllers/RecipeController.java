package com.example.Backend.controllers;

import com.example.Backend.models.Recipe;
import com.example.Backend.repositories.RecipeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/recipes")
public class RecipeController {

    @Autowired
    private RecipeRepository repo;

    @GetMapping
    public List<Recipe> getAll() {
        return repo.findAll();
    }

    @GetMapping("/{id}")
    public Recipe getById(@PathVariable Long id) {
        return repo.findById(id).orElseThrow();
    }

    @PostMapping
    public Recipe create(@RequestBody Recipe recipe) {
        return repo.save(recipe);
    }

    @PutMapping("/{id}")
    public Recipe update(@PathVariable Long id, @RequestBody Recipe recipe) {
        Recipe existingRecipe = repo.findById(id).orElseThrow();
        recipe.setId(existingRecipe.getId());
        return repo.save(recipe);
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable Long id) {
        repo.deleteById(id);
    }
}
