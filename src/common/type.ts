
export interface EachFood {
    id: number,
    name: string,
    description: string,
    price: string,
    available: boolean,
    image: string
  }
  
export type FormData =  Omit<EachFood, "id" | "available">;

  