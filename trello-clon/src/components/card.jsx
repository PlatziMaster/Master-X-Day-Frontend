import React from 'react'

const Card = ({ title, color }) => {
  return (
    <div className="col-lg-4">
      <div className="card background-card" style={{ borderTop: `4px solid ${color}` }}>
        <div className="card-header" >
          <h2 className="card-title" >{title}</h2>
        </div>
        <div className="card-body card-border">
          <div className="row">
            <div className="col-md-12">
              <div className="card background-p">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error sit, iste vero repudiandae eveniet perferendis aliquam magni asperiores eligendi molestiae illum ipsum. Eaque quidem dicta eveniet at reiciendis assumenda explicabo.</p>
              </div>
            </div>
            <div className="col-md-12">
              <div className="card background-p">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error sit, iste vero repudiandae eveniet perferendis aliquam magni asperiores eligendi molestiae illum ipsum. Eaque quidem dicta eveniet at reiciendis assumenda explicabo.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card