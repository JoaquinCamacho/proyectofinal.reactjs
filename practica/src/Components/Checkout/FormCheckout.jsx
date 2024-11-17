import React from 'react'


const FormCheckout = ({dataForm, handleOnChangeInput, handleSubmitForm}) => {
  return (
       <form className='form' onSubmit={handleSubmitForm}>
        
            <label >Nombre Completo</label>
            <input type="text" name='nombrecompleto' value={dataForm.nombrecompleto} onChange={handleOnChangeInput}/>

            <label >Telefono</label>
            <input  type="number" name='telefono' value={dataForm.telefono} onChange={handleOnChangeInput}/>

            <label >Email</label>
            <input  type="email" name='email' value={dataForm.email} onChange={handleOnChangeInput} />

            <button className='submit' type='submit'>Enviar mi orden</button>
    </form>
  )
}

export default FormCheckout