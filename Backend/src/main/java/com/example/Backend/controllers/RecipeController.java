package com.example.Backend.controllers;

// models
import com.example.Backend.models.Recipe;
import com.example.Backend.models.User;
import com.example.Backend.models.Role;
// repos
import com.example.Backend.repositories.RecipeRepository;
import com.example.Backend.repositories.UserRepository;

import org.springframework.security.core.Authentication;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/recipes")
@CrossOrigin(origins = "*")
public class RecipeController {

    @Autowired
    private RecipeRepository repo;

    @Autowired
    private UserRepository userRepository;

    @GetMapping
    public List<Recipe> getAll() {
        return repo.findAll();
    }

    @GetMapping("/{id}")
    public Recipe getById(@PathVariable Long id) {
        return repo.findById(id).orElseThrow();
    }

    @PostMapping
    public ResponseEntity<?> create(@RequestBody Recipe recipe, Authentication authentication) {
        if (!isAdmin(authentication)) {
            return ResponseEntity.status(HttpStatus.FORBIDDEN).body("Only admins can create recipes.");
        }
        return ResponseEntity.ok(repo.save(recipe));
    }

    @PutMapping("/{id}")
    public ResponseEntity<?> update(@PathVariable Long id, @RequestBody Recipe recipe, Authentication authentication) {
        if (!isAdmin(authentication)) {
            return ResponseEntity.status(HttpStatus.FORBIDDEN).body("Only admins can update recipes.");
        }
        recipe.setId(id);
        return ResponseEntity.ok(repo.save(recipe));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> delete(@PathVariable Long id, Authentication authentication) {
        if (!isAdmin(authentication)) {
            return ResponseEntity.status(HttpStatus.FORBIDDEN).body("Only admins can delete recipes.");
        }
        repo.deleteById(id);
        return ResponseEntity.ok().build();
    }

    private boolean isAdmin(Authentication authentication) {
        String username = authentication.getName();
        User user = userRepository.findByUsername(username).orElseThrow();
        return user.getRole() == Role.ADMIN;
    }
}
