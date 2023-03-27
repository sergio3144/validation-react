import React from 'react'
import '../styles/formulario.css'
import { useForm } from 'react-hook-form'

function Formulario () {

  const { register,formState: {errors}, handleSubmit } = useForm();

  const onSubmit = (data, e) => {
    alert(
      `Nombre: ${data.nombre} ${data.apellido} - Gmail: ${data.gmail}`
    )
    e.target.reset()
  }
  return (
    <>
      <div className="sm:flex flex-wrap flex justify-center mx-4 mt-10">
        <div className='max-[1000px]:m-0 max-[1000px]:text-center max-[1000px]:mb-10 mb-10 lg: mt-40'>
          <h1 className='max-[550px]:text-2xl  min[550px]: text-white text-5xl max-w-screen-sm font-bold tracking-wide'>Aprende a codificar observando a otros</h1>
          <p className='max-[550px]:text-base text-white max-w-xl text-xl mt-10 opacity-70'>See how experienced developers solve problems in real-time. Watching scripted tutorials is great, but understanding how developers think is invaluable.</p>
        </div>

        <div className="max-w-2xl">
          <div className='bg-[#6055a5] text-white p-4 rounded-md'>
            <h1 className='text-base text-center'><span className='font-bold'>Pruébalo gratis 7 días </span>y luego $20/mes. Despúes de eso</h1>
          </div>

          <div className='bg-white mt-10 rounded-md p-10'>
              <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col'>
                <input className='bordes-inputs mb-0' 
                  type="text" 
                  placeholder='Nombre' 
                  {...register('nombre', {
                    required: 'Nombre obligatorio',
                    pattern: {
                      value: true,
                      message: 'Nombre no válido'
                    },
                  })}
                />
                <span className='error'>
                  {errors.nombre && (errors.nombre).message}
                </span>


                <input className='bordes-inputs' 
                  type="text" 
                  placeholder='Apellido' 
                  {...register('apellido', {
                    required: 'Apellido obligatorio',
                    pattern: {
                      value: true,
                      message: 'Apellido no válido'
                    }
                  })}
                />

                <span className='error'>
                  {errors.apellido && (errors.apellido).message}
                </span>

                <input className='bordes-inputs' 
                  type="gmail" 
                  placeholder='Direccion de correo electronico' 
                  {...register('gmail', {
                    required: 'Dirección de correo obligatorio',
                    pattern: {
                      value: /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i,
                      message: 'Correo electrónico no válido'
                    }
                  })}
                />

                <span className='error'>
                  {errors.gmail && (errors.gmail).message}
                </span>

                <input className='bordes-inputs mb-1' 
                  type="password" 
                  placeholder='Contraseña' 
                  {...register('passworld', {
                    required: 'Contraseña obligatoria',
                    pattern: {
                      value: true,
                      message: 'Contraseña obligatoria'
                    }
                  })}
                />

                <span className='error'>
                  {errors.passworld && (errors.passworld).message}
                </span>

                <button className=' max-[410px]:text-sm btn-primary'>RECLAMA TU PRUEBA GRATIS</button>
              </form>
          </div>
        </div>
      </div>
    </>
  )
}

export { Formulario } 
