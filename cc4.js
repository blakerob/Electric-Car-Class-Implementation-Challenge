U92725213

                function Car(make, speed) {
                  this.make = make;
                  this.speed = speed;
                }

                function EV(make, speed, charge) {
                  Car.call(this, make, speed);
                  this.charge = charge;
                }

                EV.prototype.chargeBattery = function(chargeTo) {
                  this.charge = chargeTo;
                };

                EV.prototype.accelerate = function() {
                  this.speed += 20;
                  this.charge -= 1;
                  console.log(`${this.make} going at ${this.speed} km/h with a charge of ${this.charge}%`);
                };

                // Test data
                const tesla = new EV('Tesla', 120, 23);

                // Accelerate
                tesla.accelerate(); // Output: 'Tesla going at 140 km/h with a charge of 22%'

                // Brake (assuming a 'brake' method is defined in the 'Car' class)

                // Charge Battery to 90%
                tesla.chargeBattery(90);