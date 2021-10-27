import * as yup from 'yup';
import {yupResolver} from '@hookform/resolvers/yup'

const schema = yup.object().shape({
    password: yup
        .string("La clave debe ser un texto")
        .required("Debes ingresar una clave")
        .min(6, "La clave debe tener almenos 6 caracteres")
})

export default yupResolver(schema);