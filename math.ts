// helps not pollute global namespace
namespace MyMath {
    const PI = 3.14;

    export function calcCircumference(diameter: number){
        return diameter * PI;
    }

    export function calcRectangle(width: number, length: number){
        return width * length;
    }
}