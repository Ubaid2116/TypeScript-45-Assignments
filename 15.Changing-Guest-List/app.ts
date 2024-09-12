// Question-15
// Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.

let guests = ["Zohaib","Hammad","Awais"]
let unAbleToAttend = guests[0];
console.log(`"${unAbleToAttend} will not come to the party."`);
guests.splice(0, 1, "Muqeet");
guests.forEach(guest => console.log(`"Dear ${guest}, You are invited to dinner tomorrow."`));