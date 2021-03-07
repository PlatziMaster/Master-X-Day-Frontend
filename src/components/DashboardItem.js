import React, { useEffect, useState }  from 'react'
import './scss/mobile-card-container.scss'
import './scss/dashboard-item.scss'
import axios from 'axios'
import { Link } from 'react-router-dom'

const key = '93e0e4c144003bf990231de2aab641ee'
// const token = '779a267d8327c2224e92e70dbf12b4fc228de2bc7689136202358106b2d56fcc'
const token ='77d05764808a1a37da01293c2fde4e21f5aaa3d377fc79d6402528654984fc85'

export default function DashboardItem(props) {

    const { name, id, memberships } = props.item
    const url = `dashboard/${id}`
    const [members, setMembers] = useState([])

    const getMembersInfo = async (id) => {
        let res = await axios.get(`https://api.trello.com/1/members/${id}/?key=${key}&token=${token}`)
        
        return res.data
    }

    const getMembersOfBoard = async (id) => {
        let res = await axios.get(`https://api.trello.com/1/boards/${id}/memberships/?key=${key}&token=${token}`)
        
        return res.data
    }

    useEffect(() => {
        getMembersOfBoard(id)
        .then(res => {
            console.log('Members 2', res);
            res.forEach(member => {
                getMembersInfo(member.idMember)
                .then(res => {
                console.log(`getMembersInfo222 ${member.id}`, res)
                setMembers(members => [...members, res])
                })
            });
        })

    }, [1])

    return (
        <div className="col-md-4">
            <div className='card mb-3 border-0'>
                <div className="card-header">
                    <div className="d-flex justify-content-between border-bottom-light align-items-center border-0">
                        <h3><Link to={url}>{name}</Link></h3>
                        <span>Members: {memberships.length}</span>    
                    </div>
                    
                </div>
                <div className="card-body">
                    {
                        members.map(m => <p>{m.fullName}</p>)
                    }
                </div>
                <div className="card-footer">
                    
                </div>
            </div>
        </div>
    )
}