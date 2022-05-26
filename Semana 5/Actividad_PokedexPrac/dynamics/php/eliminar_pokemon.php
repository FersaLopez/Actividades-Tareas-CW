<?php
    require "config.php";
    $con = mysqli_connect($db_host, $db_user, $db_pass, $db_schema);

    $id = $_POST['id'];


    //PENDIENTE 


    
    if(!$con)
    {
        echo "No se pudo conectar con la base de datos";
    }
    else
    {        
        if(isset($_GET["q"]))
        {
            $query = $_GET['q'];
            $sql = "SELECT pok_id FROM pokemon WHERE pok_name = '$query'";
            $res = mysqli_query($con, $sql);
            $row = mysqli_fetch_array($res);

            //var_dump($row);
            //echo "<br/>"."<br/>".$row["pok_id"];

            $pokemon_id = $row["pok_id"];

            //echo $pokemon_id;
            
            //echo $query;
            
            $sql = "SELECT * FROM pokemon WHERE pok_id = $pokemon_id";//aqui lanza bool false cuando no hay una columna que se llame asi, pero, cuando no existe un registro, regresa un objeto
            $res = mysqli_query($con, $sql);                                
            $row = mysqli_fetch_array($res);
            if($row != NULL)
            {
                //echo "YUPI";
                $sql = "SHOW TABLES";
                $res = mysqli_query($con, $sql);
                //$datos = mysqli_fetch_array($res);
                $resultados = [];
                while($row = mysqli_fetch_array($res))// es la localidad cero porque era originalmente un arreglo de 2, pero ambos contenidos tenian el mismo string, por lo que tome el 2°
                {
                    //var_dump($row["Tables_in_pokemon"]);//es lo mismo, pero con en forma de arreglo asocietivo (su localidad)
                    //echo "<br/>";
                    array_push($resultados, $row[0]);
                }
                // echo "<br/>";
                // echo "<br/>";
                // echo "<br/>";
                
                foreach($resultados as $valor)
                {
                    echo $valor."<br/>";
                }
                //echo "<br/>";
                //var_dump($resultados);
        
                foreach($resultados as $valor)
                {
                    //echo "<br/>"."ufFFFFF"."<br/>";
                    $sql = "SELECT * FROM $valor WHERE pok_id = $pokemon_id";//aqui lanza bool false cuando no hay una columna que se llame asi, pero, cuando no existe un registro, regresa un objeto

                    $res = mysqli_query($con, $sql);                        
                    //print_r($sql);
                    if($res && ($valor != "pokemon" && $valor != "pokemon_evolution_matchup" && $valor != "pokemon_evolution"))
                    {
                        $row = mysqli_fetch_array($res);                    
                        if($row != NULL)
                        {
                            //echo "AHUEBOO";
                            //$sql2 = "SELECT * FROM $valor WHERE pok_id=222";
                            $sql2 = "DELETE FROM $valor WHERE pok_id=$pokemon_id";
                            $res2 = mysqli_query($con, $sql2);
                            //var_dump($res2);
        
                        }
                        //var_dump($row);    //muestra el resultado de la peticion, como puede que este vacio porque antes solo se confirmo si existia la columna, si es asi, devuelve nulo, pero si si hay resgistros, los devuelve en forma de string
                        //var_dump($res);
                    }
                    //echo $valor."  . ";
                    //echo json_encode($res);            
                    //var_dump($res->num_rows);
                    //var_dump($res);            //muestra el objeto
                    //echo "<br/>"."JIJIJA";
                    //echo "<br/>";
                }
                $sql = "DELETE FROM pokemon_evolution WHERE evolved_species_id = $pokemon_id";    
                $res = mysqli_query($con, $sql);     

                $sql = "DELETE FROM pokemon_evolution_matchup WHERE pok_id = $pokemon_id";    
                $res = mysqli_query($con, $sql);     

                $sql = "DELETE FROM pokemon WHERE pok_id = $pokemon_id";    
                $res = mysqli_query($con, $sql);     
                //echo $res;                                   
            }            
            if($res == false)
            {
                $respuesta = array("ok" => false, "texto" => "No se pudo ingresar");
                echo json_encode($respuesta);
            }
            else
            {
                
                $id = mysqli_insert_id($con);
                $sql = "INSERT INTO pokemon_types VALUES ($id, $tipo, 1)";
                //mysqli_query($con, $sql);

                $respuesta = array("ok" => true, "texto" => "Se pudo ingresar");
                echo json_encode($respuesta);
            }         
        }                                    
    }

?>