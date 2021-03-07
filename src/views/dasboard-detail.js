import axios from 'axios';
import { Fragment, useEffect, useState } from 'react';
import Card from '../components/mobile-card-container'
import Task from '../components/Target'
import Charts from '../components/charts'
import { useParams } from 'react-router';

// const key = 'a9a2107d1296e0416a93bddf26491c4a'
const key = '93e0e4c144003bf990231de2aab641ee'
// const token = '779a267d8327c2224e92e70dbf12b4fc228de2bc7689136202358106b2d56fcc'
const token ='77d05764808a1a37da01293c2fde4e21f5aaa3d377fc79d6402528654984fc85'


function DasboardDetail(props) {
const [lists, setLists] = useState([])
const [members, setMembers] = useState([])
const { id } = useParams()
const [data, setdata] = useState([])
const dataTest = [ {angle: 1, radius: 10}, {angle: 2, label: 'Super Custom label', subLabel: 'With annotation', radius: 20}, {angle: 5, radius: 5, label: 'Alt Label'}, {angle: 3, radius: 14}, {angle: 5, radius: 12, subLabel: 'Sub Label only', className: 'custom-class'} ];


const getLists = async () => {
    let res = await axios.get(`https://api.trello.com/1/boards/${id}/lists/?key=${key}&token=${token}`)
    console.log('getLists =>', res.data);
    return res.data
}

const getCardsByList = async (id) => {
    let res = await axios.get(`https://api.trello.com/1/list/${id}/cards/?key=${key}&token=${token}`)
    console.log(`Cards on list ${id}`, res.data)
    return res.data
}

const getMembersOfBoard = async () => {
    let res = await axios.get(`https://api.trello.com/1/boards/${id}/memberships/?key=${key}&token=${token}`)
    console.log('getMembersOfBoard =>', res.data);
    return res.data
}

const getMembersInfo = async (id) => {
    let res = await axios.get(`https://api.trello.com/1/members/${id}/?key=${key}&token=${token}`)
    console.log('getMembersInfo =>', res.data);
    return res.data
}

useEffect(() => {
    console.log(id);

    if(lists.length >= 1) {
    console.log('the cards');
    } else {
    getLists()
    .then(res => {
        let temporalList = []
        res.map(list => temporalList.push({id: list.id, name: list.name }))
        return temporalList
    })
    .then((res) => {
        console.log('list after the getLists', res)
        res.sort(function(a, b){
            if(a.name < b.name) { return -1; }
            if(a.name > b.name) { return 1; }
            return 0;
        }).forEach(list => {
        getCardsByList(list.id)
        .then(res => {
            console.log('getCardsByList', res)
            let object = {
            name: list.name,
            listId: list.id,
            cards: res
            }
            setLists(lists => [...lists, object])
            setdata(data => [...data, {angle: res.length, label: list.name, subLabel: list.name}])
        })
        });
    })
    }
    
    getMembersOfBoard()
    .then(members => {
    console.log('getMembersOfBoard', members)
    members.forEach(member => {
        getMembersInfo(member.idMember)
        .then(res => {
        console.log(`getMembersInfo ${member.id}`, res)
        setMembers(members => [...members, res])
        })
    });
    })

}, [1])



return (
    <Fragment>
        <Fragment>
        {/* {members.length >=1 ? (
            members.map(member => <p>{member.username}</p>)
        ) : null} */}
        </Fragment>
        {/* {boards.length >= 1 ? (
            boards.map(board => <div key={board.id}>{board.name}</div>)
        ) : null} */}

        {lists.length >= 1 ? (
            lists.sort(function(a, b){
                if(a.name < b.name) { return -1; }
                if(a.name > b.name) { return 1; }
                return 0;
            }).map(list => 
            <Card  title={list.name} counter={list.cards.length}>
                {list.cards.map(i => <Task title={i.name} />)}
            </Card>
            )
        ) : null}
        <Charts data={data}/>
    </Fragment>
);
}

export default DasboardDetail;
