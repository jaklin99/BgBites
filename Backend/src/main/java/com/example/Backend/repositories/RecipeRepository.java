package com.example.Backend.repositories;

import com.example.Backend.models.Recipe;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

public interface RecipeRepository extends JpaRepository<Recipe, Long> {
    // RecipeRepository.java
    Optional<Recipe> findByTitle(String title);

}