<?php
    $nombre = (isset($_POST["Nombre"]) && $_POST["Nombre"] != "")? $_POST["Nombre"] : "No especificó";
    $apellido1 = (isset($_POST["Apellido1"]) && $_POST["Apellido1"] != "")? $_POST["Apellido1"] : "No especificó";
    $apellido2 = (isset($_POST["Apellido2"]) && $_POST["Apellido2"] != "")? $_POST["Apellido2"] : "No especificó";
    $edad = (isset($_POST["Edad"]) && $_POST["Edad"] != "")? $_POST["Edad"] : "No especificó";
    $direccion = (isset($_POST["Direccion"]) && $_POST["Direccion"] != "")? $_POST["Direccion"] : "No especificó";
    $numboletos = (isset($_POST["NumeroBoletos"]) && $_POST["NumeroBoletos"] != "")? $_POST["NumeroBoletos"] : "No especificó";
    $tipoboleto = (isset($_POST["TipoBoleto"]) && $_POST["TipoBoleto"] != "")? $_POST["TipoBoleto"] : "TipoBoleto";

    echo $nombre."<br/>";
    echo $apellido1."<br/>";
    echo $apellido2."<br/>";
    echo $edad."<br/>";
    echo $direccion."<br/>";
    echo $numboletos."<br/>";
    echo $tipoboleto."<br/>";


?>