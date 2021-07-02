const fs = require('fs');

const colors = require('colors');

const crearArchivo = async (n = 5, listar = false, hasta = 10) => {

   try {


      let salida = '';
      let consola = '';

      for (let i = 1; i <= hasta; i++) {
         consola += `${n} ${'x'.green} ${i} ${'='.green} ${n * i}\n`;
         salida += `${n} x ${i} = ${n * i}\n`;
      }

      if (listar) {

         console.log('================='.green);
         console.log('Tabla del:'.green, colors.blue(n));
         console.log('================='.green);

         console.log(consola);
      }

      fs.writeFileSync(`./salida/tabla-${n}.txt`, salida);

      return `tabla-${n}.txt`;

   } catch (error) {
      throw error;
   }


};

module.exports = {
   crearArchivo
}