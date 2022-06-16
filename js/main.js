//PRE-ENTREGA 01

function finalizarCompra(){
    return alert("Tu producto se ha agregado al carrito.\nGracias por la compra, que lo disfrutes");
  };
function despedir(){
    return alert("Okey "+usuario+", nos vemos")
};
  
  
const carrito=[];
  
let usuario= prompt("Ingrese su nombre");
  
function saludo(){
    return alert("Hola "+ usuario +". Bienvenido al simulador de compra de produtos");
};
  
saludo();
  
function productoElegido(){
    
    let elegirProducto = prompt("Eliga alguno de los siguietes productos y coloque su numero correspondiente debajo: \n 1- PlayStation\n 2- X-BOX \n 3- PC Gamer \n 4- Nintendo Switch");
    
        switch (elegirProducto) {
        case "1":
            let pregunta=(prompt("El valor de su producto es de $100.000, ¿Quiere comprarlo?\n(SI) o (NO)"));
            if (pregunta==="SI") {
                finalizarCompra();
                carrito.push({producto:"PlayStation", precio:100000});
                break;
            } else {
                despedir();
            };
            break;
        case "2":
            let pregunta2=(prompt("El valor de su producto es de $120.000, ¿Quiere comprarlo?\n(SI) o (NO)"));
            if (pregunta2==="SI") {
                finalizarCompra();
                carrito.push({producto:"X-BOX", precio:120000});
                break;
            } else {
                despedir();
            };
            break;
        case "3":
            let pregunta3=(prompt("El valor de su producto es de $200.000, ¿Quiere comprarlo?\n(SI) o (NO)"));
            if (pregunta3==="SI") {
                finalizarCompra();
                carrito.push({producto:"PC Gamer", precio:200000});
                break;
            } else {
                despedir();
            };
            break;
        case "4":
            let pregunta4=(prompt("El valor de su producto es de $80.000, ¿Quiere comprarlo?\n(SI) o (NO)"));
            if (pregunta4==="SI") {
                finalizarCompra();
                carrito.push({producto:"Nintendo Switch", precio:80000});
                break;
            } else {
                despedir();
            };
            break;
        default:
            alert("Producto inexistente, reinicie el simulador con (F5) y vuelva a intentar");
            break;
        }
};
  
  productoElegido();
  
  console.log(carrito);
