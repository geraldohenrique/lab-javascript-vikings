// Soldier
class Soldier {
    constructor(health, strength) {
        this.health = health;
        this.strength= strength;       
    }
    attack() {
        return this.strength;
    }
    receiveDamage(damage) {
        this.health -= damage;
    }
}

// Viking
class Viking extends Soldier {
    constructor (name, health, strength){
        super(health,strength);
        this.name = name;
    }
    receiveDamage(damage){
        this.health -= damage;
        if (this.health > 0){
            return  `${this.name} has received ${damage} points of damage`
        }
        return `${this.name} has died in act of combat`
    }
    battleCry (){
        return `Odin Owns You All!`
    }



}

// Saxon
class Saxon extends Soldier{
    receiveDamage(damage){
        this.health -= damage;
        if (this.health > 0){
            return  `A Saxon has received ${damage} points of damage`
        }
        return `A Saxon has died in combat`
    }

}

// War
class War {

    vikingArmy = [];
    saxonArmy = [];
    addViking(viking){
        this.vikingArmy.push(viking);
    }
    addSaxon(saxon){
        this.saxonArmy.push(saxon);
    }
    vikingAttack(){
        let result;
        let s = Math.floor(Math.random() * (this.saxonArmy.length -1));
        let v = Math.floor(Math.random() * (this.saxonArmy.length -1));
        result = this.saxonArmy[s].receiveDamage(this.vikingArmy[v].strength);
            if (this.saxonArmy[s].health <= 0){
                
                this.saxonArmy.splice(s, 1);
            }
        return result;
    }
    saxonAttack(){
        let result;
        let s = Math.floor(Math.random() * (this.saxonArmy.length -1));
        let v = Math.floor(Math.random() * (this.saxonArmy.length -1));
        result = this.vikingArmy[v].receiveDamage(this.saxonArmy[s].strength);
            if (this.vikingArmy[v].health <= 0){
                
                this.vikingArmy.splice(v, 1);
            }
        return result;
    }
    showStatus(){
        if(this.vikingArmy.length == 1 && this.saxonArmy.length == 1){
            return `Vikings and Saxons are still in the thick of battle.`;
        }else if (this.vikingArmy.length == 0){
            return `Saxons have fought for their lives and survived another day...`;
        }else if (this.saxonArmy.length == 0){
            return `Vikings have won the war of the century!`;
        } 
    }
}
