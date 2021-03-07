import React from 'react'
import './scss/interface.scss'
import axios from 'axios';


export default function Interface(props) {

  const key = '93e0e4c144003bf990231de2aab641ee'
// const token = '779a267d8327c2224e92e70dbf12b4fc228de2bc7689136202358106b2d56fcc'
  const token ='77d05764808a1a37da01293c2fde4e21f5aaa3d377fc79d6402528654984fc85'

  const getBoards = async ()  => {
    let res = await axios.get(`https://api.trello.com/1/members/me/boards?key=${key}&token=${token}`)
    console.log('getInfo',res.data)
    return res.data
  }
  
  getBoards()
    return (
      <div className="board">
        <div className="container">
            <h3 className="text-white mb-3">Interface</h3>
            
            
        </div>
     </div>
    )
}
