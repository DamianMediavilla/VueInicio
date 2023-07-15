<template>
    <div class="editar">
      <div class="container">
        <div class="card">
          <div class="card-header">
            Agregar nuevo empleado
          </div>
          <div class="card-body">
            <form v-on:submit.prevent="actualizarRegistro">
              <div class="form-group">
                <label for="nombre">Nombre</label>
                <input type="text"
                  class="form-control" required name="nombre" v-model="empleado.nombre" id="nombre" aria-describedby="helpId" placeholder="Tu nombre" >
              </div>
              <div class="form-group">
                <label for="correo">Correo </label>
                <input type="email"
                  class="form-control"  required name="correo" id="correo" v-model="empleado.correo" aria-describedby="correohelpid" placeholder="nombre@ejemplo.com">
              </div>
              <div class="btn-group" role="group" aria-label="">
                <button type="submit" class="btn btn-success">Actualizar</button>
                <router-link to="/listar" class="btn btn-warning">Cancelar</router-link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </template>

  <script>
  export default {
    data(){
      return{
        empleado:{
         
        }
      }
  
    },
    created:function(){ 
      this.cargarEmpleado()      

    },
    methods: {
      cargarEmpleado(){
        
        fetch('http://localhost/apis/api_php/?consultar='+this.$route.params.id)
        .then(respuesta=>respuesta.json())
        .then(datoResp=>{
        console.log(datoResp);
        if(typeof datoResp[0].success==='undefined'){
          this.empleado=datoResp[0]
        }
        })
        .catch(console.log)

      },
      actualizarRegistro(){
        var datosEnviar={nombre: this.empleado.nombre,correo:this.empleado.correo}
        console.log(datosEnviar);
        fetch('http://localhost/apis/api_php/?actualizar='+this.empleado.id,{
          method:"POST",
          body:JSON.stringify(datosEnviar)
        })
        .then(respuesta=>respuesta.json())
        .then(datosResp=>{
          console.log(datosResp);
          window.location.href='/listar'
  
        })
        .catch(console.log)
      }
    }
  }
  </script>
  
