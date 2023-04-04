import React from 'react'
import { useParams } from 'react-router-dom';


export default function Example() {
    const { id } = useParams();
    return (
        <>
            <h1>{id} Restaurant Menu</h1>
            <table>
                <thead>
                    <tr>
                        <th>Dish</th>
                        <th>Description</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Butter Chicken</td>
                        <td>Chicken cooked in a rich buttery tomato sauce</td>
                        <td>₹250</td>
                    </tr>
                    <tr>
                        <td>Paneer Tikka</td>
                        <td>Cubes of cottage cheese marinated in spices and grilled in a tandoor</td>
                        <td>₹200</td>
                    </tr>
                    <tr>
                        <td>Veg Biryani</td>
                        <td>Basmati rice cooked with vegetables and aromatic spices</td>
                        <td>₹225</td>
                    </tr>
                    <tr>
                        <td>Garlic Naan</td>
                        <td>Flatbread topped with minced garlic and butter</td>
                        <td>₹50</td>
                    </tr>
                    <tr>
                        <td>Rasgulla</td>
                        <td>Spongy white balls of chenna soaked in sugar syrup</td>
                        <td>₹75</td>
                    </tr>
                </tbody>
            </table>
        </>
    )
}

