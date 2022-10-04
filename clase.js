 class cis {
    constructor() {
      console.log("Comunicate al cis");
    }
  }
  
 
  class decanatura extends cis {
    constructor() {
      super();
      console.log("Soy el decano");
    }
  }

  const decanouno = new decanatura();
  console.log(decanouno);


  class clase {
    constructor(nombre, salon) {
        this.nombre = nombre;
        this.salon  = salon;
    }
    
    profesor() {
        return `${this.nombre} puede dar clase`;
    }
    
    jornada() {
        return `${this.nombre} nocturna`;
    }
}

class profesor extends clase {
    constructor(nombre, edad, horas) {
        super(nombre, edad);
        this.horas = horas;
    }
    
    horas() {
        return `puede dar 8 ${this.colorBigotes}`;
    }
}

let clara = new profesor("Clara", 33, "índigo");
console.log(clara);