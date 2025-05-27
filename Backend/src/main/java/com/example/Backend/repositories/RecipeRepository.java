package com.example.Backend.repositories;

import com.example.Backend.enums.DietType;
import com.example.Backend.enums.MealType;
import com.example.Backend.enums.RecipeCategory;
import com.example.Backend.models.Recipe;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

public interface RecipeRepository extends JpaRepository<Recipe, Long> {
    // RecipeRepository.java
    Optional<Recipe> findByTitle(String title);

    List<Recipe> findByCategory(RecipeCategory category);

    List<Recipe> findByMealType(MealType mealType);

    List<Recipe> findByDietType(DietType dietType);

    List<Recipe> findByCategoryAndMealTypeAndDietType(RecipeCategory category, MealType mealType, DietType dietType);

    List<Recipe> findByCategoryAndMealType(RecipeCategory category, MealType mealType);

    List<Recipe> findByCategoryAndDietType(RecipeCategory category, DietType dietType);

    List<Recipe> findByMealTypeAndDietType(MealType mealType, DietType dietType);
}
