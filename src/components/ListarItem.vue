<template>
    <div class="container">
      
      <div class="card">
        <div class="card-header">
          <h2>
            Lista de empleados
          </h2>
          <router-link to="/crear" class="btn btn-info">Agregar nuevo empleado</router-link>

        </div>
        <div class="card-body">
          <table class="table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Nombre</th>
                <th>Correo</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="empleado in empleados" :key="empleado.id">
                <td scope="row">{{ empleado.id }}</td>
                <td>{{ empleado.nombre }}</td>
                <td>{{ empleado.correo }}</td>
                <td>  
                  <router-link :to="{name:'editar',params:{id:empleado.id}}" class="btn btn-primary">Editar</router-link>
                  <a name="" id="" @click="borrarEmpleado(empleado.id)" class="btn btn-danger" href="#" role="button">Borrar</a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

    </div>
</template>
  


<script>
export default{
  data(){
    return{
      empleados:[]
    }
  },
  created:function(){


    this.consultarEmpleados()
    
  },
  methods:{
    consultarEmpleados(){
      fetch('http://localhost/apis/api_php/')
      .then(respuesta=>respuesta.json())
      .then(datoResp=>{
        console.log(datoResp);
        this.empleados=[]
        if(typeof datoResp[0].success==='undefined'){
          this.empleados=datoResp
        }

      })
      .catch(console.log)
    },
    borrarEmpleado(id){
      console.log(id);
      fetch('http://localhost/apis/api_php/?borrar='+id)
      .then(respuesta=>respuesta.json())
      .then(datoResp=>{
        console.log(datoResp);
        window.location.href="listar"

      })
      .catch(console.log)
    }
  }
}
</script>
