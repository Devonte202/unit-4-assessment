// Question 1
const makeAccount = function(balance){
  return {
    balance,
    checkBalance (){return balance},
    add(deposit){
      balance += deposit;
      return `${deposit} added`;
    },
    subtract(payment){
      balance -= payment;
      return `${payment} subtracted`;
    },
  }
}

//Question 2
const SavingsAccount = function(name){
  this.name = name;
  this.actualBal = 0;
  this.balance = `$${this.actualBal}`
}
SavingsAccount.prototype.showBalance = function(){
  return this.actualBal;
}
SavingsAccount.prototype.depositFunds = function(deposit){
  if(!deposit || deposit <= 0) return 'Please include a deposit amount that is greater than 0';
  this.actualBal += deposit;
  this.balance = `$${this.actualBal}`
  return `$${deposit} Deposited`;
}
SavingsAccount.prototype.withdrawFunds = function(amount){
  if(!amount || amount > this.actualBal) return 'Insufficient Funds'
  this.actualBal -= amount;
  this.balance = `$${this.actualBal}`
  return `$${amount} withdrawn`;
}

//Question 3
const Phone = function(phoneNumber){
  this.contacts = [];
}

Phone.prototype.addContact = function(contact){
  if(!contact.name || !contact.phoneNumber) return 'Invalid';
  if(contact.phoneNumber.length < 10) return 'Invalid';
  this.contacts.push(contact);
  return `${contact.name} added.`;
}

Phone.prototype.removeContact = function(person){
  for(let contact in this.contacts){
    if(this.contacts[contact].name === person){
      this.contacts.splice(contact, 1);
      return `${person} removed.`
    }
  }
  return 'Contact not found.'
}
Phone.prototype.call = function(person){
  for(let contact in this.contacts){
    if(this.contacts[contact].name === person || this.contacts[contact].phoneNumber === person){
      return `Calling ${this.contacts[contact].name}...`
    }
    if(person.length === 10){
      return `Calling ${person}`;
    }
    
  return 'Invalid';
  }
}

/*const AppleiPhone = function(phoneNumber, model){
  this.model = model;
  Phone.call(this,phoneNumber)
}

AppleiPhone.prototype = Object.create(Phone.prototype);

AppleiPhone.prototype.sendiMessage = function(message){
  
}*/

module.exports = {
  makeAccount,
  SavingsAccount,
  Phone,
  //AppleiPhone,
  // Person,
  // Student,
  // GraduateStudent,
  // Professor,
  // Doctor,
};
