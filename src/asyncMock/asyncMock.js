const productos =[
    {
        id:"producto-1",
        nombre:"stratocaster",
        precio:12000,
        categoria:"guitarras",
    },
    {
        id:"producto-2",
        nombre:"fliying v",
        precio:200000,
        categoria:"guitarras",
    },
    {
        id:"producto-3",
        nombre:"marshall 100",
        precio:500000,
        categoria:"amplificadores",
    },
    {
        id:"producto-4",
        nombre:"emg",
        precio:350000,
        categoria:"amplificadores",
    },
    {
        id:"producto-5",
        nombre:"boss metal zone",
        precio:120000,
        categoria:"pedales",
    },
    {
        id:"producto-6",
        nombre:"cry baby",
        precio:180000,
        categoria:"pedales",
    },
]


export function filtrarCategoria(categoria) {
    return productos.filter((prod)=>prod.categoria===categoria)

}



export function filtrarId(prdId){
  return  productos.find(prod=> prod.id===prdId )
}