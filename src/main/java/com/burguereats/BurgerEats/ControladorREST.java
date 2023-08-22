package com.burguereats.BurgerEats;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class ControladorREST {
    @GetMapping("/")
    public String comienzo(){
        return "index";
    }
    @GetMapping("/index")
    public String comienzo2(){
        return "index";
    }
    
    @GetMapping("/Menu")
    public String menu(){
        return "Menu";
    }
    @GetMapping("/AddUser")
    public String adduser(){
        return "AddUser";
    }
    @GetMapping("/Contactanos")
    public String contactanos (){
        return "Contactanos";
    }
    @GetMapping("/Foro")
    public String foro(){
        return "Foro";
    }
    @GetMapping("/Nosotros")
    public String nosotros(){
        return "Nosotros";
    }
    @GetMapping("/Pago")
    public String pago(){
        return "Pago";
    }
    @GetMapping("/Plato")
    public String plato(){
        return "Plato";
    }
    @GetMapping("/ZonasDeReparto")
    public String zonasdereparto(){
        return "ZonasDeReparto";
    }
    @GetMapping("/calendario")
    public String calendario(){
        return "calendario";
    }
    @GetMapping("/config")
    public String config(){
        return "config";
    }
    @GetMapping("/inicio")
    public String inicio(){
        return "inicio";
    }
    @GetMapping("/pedidos")
    public String pedidos(){
        return "pedidos";
    }
    @GetMapping("/registro")
    public String registro(){
        return "registro";
    }
    @GetMapping("/reporte")
    public String reporte(){
        return "reporte";
    }
    /*
    @GetMapping("/")
    public String (){
        return "";
    }
    */
}