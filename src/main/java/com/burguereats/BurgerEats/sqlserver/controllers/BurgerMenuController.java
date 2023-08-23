package com.burguereats.BurgerEats.sqlserver.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.web.bind.annotation.*;

import com.burguereats.BurgerEats.sqlserver.models.BurgerMenuItem;

import java.util.List;

@RestController
@RequestMapping("/api/burgermenu")
public class BurgerMenuController {

    @Autowired
    private JdbcTemplate jdbcTemplate;

    @GetMapping
    public ResponseEntity<List<BurgerMenuItem>> getMenuItems() {
        String sql = "SELECT * FROM burgermenu";
        List<BurgerMenuItem> menuItems = jdbcTemplate.query(sql, BeanPropertyRowMapper.newInstance(BurgerMenuItem.class));
        return ResponseEntity.ok(menuItems);
    }

    @PostMapping
    public ResponseEntity<String> addMenuItem(@RequestBody BurgerMenuItem menuItem) {
        String sql = "INSERT INTO burgermenu (item, cantidad, precio) VALUES (?, ?, ?)";
        int rowsAffected = jdbcTemplate.update(sql, menuItem.getItem(), menuItem.getCantidad(), menuItem.getPrecio());

        if (rowsAffected > 0) {
            return ResponseEntity.ok("Item added successfully");
        } else {
            return ResponseEntity.badRequest().body("Failed to add item");
        }
    }

    @PutMapping("/{id}")
    public ResponseEntity<String> updateMenuItem(@PathVariable int id, @RequestBody BurgerMenuItem menuItem) {
        String sql = "UPDATE burgermenu SET item = ?, cantidad = ?, precio = ? WHERE id = ?";
        int rowsAffected = jdbcTemplate.update(sql, menuItem.getItem(), menuItem.getCantidad(), menuItem.getPrecio(), id);

        if (rowsAffected > 0) {
            return ResponseEntity.ok("Item updated successfully");
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<String> deleteMenuItem(@PathVariable int id) {
        String sql = "DELETE FROM burgermenu WHERE id = ?";
        int rowsAffected = jdbcTemplate.update(sql, id);

        if (rowsAffected > 0) {
            return ResponseEntity.ok("Item deleted successfully");
        } else {
            return ResponseEntity.notFound().build();
        }
    }
}
