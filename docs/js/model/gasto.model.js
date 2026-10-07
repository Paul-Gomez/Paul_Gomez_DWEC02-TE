export class GastoCombustible {
    constructor(id, vehicleType, date, kilometers, precioViaje) {
        this.id = parseInt(id);
        this.vehicleType = vehicleType;
        this.date = new Date(date);
        this.kilometers =  parseFloat(kilometers);
        this.precioViaje = parseFloat (precioViaje);
    }
}