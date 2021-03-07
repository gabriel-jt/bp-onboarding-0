export type Recipe = {
    recipe: RecipeInfo 
}

export type RecipeInfo = {
    label: string,
    calories: number,
    ingredients: any,
    image: string,
}