import React from 'react'
import './UserCard.css'

const UserCard = ({members}) => {


  return (
    <div className="card__user">
      
     
                <div className="container__users">
                  
                      <p>Members:</p>
                      {
                        members.map( (m, i) =>{
                            return (
                                <div className="card__user--item" key={i}>
                               <img src="https://freesvg.org/img/Male-Avatar.png" alt=""/>
                                <p> {m.fullName} </p>
                               </div>
                              
                            )
                        } )
                      }
                     
                      
                     
                </div>
                  
         
          
     
    </div>
  )
}

export default UserCard

