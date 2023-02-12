export interface Profiles {
    [x: string]: any;
    id: number;
    username: string;
    full_name: string;
    user_tel: string;
    avatar_url: string;
    user_type: string;
    user_age: string;
    user_adress: string;
    email: string;
    user_cusine: string;
    recipeList: Recipes[];
   
}

export interface Recipes {
    user_id: number;
    id: number;
    img: string;
    title: string;
    desc: string;
    raiting:number;
    price:number;
    delivery:boolean;
    delivery_time:string;
    cuisine: string ;
    selected_date: number ;
    available:string;
    recipe_address:string;
    allergens:boolean;
     [x: string]: any;
     profiles:{
        avatar_url:string
     }
}
