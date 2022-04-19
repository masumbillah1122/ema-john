import React from 'react';

const ReviewItem = (props) => {
    const {name, quantity, key, price} = props.product;
    // console.log(props);
    const reviewItemStyle = {
        borderBottom: '1px solid lightgray',
        marginBottom: '5px',
        paddingBottom: '5px',
        marginLeft: '200px'
    }
    return (
        <div style={reviewItemStyle} className='review-item'>
            <h4 className='product-name'>{name}</h4>
            <p>Product Quantity: {quantity}</p>
            <p><small>Product Price:{price}</small></p>
            <br />
            <button 
                onClick={()=> props.removeProduct(key)}
                className='main-button'>
                    Remove</button>
        </div>
    );
};

export default ReviewItem;