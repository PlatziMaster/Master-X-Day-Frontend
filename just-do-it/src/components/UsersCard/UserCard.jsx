import React from 'react'
import './UserCard.css'

const UserCard = ({boards}) => {

  
  return (
    <div className="card__user">
      
     
                <div className="container__users">
                  
                      <p>Members:</p>
                      <div className="card__user--item">
                          <img src="https://freesvg.org/img/Male-Avatar.png" alt=""/>
                          <p>Nombre</p>
                         </div>
                      <div className="card__user--item">
                          <img src="https://freesvg.org/img/Male-Avatar.png" alt=""/>
                          <p>Nombre</p>
                      </div>
                      <div className="card__user--item">
                          <img src="https://freesvg.org/img/Male-Avatar.png" alt=""/>
                          <p>Nombre</p>
                         </div>
                      <div className="card__user--item">
                          <img src="https://freesvg.org/img/Male-Avatar.png" alt=""/>
                          <p>Nombre</p>
                         </div>
                      <div className="card__user--item">
                          <img src="https://freesvg.org/img/Male-Avatar.png" alt=""/>
                          <p>Nombre</p>
                         </div>
                     
                </div>
                  
         
          
     
    </div>
  )
}

export default UserCard

