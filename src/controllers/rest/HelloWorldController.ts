import {Controller} from "@tsed/di";
import { PathParams } from "@tsed/platform-params";
import {Get, Returns, Summary} from "@tsed/schema";

@Controller("/hello-world")
export class HelloWorldController {
  @Get("/getHello")
  getHello() {
    return "hello";
  }

  @Get("/SumaNumeros")
  getSumaNumeros() {
    return 1 + 2;
  }

  HelloWorldFunction() {
    return "Hello World";
  }

  @Get("/suma/:a/:b") 
  @Summary("Obtiene la suma de dos numeros")
  @(Returns(200).Description("Obtiene expediente con datos para pago"))
  suma(@PathParams("a") a: number, 
       @PathParams("b") b: number): number {
    try {
      if (a == 1) {
        return this._sumarDosNumeros(a, b);
      }
      return a + b;
    }
    catch (x) {
      x.status = 400;
      throw x;
    }
  }


  aFunction() {
    return "hello";
  }

  _sumarDosNumeros(a: number, b: number){
    return a + b;
  }

  _dividirDosNumeros(a: number, b: number){
    return a / b;
  }

}
