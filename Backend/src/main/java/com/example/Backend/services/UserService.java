package com.example.Backend.services;

import com.example.Backend.repositories.UserRepository;
import com.example.Backend.models.User;
// import com.example.Backend.models.VerificationToken;
import com.example.Backend.models.Role;

// import java.util.Date;
// import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.core.authority.AuthorityUtils;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class UserService implements UserDetailsService {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @Override
    public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {
        User user = userRepository.findByEmail(email)
                .orElseThrow(() -> new UsernameNotFoundException("User not found"));

        return new org.springframework.security.core.userdetails.User(
                user.getEmail(),
                user.getPassword(),
                AuthorityUtils.createAuthorityList("ROLE_" + user.getRole().name()));
    }

    public User registerUser(User user) {
        user.setPassword(passwordEncoder.encode(user.getPassword()));
        if (user.getRole() == null) {
            user.setRole(Role.USER);
        }
        return userRepository.save(user);
    }

    // public void changePasswordById(Long id, PasswordChangeRequest req) {
    // User user = userRepository.findById(id)
    // .orElseThrow(() -> new UsernameNotFoundException("User ID not found"));

    // if (!passwordEncoder.matches(req.getOldPassword(), user.getPassword())) {
    // throw new IllegalArgumentException("Old password is incorrect");
    // }

    // user.setPassword(passwordEncoder.encode(req.getNewPassword()));
    // userRepository.save(user);
    // }
}
