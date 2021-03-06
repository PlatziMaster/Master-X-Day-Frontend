import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

// const key = 'a9a2107d1296e0416a93bddf26491c4a'
const key = '93e0e4c144003bf990231de2aab641ee'
// const token = '779a267d8327c2224e92e70dbf12b4fc228de2bc7689136202358106b2d56fcc'
const token ='77d05764808a1a37da01293c2fde4e21f5aaa3d377fc79d6402528654984fc85'

const IDBoard = "6043a61f64db4380f9d6a37b"


export default function Dashboard(props) {
    const [members, setMembers] = useState([])
    const [boards, setBoards] = useState([])

    const getMembersInfo = async (id) => {
        let res = await axios.get(`https://api.trello.com/1/members/${id}/?key=${key}&token=${token}`)
        console.log('getMembersInfo =>', res.data);
        return res.data
    }

    const getBoards = async ()  => {
        let res = await axios.get(`https://api.trello.com/1/members/me/boards?key=${key}&token=${token}`)
        console.log('getInfo',res.data)
        return res.data
    }
    
        
    useEffect(() => {
        getBoards()
        .then(res => {
            console.log('Boards', res);
            setBoards(res)
        })

    }, [1])

    return (
        <div>
            DASBOARD
            {/* {members.length >=1 ? (
                members.map(member => <p>{member.username}</p>)
            ) : null} */}

            {boards.length >= 1 ? (
                boards.map(board => <Link to={`/dashboard/${board.id}`} key={board.id}>{board.name}</Link>)
            ) : null}


            
        </div>
    )
}
