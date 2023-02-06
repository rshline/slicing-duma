interface IProduct {
    product: IProductAttr
}
  
interface IProductAttr {
    id: number,
    name: string,
    price: number,
    discount: number,
    color: string,
    hexColor: string,
    status: string,
    size: string,
    img: Array<string>,
    description: string
}

interface IStatus {
    isHome: boolean
}

interface IPhotos {
images: Array<string>
}