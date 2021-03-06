import React from 'react'
import axios from 'axios';
import './scss/board.scss'
import { useParams } from "react-router-dom";
import { useEffect, useState } from 'react';
import Card from './mobile-card-container'
import Task from './Target'

const key = '93e0e4c144003bf990231de2aab641ee'
// const token = '779a267d8327c2224e92e70dbf12b4fc228de2bc7689136202358106b2d56fcc'
const token ='77d05764808a1a37da01293c2fde4e21f5aaa3d377fc79d6402528654984fc85'



export default function Layout(props) {

    let IDBoard = useParams().id
    const [lists, setLists] = useState([])

  const getLists = async () => {
    let res = await axios.get(`https://api.trello.com/1/boards/${IDBoard}/lists/?key=${key}&token=${token}`)
    console.log('getLists =>', res.data);
    return res.data
  }

  const getCardsByList = async (id) => {
    let res = await axios.get(`https://api.trello.com/1/list/${id}/cards/?key=${key}&token=${token}`)
    console.log(`Cards on list ${id}`, res.data)
    return res.data
  }

  

//   const getMembersInfo = async (id) => {
//     let res = await axios.get(`https://api.trello.com/1/members/${id}/?key=${key}&token=${token}`)
//     console.log('getMembersInfo =>', res.data);
//     return res.data
//   }

  useEffect(() => {
    getLists()
    .then(res => {
      let temporalList = []
      res.map(list => temporalList.push({id: list.id, name: list.name }))
      return temporalList
    })
    .then((res) => {
      console.log('list after the getLists', res)
      res.forEach(list => {
        getCardsByList(list.id)
        .then(res => {
          console.log('getCardsByList', res)
          let object = {
            name: list.name,
            listId: list.id,
            cards: res
          }
          setLists(lists => [...lists, object])
        })
      });
      // setCards(CardsInList)
    })

    const getBoards = async ()  => {
      let res = await axios.get(`https://api.trello.com/1/members/me/boards?key=${key}&token=${token}`)
      console.log('getInfo',res.data)
      return res.data
    }

    getBoards()


  })
    return (
        <div className="board">
            <div className="container">
                <h3 className="text-white mb-3">{props.title}</h3>
                <div className="row">
                {lists.length >= 1 ? (
                    lists.map(list => 
                    <Card  title={list.name} counter={list.cards.length} key={list.id}>
                    {list.cards.map(i => <Task title={i.name} key={i.name}/>)}
                    </Card>
                    )
                ) : null}
                </div>
            </div>
        </div>
    )
}