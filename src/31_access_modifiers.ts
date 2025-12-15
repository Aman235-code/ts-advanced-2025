
class BankAccount {
    public owner : string 

    private balance = 0

    #otp = 123456

    constructor(owner: string){
        this.owner = owner
    }

    deposit(amt: number){
        if(amt <= 0){
            throw new Error('Amount Must be positive')
        }
        this.balance += amt
    }
    getBalance(){
        return this.balance
    }

    verifyOtp(code: number){
        return this.#otp === code // only accessible inside the class
    }
}

const acc = new BankAccount('Aman')
acc.deposit(5000)
console.log(acc.getBalance())

// error
// acc.balance 
// acc.otp