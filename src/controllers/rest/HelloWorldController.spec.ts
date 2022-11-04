import { PlatformTest } from "@tsed/common";
import { HelloWorldController } from "./HelloWorldController";

describe("HelloWorldController", () => {
  beforeEach(PlatformTest.create);
  afterEach(PlatformTest.reset);

  it("should do something", () => {
    const instance = PlatformTest.get<HelloWorldController>(HelloWorldController);
    // const instance = PlatformTest.invoke<HelloWorldController>(HelloWorldController); // get fresh instance

    expect(instance).toBeInstanceOf(HelloWorldController);
  });


  it("1 + 1 debe ser 2", () => {
    const instance = PlatformTest.get<HelloWorldController>(HelloWorldController);
    const primerNumero = 1;
    const segundoNumero = 1;
    expect(instance._sumarDosNumeros(primerNumero, segundoNumero)).toBe(2);
  });

  //División
  it("36 / 6 debe ser 6", () => {
    const instance = PlatformTest.get<HelloWorldController>(HelloWorldController);
    const primerNumero = 36;
    const segundoNumero = 6;
    expect(instance._dividirDosNumeros(primerNumero, segundoNumero)).toBe(6);
  });


  it("mock de sumar dos numeros", () => {
    const instance = PlatformTest.get<HelloWorldController>(HelloWorldController);
    jest.spyOn(instance, "_sumarDosNumeros").mockReturnValueOnce(1);
    const primerNumero = 41;
    const segundoNumero = 2;
    expect(instance._sumarDosNumeros(primerNumero, segundoNumero)).toStrictEqual(1);
    expect(instance._sumarDosNumeros(primerNumero, segundoNumero)).toBe(43);
  });

  it("llamada a metodo interno bajo circunstancias especiales", () => {
    const instance = PlatformTest.get<HelloWorldController>(HelloWorldController);
    let x = jest.spyOn(instance, "_sumarDosNumeros");
    const primerNumero = 1;
    const segundoNumero = 2;
    const res = instance.suma(primerNumero,segundoNumero);
    expect(x).toBeCalled();
  });
});