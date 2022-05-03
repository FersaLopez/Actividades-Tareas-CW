<?php
    $nombre = (isset($_POST["Nombre"]) && $_POST["Nombre"] != "")? $_POST["Nombre"] : "No especificó";
    $apellido1 = (isset($_POST["Apellido1"]) && $_POST["Apellido1"] != "")? $_POST["Apellido1"] : "No especificó";
    $apellido2 = (isset($_POST["Apellido2"]) && $_POST["Apellido2"] != "")? $_POST["Apellido2"] : "No especificó";
    $edad = (isset($_POST["Edad"]) && $_POST["Edad"] != "")? $_POST["Edad"] : "No especificó";
    $direccion = (isset($_POST["Direccion"]) && $_POST["Direccion"] != "")? $_POST["Direccion"] : "No especificó";
    $numboletos = (isset($_POST["NumeroBoletos"]) && $_POST["NumeroBoletos"] != "")? $_POST["NumeroBoletos"] : "No especificó";
    $tipoboleto = (isset($_POST["TipoBoleto"]) && $_POST["TipoBoleto"] != "")? $_POST["TipoBoleto"] : "TipoBoleto";

    
    $imagen; 
    $frase; 
    $frasealtimg;
    $tipo_boleto_string;

    switch($tipoboleto)
    {
        case 1:
            $imagen="../Statics/messirve.jpg";
            $frasealtimg="El boleto Messirve para poder subirme a los juegos";
            $frase="Soy pobre pero me divierto :D";
            $tipo_boleto_string="Boleto Normal";
            break;
        case 2:
            $imagen="../Statics/franchesco.jpg";
            $frasealtimg="Imagen muy veloz";
            $frase="Flash tiene copyright, pero franchesco es mas veloz. <br/>FIAAAAAUUU";
            $tipo_boleto_string="Flash Pass";
            break;
        case 3:
            $imagen="../Statics/QUE.jpg";
            $frasealtimg="Imagen de un sujeto muy rico";
            $frase="Todos se te quedan viendo como skipper por lo millonario que eres";
            $tipo_boleto_string="Boleto de Rico";
            break;
        case 4:
            $imagen="../Statics/monki flip.gif";
            $frasealtimg="¿Imagen No incluida en un paquete todo incluido?<br/>Que raro";
            $frase="Te incluye hasta un monki flip, gózalo";
            $tipo_boleto_string="Pase locochon todo incluido";
            break;
        case 5:
            $imagen="../Statics/Gato pc.gif";
            $frasealtimg="Un gatito consiguiendo un boleto";
            $frase="Te viste asi como el gatito para conseguir este boleto tan exclusivo";
            $tipo_boleto_string="Pase Premium imposible de conseguir";
            break;
    }
    $inc;
    $num_boletos_dif = 0;
    
    if($numboletos > 0)
    {
        if($numboletos > 15)
        {
            $num_boletos_dif=$numboletos-15;
            $numboletos = 15;
            echo "<hr/><br/><h1><center>IMPORTANTE</center></h1>";
            echo "No se pudo completar la compra de: <strong>".$num_boletos_dif."</strong> boleto(s) porque sobrepasa el límite de boletos por sesión de compra. <br/><strong>Por favor, cuando concluya esta compra, ingrese de nuevo al sistema para comprar los <u>$num_boletos_dif</u> boletos restantes.</strong>";
        }            
        for ($inc = 0; $inc<$numboletos; $inc++)
        {
            echo "<body>
                    <hr/><h2>Sistema de Boletos de Six Flags</h2><hr/>
                    <table border=\"1\" align=\"center\" cellpadding=25px> 
                        <thead>
                            <tr>
                                <th colspan=\"4\"><h1>SIX FLAGS</h1></th>                    
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>$nombre</td>
                                <td>$apellido1<br/>$apellido2</td>
                                <td>$edad</td>
                                <td rowspan=\"3\"><img src=\"$imagen\" alt=\"$frasealtimg\" width='500'></td>
                            </tr>
                            <tr>
                                <td>$direccion</td>
                                <td>$numboletos</td>
                                <td>$tipo_boleto_string</td>                        
                            </tr>
                            <tr>
                                <td colspan=\"3\">$frase</td>                        
                            </tr>
                        </tbody>
                    </table>
                </body>";
        }
    }
    else{
        echo "<br/><br/><hr/><br/><center><h1>El número de boletos solicitados es inválido o es 0, por lo que no se pueden desplegar boletos</h1></center><br/><hr/>";
    }   
    echo "<hr/><hr/><h5>Todos los derechos reservados</h5><hr/>";
?>