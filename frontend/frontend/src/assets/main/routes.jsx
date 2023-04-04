import React from 'react'
import { Route, Routes } from 'react-router'

import Todo from '../../todo/todo'
import About from '../../about/About'

function Routes2(props) {
    return (
    <Routes>
        <Route path='/todo' element={<Todo />} />
        <Route path='/about' element={<About />} />
        <Route path="*" element={<Todo />} />
    </Routes>
    )
}


export default Routes2