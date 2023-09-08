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
        return "admin/AddUser";
    }
    @GetMapping("/Contactanos")
    public String contactanos (){
        return "Contactanos";
    }
    @GetMapping("/Foro")
    public String foro(){
        return "admin/Foro";
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
        return "admin/Plato";
    }
    @GetMapping("/ZonasDeReparto")
    public String zonasdereparto(){
        return "ZonasDeReparto";
    }
    @GetMapping("/calendario")
    public String calendario(){
        return "admin/calendario";
    }
    @GetMapping("/config")
    public String config(){
        return "admin/config";
    }
    @GetMapping("/inicio")
    public String inicio(){
        return "inicio";
    }
    @GetMapping("/pedidos")
    public String pedidos(){
        return "admin/pedidos";
    }
    @GetMapping("/registro")
    public String registro(){
        return "registro";
    }
    
    @GetMapping("/reporte")
    public String reporte(){
        return "admin/reporte";
    }
    
    @GetMapping("/Gestion-ingredientes")
    public String gestionIngredientes(){
        return "admin/Gestion-ingredientes";
    }

    /*
    @GetMapping("/")
    public String (){
        return "";
    }
    */
}