import React from 'react';
import './Product.css';
import {Datas} from './Data'


const Product = () => {
  return (
    <div className='Product_Container'>
        <div className='Product_Wrapper'>
          {Datas?.map((item)=>(
              <div className='Prod_Card'>
              <img src={item.avatar} className='Img'/>
              <h4 className='ProductName'>{item.name}</h4>
              <p className='Desc_Contain'>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type</p>
              <div className='Done_Prod'>
                  <p>$6,940</p>
                  <button>add</button>
              </div>
          </div>
          ))}
        </div>
    </div>
  )
}

export default Product