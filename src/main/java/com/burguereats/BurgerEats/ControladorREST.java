package com.burguereats.BurgerEats;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class ControladorREST {
    @GetMapping("/")
    public String comienzo(){
        return "index";
    }
}