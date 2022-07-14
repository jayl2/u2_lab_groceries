import { useState } from 'react'

export default function Food()

{
const list =[
    {

item: 'Milk',
brand: 'Tuscan',
units: 1,
quantity: 1,
isPurchased: false},

{item: 'Candy',
brand: 'Snickers',
units: 1,
quantity: 6,
isPurchased: false
},

{
item: 'Eggs',
brand: 'Eggland',
units: 1,
quantity: 12,
isPurchased: false}
]

return(
    <div>
        {list.map((grocery)=>(
            <div>
                <p><b>{grocery.item}</b> qty: {grocery.quantity}</p>
            </div>
        ))}
    </div>

)
}