



const productos =[
    {
        id: "guitarra-01",
        nombre: "Squier Stratocaster® Gold Edition 40th Anniversary",
        imagen: "https://www.fender.cl/media/catalog/product/cache/1/image/800x800/9df78eab33525d08d6e5fb8d27136e95/g/e/ge659_0379410515v1.jpg",
        precio: 700000,
        stock: 5,
        descripcion:"  ",
        categoria:"guitarras"
      },
      {
        id: "guitarra-02",
        nombre: "Jackson JS Series Rhoads JS32",
        imagen: "https://overdrive.cl/wp-content/uploads/2021/10/Jackson-JS-Series-Rhoads-JS32-Satin-Gray-AM-body.jpg",
        precio: 455000,
        stock: 7,
        descripcion:"  ",
  
        categoria:"guitarras"
      },
      {
        id: "guitarra-03",
        nombre: "Jackson JS Series Dinky Arch Top JS32Q DKA",
        imagen: "https://overdrive.cl/wp-content/uploads/2021/08/Jackson-JS-Series-Dinky-Arch-Top-JS32Q-DKA-Transparent-Green-Burst-AM-body.jpg",
        precio: 399000,
        stock: 10,
        descripcion:"  ",
        categoria:"guitarras"
      },
      {
        id: "guitarra-04",
        nombre: "Solar Guitars A1.6AAN",
        imagen: "https://overdrive.cl/wp-content/uploads/2023/01/Solar-Guitars-A1.6AAN-Alder-Aged-Natural-Matte-body.jpg",
        precio: 1189000,
        stock: 5,
        descripcion:"  ",
        categoria:"guitarras"
      },
      {
        id: "guitarra-05",
        nombre: "PRS Guitars SE Standard McCarty Singlecut 594 MT",
        imagen: "https://overdrive.cl/wp-content/uploads/2023/05/PRS-Guitars-SE-Standard-McCarty-Singlecut-594-MT-Tobacco-Sunburst-body.jpg",
        precio: 743900,
        stock: 10,
        descripcion:"  ",
        categoria:"guitarras"
      },
      {
        id: "guitarra-06",
        nombre: "Legator G6P-BLK Ghost P series",
        imagen: "https://overdrive.cl/wp-content/uploads/2021/10/Legator-G6P-BLK-Ghost-P-series-6-string-Black-body.jpg",
        precio: 945000,
        stock: 4,
        descripcion:"  ",
        categoria:"guitarras"
      },
      {
        id:"amplificador-1",
        nombre:"Victory Amplification RK50 Richie Kotzen Signature",
        imagen:"https://overdrive.cl/wp-content/uploads/2020/08/Victory-Amplification-RK50-Richie-Kotzen-front.jpg",
        precio:120000,
        stock:3,
        descripcion:" ",
        categoria:"amplificadores"
      },
      {
        id:"amplificador-2",
        nombre:"Friedman Amplification PT-20 Pink Taco",
        imagen:"https://overdrive.cl/wp-content/uploads/2020/08/Friedman-Amplification-PT-20.jpg",
        precio:1500000,
        stock:4,
        descripcion:" ",
        categoria:"amplificadores"
      },
      {
        id:"amplificador-3",
        nombre:"ENGL Ironball E606SE Special Edition",
        imagen:"https://overdrive.cl/wp-content/uploads/2020/08/ENGL-Ironball-E606SE-Special-Edition-front.jpg",
        precio: 999000,
        stock:4,
        descripcion:" ",
        categoria:"amplificadores"
      }, {
        id:"amplificador-4",
        nombre:"Marshall 1962 Bluesbreaker 30-watt 2x12inch Combo",
        imagen:"https://overdrive.cl/wp-content/uploads/2022/02/Marshall-1962-Bluesbreaker-30watt-2x12-Combo-front.jpg",
        precio:1259000,
        stock:5,
        descripcion:" ",
        categoria:"amplificadores"
      }
]






export function filtrarCategoria(categoria) {
    return productos.filter((prod)=>prod.categoria===categoria)

}



export function filtrarId(prdId){
  return  productos.find(prod=> prod.id===prdId )
}