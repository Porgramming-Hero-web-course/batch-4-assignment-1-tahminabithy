{
    interface Circle {
        name: string;
        radius: number
    }
    interface Rectangle {
        name: string;
        length: number;
        width: number;
    }
    const calculateShapeArea = (shape: Circle | Rectangle): number => {
        if ("radius" in shape) {                           // radius is a key in shape object type Circle
            return Math.PI * shape.radius * shape.radius;
        }
        else if ("length" in shape && "width" in shape) {
            return shape.length * shape.width;
        }
        return 0;
    }
    const CircleVal: Circle = {
        name: "circle",
        radius: 4
    }
    const RectangleVal: Rectangle = {
        name: "rectangle",
        length: 4,
        width: 5
    }
    const circleArea = calculateShapeArea(CircleVal);
    console.log(circleArea);

    const rectangleArea = calculateShapeArea(RectangleVal);
    console.log(rectangleArea);

}