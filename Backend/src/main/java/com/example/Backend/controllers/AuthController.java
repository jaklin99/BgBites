// package com.example.Backend.controllers;

// import com.example.Backend.dto.AuthRequest;
// import com.example.Backend.dto.AuthResponse;
// import com.example.Backend.security.JwtUtil;
// import org.springframework.beans.factory.annotation.Autowired;
// import org.springframework.http.ResponseEntity;
// import org.springframework.security.authentication.*;
// import org.springframework.web.bind.annotation.*;

// @RestController
// @RequestMapping("/auth")
// @CrossOrigin("*")
// public class AuthController {

// @Autowired
// private AuthenticationManager authenticationManager;

// @Autowired
// private JwtUtil jwtUtil;

// @PostMapping("/login")
// public ResponseEntity<AuthResponse> login(@RequestBody AuthRequest request) {
// // Authenticate the email/password
// authenticationManager.authenticate(
// new UsernamePasswordAuthenticationToken(request.getEmail(),
// request.getPassword()));

// // Generate JWT token
// String token = jwtUtil.generateToken(request.getEmail());

// // Return token to frontend
// return ResponseEntity.ok(new AuthResponse(token));
// }
// }
