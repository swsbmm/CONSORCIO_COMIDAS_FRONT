import React from 'react'

import imagen from '../../Assets/img/icon.png'

function Card() {
    return (
        <div className='card'>
            <img src={imagen} alt="" />
            <div className='card-body'>
                <h4 className='card-title'>Card Text</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur harum suscipit nisi ex praesentium laborum temporibus, inventore aperiam ipsam, enim aspernatur voluptates rem minus vel impedit eveniet quam velit alias.</p>
                <button type="button" class="btn btn-info">Info</button>
            </div>
        </div>
    )
}

export default Card