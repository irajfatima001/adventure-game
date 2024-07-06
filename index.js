#!/usr/bin/env node
import inquirer from "inquirer";
class Player {
    name;
    fuel = 100;
    constructor(name) {
        this.name = name;
    }
    fuelDecrease() {
        let fuel = this.fuel - 25;
        this.fuel = fuel;
    }
    fuelIncrease() {
        this.fuel = this.fuel;
    }
}
class Opponent {
    name;
    fuel = 100;
    constructor(name) {
        this.name = name;
    }
    fuelDecrease() {
        let fuel = this.fuel - 25;
        this.fuel = fuel;
    }
}
let player = await inquirer.prompt({
    type: "input",
    name: "name",
    message: "Please Enter your Name:"
});
let opponent = await inquirer.prompt({
    type: "list",
    name: 'select',
    message: "Select your Opponent",
    choices: ["Skeleton", "Alians", "Zombie"]
});
let p1 = new Player(player.name);
let o1 = new Opponent(opponent.select);
do {
    //skeleton
    if (opponent.select == "Skeleton") {
        //console.log(`${p1.name} VS ${o1.name}`)
        let ask = await inquirer.prompt({
            type: "list",
            name: "opt",
            message: "Select your Opponent",
            choices: ["Attack", "Drink Portion", "Run for your life.."]
        });
        if (ask.opt == "Attack") {
            let num = Math.floor(Math.random() * 2);
            if (num > 0) {
                p1.fuelDecrease();
                console.log(`${p1.name} fuel is ${p1.fuel}`);
                console.log(`${o1.name} fuel is ${o1.fuel}`);
                if (p1.fuel <= 0) {
                    console.log("You loose, Better luck next Time");
                    process.exit();
                }
            }
            if (num <= 0) {
                o1.fuelDecrease();
                console.log(`${o1.name} fuel is ${o1.fuel}`);
                console.log(`${p1.name} fuel is ${p1.fuel}`);
                if (o1.fuel <= 0) {
                    console.log("You Win");
                    process.exit();
                }
            }
        }
        if (ask.opt == "Drink Portion") {
            p1.fuelIncrease();
            console.log(`You drink Health portion your fuel is ${p1.fuel}`);
        }
        if (ask.opt == "Run for your life..") {
            console.log("You loose, Better luck next Time");
            process.exit();
        }
    }
    //aliens
    if (opponent.select == "Alians") {
        //console.log(`${p1.name} VS ${o1.name}`)
        let ask = await inquirer.prompt({
            type: "list",
            name: "opt",
            message: "Select your Opponent",
            choices: ["Attack", "Drink Portion", "Run for your life.."]
        });
        if (ask.opt == "Attack") {
            let num = Math.floor(Math.random() * 2);
            if (num > 0) {
                p1.fuelDecrease();
                console.log(`${p1.name} fuel is ${p1.fuel}`);
                console.log(`${o1.name} fuel is ${o1.fuel}`);
                if (p1.fuel <= 0) {
                    console.log("You loose, Better luck next Time");
                    process.exit();
                }
            }
            if (num <= 0) {
                o1.fuelDecrease();
                console.log(`${o1.name} fuel is ${o1.fuel}`);
                console.log(`${p1.name} fuel is ${p1.fuel}`);
                if (o1.fuel <= 0) {
                    console.log("You Win");
                    process.exit();
                }
            }
        }
        if (ask.opt == "Drink Portion") {
            p1.fuelIncrease();
            console.log(`You drink Health portion your fuel is ${p1.fuel}`);
        }
        if (ask.opt == "Run for your life..") {
            console.log("You loose, Better luck next Time");
            process.exit();
        }
    }
    //zombie
    if (opponent.select == "Zombie") {
        //console.log(`${p1.name} VS ${o1.name}`)
        let ask = await inquirer.prompt({
            type: "list",
            name: "opt",
            message: "Select your Opponent",
            choices: ["Attack", "Drink Portion", "Run for your life.."]
        });
        if (ask.opt == "Attack") {
            let num = Math.floor(Math.random() * 2);
            if (num > 0) {
                p1.fuelDecrease();
                console.log(`${p1.name} fuel is ${p1.fuel}`);
                console.log(`${o1.name} fuel is ${o1.fuel}`);
                if (p1.fuel <= 0) {
                    console.log("You loose, Better luck next Time");
                    process.exit();
                }
            }
            if (num <= 0) {
                o1.fuelDecrease();
                console.log(`${o1.name} fuel is ${o1.fuel}`);
                console.log(`${p1.name} fuel is ${p1.fuel}`);
                if (o1.fuel <= 0) {
                    console.log("You Win");
                    process.exit();
                }
            }
        }
        if (ask.opt == "Drink Portion") {
            p1.fuelIncrease();
            console.log(`You drink Health portion your fuel is ${p1.fuel}`);
        }
        if (ask.opt == "Run for your life..") {
            console.log("You loose, Better luck next Time");
            process.exit();
        }
    }
} while (true);
