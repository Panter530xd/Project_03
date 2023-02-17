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
    averageRating:number;
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


export interface GurmanInterface{
    reviews: any;  
  id: string,
  updated_at: null,
  username: string,
  full_name: string,
  avatar_url: string
  website: null,
  user_tipe: string,
  user_adress: string,
  user_email: null,
  user_tel: string,
  user_age: string,
  user_cusine: string,
   gurmanReviews:{
    map(arg0: (review: ReviewInterface) => JSX.Element): any;
    id: number,
    created_at: string,
    comment: string
    review:number,
    profile_id: string
}
 
}

 export interface ReviewInterface {
    id: number,
    created_at: string,
    comment: string
    review:number,
    profile_id: string
}

  
   
  

