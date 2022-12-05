import React from 'react'
// import { menu } from './Menu';
import '../App.css'
// import { menu } from './Menu'


const Resturant = ({ menuData1 }) => {

    console.log(menuData1);


    return (


        <div>

            <div className='container row mx-2'>
                {menuData1.map((e, i) => {
                    let {name,category,text,image}=e
                    return <div className='col-md-4 col-6 my-2' key={i}>
                        <div className="card" style={{ width: '100%', height: '100%' }}>
                            <img src={image} className="card-img-top" alt="..." style={{ height: '150px' }} />
                            <div className="card-body">
                                <h5 className="card-title">{category}</h5>
                                <p className="card-text">{name}</p>
                                <p className="card-text">{text}</p>
                                <a href="#" className="btn btn-danger">Order Now</a>
                            </div>
                        </div>
                    </div>

                })}
            </div>




        </div>
    )
}

export default Resturant;
