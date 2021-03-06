import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css'
import { useEffect, useState } from 'react';
import './assets/scss/global.scss'
import Header from './components/header'

// const key = 'a9a2107d1296e0416a93bddf26491c4a'
const key = '93e0e4c144003bf990231de2aab641ee'
// const token = '779a267d8327c2224e92e70dbf12b4fc228de2bc7689136202358106b2d56fcc'
const token ='77d05764808a1a37da01293c2fde4e21f5aaa3d377fc79d6402528654984fc85'
const IDBoard = "6043a61f64db4380f9d6a37b"


function App() {
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

  const getMembersOfBoard = async () => {
    let res = await axios.get(`https://api.trello.com/1/boards/${IDBoard}/memberships/?key=${key}&token=${token}`)
    console.log('getMembersOfBoard =>', res.data);
    return res.data
  }

  const getMembersInfo = async (id) => {
    let res = await axios.get(`https://api.trello.com/1/members/${id}/?key=${key}&token=${token}`)
    console.log('getMembersInfo =>', res.data);
    return res.data
  }

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
    
    getMembersOfBoard()
    .then(res => {
      // TODO: get members information
    })

  }, [1])

  return (
    <div className="container">
      <Header/>
      {lists.length >= 1 ? (
        lists.map(list => <div>
          <h2>{list.name}</h2>
          <ul>
            {list.cards.map(i => <li>{i.name}</li>)}
          </ul>
        </div>)
      ) : null}
    </div>
  );
}

export default App;
