import React from "react";
import style from "./recipecard.module.css";

interface RecipeProps {
    title: string,
    calories: number,
    image: string,
    ingredients: any,
}

const RecipeCard: React.FC<RecipeProps> = ({
    title,
    calories,
    image,
    ingredients
}) => {
    return(
        <div className={style.recipe}>
        <h1>{title}</h1>
        <ol>
            {ingredients.map((ingredient : any) => (
                <li>{ingredient.text}</li>
            ))}
        </ol>
        <p>{calories}</p>
        <img className={style.image} src={image} alt="" />
    </div>
    );
}

export default RecipeCard;