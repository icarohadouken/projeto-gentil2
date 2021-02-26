import React, {useEffect, useState} from 'react'
import CardCursos from '../../Components/CardCursos'
import Container from '@material-ui/core/Container'
import Axios from 'axios'

const Cursos = () => {

    const [courses, setCourses] = useState([])

    const getCourses = () => {
        Axios
            .get('https://portaldoaluno.registrandocomgentil.com.br/api/courses')
            .then(response => {              
                setCourses(response.data)
                console.log(response.data)
            })
            .catch(err => {
                console.log(err)
            })
    }

    const testingFunction = () => {

    }

    useEffect(() => {
        getCourses()
    }, [])

    return(
        <Container>
            {courses.map(course => {
                return(
                <CardCursos
                    image={course.logo_url}
                    title={course.title}
                    description={course.description}
                    littleButton={testingFunction}
                />
                )
                
            })}
            
        </Container>

    )
}

export default Cursos