package com.example.Backend.controllers;

import com.example.Backend.models.User;
import com.example.Backend.repositories.UserRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/users")
@CrossOrigin(origins = "*")
public class UserController {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    // Admin-only: register a user manually (optional)
    @PostMapping
    public ResponseEntity<User> register(@RequestBody User user) {
        user.setPassword(passwordEncoder.encode(user.getPassword()));
        return ResponseEntity.ok(userRepository.save(user));
    }

    // View all users (optional - admin use)
    @GetMapping
    public List<User> getAllUsers() {
        return userRepository.findAll();
    }
    
    @GetMapping("/admin-test")
    @PreAuthorize("hasRole('ADMIN')")
    public ResponseEntity<String> testAdmin() {
    return ResponseEntity.ok("Admin access granted!");
}

}
// // Admin-only user creation using email
// @PostMapping
// public ResponseEntity<?> createUser(@Valid @RequestBody UserDTO req,
// Authentication authentication) {
// User requester = userRepository.findByEmail(authentication.getName())
// .orElseThrow(() -> new RuntimeException("Requester not found"));

// if (requester.getRole() != Role.ADMIN) {
// return ResponseEntity.status(403).body("Only ADMINs can create users.");
// }

// Optional<User> existing = userRepository.findByEmail(req.getEmail());
// if (existing.isPresent()) {
// return ResponseEntity.badRequest().body("Email already exists.");
// }

// User user = new User();
// user.setEmail(req.getEmail());
// user.setPassword(req.getPassword());
// user.setRole(req.getRole() != null ? req.getRole() : Role.USER);

// User saved = userService.registerUser(user);
// saved.setPassword(null); // Don't return password in response
// return ResponseEntity.ok(saved);
// }

// // Get user by ID
// @GetMapping("/{id}")
// public ResponseEntity<User> getUserById(@PathVariable Long id) {
// return ResponseEntity.ok(userRepository.findById(id).orElseThrow());
// }

// // Update user by ID (email + role)
// @PutMapping("/{id}")
// public ResponseEntity<User> updateUser(@PathVariable Long id, @RequestBody
// User updatedUser) {
// User existingUser = userRepository.findById(id).orElseThrow();
// existingUser.setEmail(updatedUser.getEmail());
// existingUser.setRole(updatedUser.getRole());
// return ResponseEntity.ok(userRepository.save(existingUser));
// }

// // Change password by ID
// @PutMapping("/{id}/password")
// public ResponseEntity<String> changePassword(@PathVariable Long id,
// @RequestBody PasswordChangeRequest request) {
// userService.changePasswordById(id, request);
// return ResponseEntity.ok("Password updated successfully.");
// }

// // Send reset link
// @PostMapping("/request-reset")
// public ResponseEntity<String> requestReset(@RequestParam String email) {
// User user = userRepository.findByEmail(email).orElseThrow();
// String token = UUID.randomUUID().toString();

// PasswordResetToken resetToken = new PasswordResetToken();
// resetToken.setToken(token);
// resetToken.setUser(user);
// resetToken.setExpiryDate(new Date(System.currentTimeMillis() + 3600_000));
// resetToken.setUsed(false);

// tokenRepo.save(resetToken);

// System.out.println("Reset link:
// https://yourfrontend.com/reset-password?token=" + token);
// return ResponseEntity.ok("Password reset link sent to email.");
// }

// // Handle password reset
// @PutMapping("/reset-password")
// public ResponseEntity<String> resetPassword(@RequestParam String token,
// @RequestBody String newPassword) {
// PasswordResetToken resetToken = tokenRepo.findByToken(token)
// .orElseThrow(() -> new IllegalArgumentException("Invalid token"));

// if (resetToken.isUsed() || resetToken.getExpiryDate().before(new Date())) {
// return ResponseEntity.status(HttpStatus.GONE).body("Token expired or already
// used.");
// }

// User user = resetToken.getUser();
// user.setPassword(passwordEncoder.encode(newPassword));
// userRepository.save(user);

// resetToken.setUsed(true);
// tokenRepo.save(resetToken);

// return ResponseEntity.ok("Password updated successfully.");
// }