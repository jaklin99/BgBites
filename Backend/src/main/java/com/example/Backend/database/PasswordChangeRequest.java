package com.example.Backend.database;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Email;

public class PasswordChangeRequest {

    // Optional: only used for reset (not login)
    @Email
    private String email;

    @NotBlank
    private String oldPassword;

    @NotBlank
    private String newPassword;

    // --- Getters & Setters ---
    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getOldPassword() {
        return oldPassword;
    }

    public void setOldPassword(String oldPassword) {
        this.oldPassword = oldPassword;
    }

    public String getNewPassword() {
        return newPassword;
    }

    public void setNewPassword(String newPassword) {
        this.newPassword = newPassword;
    }
}
