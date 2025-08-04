import React from 'react'
import { connectDB } from './lib/config/mongoDB'

const Home = () => {

  connectDB() ; 

  return (
    <div>Hello Kawou</div>
  )
}

export default Home