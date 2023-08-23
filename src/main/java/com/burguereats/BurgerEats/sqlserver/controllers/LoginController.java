package com.burguereats.BurgerEats.sqlserver.controllers;

import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseBody;

import com.burguereats.BurgerEats.sqlserver.models.Usuario;

@Controller
public class LoginController {

    @Autowired
    private JdbcTemplate jdbcTemplate;

    @PostMapping("/login")
    @ResponseBody
    public String login(@RequestBody Map<String, String> requestData) {
        String username = requestData.get("username");
        String password = requestData.get("password");

        try {
            String sql = "SELECT * FROM usuarios WHERE correo = ? AND contrasena = ?";
            Usuario usuarioFromDB = jdbcTemplate.queryForObject(sql,
                    BeanPropertyRowMapper.newInstance(Usuario.class), username, password);

            if (usuarioFromDB != null) {
                // Inicio de sesión exitoso
                return "{\"loginSuccess\": true}";
            } else {
                // Inicio de sesión fallido
                return "{\"loginSuccess\": false}";
            }
        } catch (Exception e) {
            // Error al realizar el inicio de sesión
            return "{\"loginSuccess\": false, \"error\": \"" + e.getMessage() + "\"}";
        }
    }

    @GetMapping("/login")
    public String showLoginForm() {
        return "inicio"; // Nombre de la vista para el formulario de inicio de sesión
    }
}
