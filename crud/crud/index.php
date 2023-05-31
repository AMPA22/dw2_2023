<?php
include("template/header.php");
?>
    
  <div class="container" >
        <div class="row">
            <div class="col col-4 "> 
            <?php 
            include("comun/menu.php");
            ?>        
        </div>
            <div class="col col-8 bg-light"> 
                <?php
                if ($_GET['mod']=="ciudades")  {
                    include("ciudades/index.php");
                }
                if ($_GET['mod']=="edtciudad")  {
                    include("ciudades/nuevo.php");
                }
                ?>
            </div>
        </div>
    </div>
    
    
    

            <div class="p-5 mb-4 bg-light rounded-3">
                <div class="container-fluid py-5">
                  <h1 class="display-5 fw-bold">Crud</h1>
                  <p class="col-md-8 fs-4">---</p>
                  <button class="btn btn-primary btn-lg" type="button">Boton</button>
                </div>
              </div>
    
              <?php include("template/footer.php"); ?>