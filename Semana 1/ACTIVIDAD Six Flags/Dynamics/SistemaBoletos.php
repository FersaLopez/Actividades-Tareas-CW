<?php
    $nombre = (isset($_POST["Nombre"]) && $_POST["Nombre"] != "")? $_POST["Nombre"] : "No especificó";
    $apellido1 = (isset($_POST["Apellido1"]) && $_POST["Apellido1"] != "")? $_POST["Apellido1"] : "No especificó";
    $apellido2 = (isset($_POST["Apellido2"]) && $_POST["Apellido2"] != "")? $_POST["Apellido2"] : "No especificó";
    $edad = (isset($_POST["Edad"]) && $_POST["Edad"] != "")? $_POST["Edad"] : "No especificó";
    $direccion = (isset($_POST["Direccion"]) && $_POST["Direccion"] != "")? $_POST["Direccion"] : "No especificó";
    $numboletos = (isset($_POST["NumeroBoletos"]) && $_POST["NumeroBoletos"] != "")? $_POST["NumeroBoletos"] : "No especificó";
    $tipoboleto = (isset($_POST["TipoBoleto"]) && $_POST["TipoBoleto"] != "")? $_POST["TipoBoleto"] : "TipoBoleto";

    $imagen; $frase; $frasealtimg;
    $inc;
    $num_boletos_dif = 0;
    if($numboletos > 0)
    {
        if($numboletos > 15)
        {
            $num_boletos_dif=$numboletos-15;
            $numboletos = 15;
            echo "$num_boletos_dif $numboletos";
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
                                <td rowspan=\"3\"><img src=\"$imagen\" alt=\"$frasealtimg\"></td>
                            </tr>
                            <tr>
                                <td>$direccion</td>
                                <td>$numboletos</td>
                                <td>$tipoboleto</td>                        
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
        echo "<br/><br/><hr/><br/><center><h1>El número de boletos solicitados es invalido o es 0, por lo que no se pueden desplegar boletos</h1></center><br/><hr/>";
    }

    
    
    
    echo $nombre."<br/>";
    echo $apellido1."<br/>";
    echo $apellido2."<br/>";
    echo $edad."<br/>";
    echo $direccion."<br/>";
    echo $numboletos."<br/>";
    echo $tipoboleto."<br/>";


?>