import React from 'react';
const Rating = ({star, text, color}) => {
    var rating = [1,2,3,4,5];
    console.log(star)
    return ( 
        <div className='rating'>
            {rating.map( val => {
                return (                    
                    <i style={{color}} 
                    key={Math.floor(Math.random() * 1000)}
                    className = {
                        star >=val
                        ? 'fas fa-star'
                        :star > --val
                        ? 'fas fa-star-half-alt'
                        : 'far fa-star'
                    }                    
                    ></i>
                )
            })}
            <span> {text && text}</span>
        </div>
    );
}
Rating.defaultProps = {
    color: "#f8e825"
}
// Rating.propTypes ={
//     value:PropTypes.number.isRequired,
//     text:PropTypes.string.isRequired,
//     color:PropTypes.string,
// }
export default Rating;