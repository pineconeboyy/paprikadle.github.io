
export class GuessWork {
    charlist = [
        {
            charName: "Iridia Forrest",
            charGender: "Nonbinary",
            charRace: "Asian",
            charAge: "21 - 30",
            charSpecies: "Angel",
            charJob: "Government/Law Enforcement"
        },
        {
            charName: "Sabine Forrest",
            charGender: "Female",
            charRace: "White",
            charAge: "21 - 30",
            charSpecies: "Demon",
            charJob: "Government/Law Enforcement"
        },
        {
            charName: "Neo Forrest",
            charGender: "Male",
            charRace: "Mixed",
            charAge: "11 - 20",
            charSpecies: "Demon",
            charJob: "Student"
        },
        {
            charName: "Lilah Haynes",
            charGender: "Female",
            charRace: "White",
            charAge: "50+",
            charSpecies: "Angel",
            charJob: "Government/Law Enforcement"
        },
        {
            charName: "Eclipse Valberg",
            charGender: "Male",
            charRace: "Mixed",
            charAge: "21 - 30",
            charSpecies: "Demon",
            charJob: "Customer Service"
        },
        {
            charName: "Rory Veselov",
            charGender: "Nonbinary",
            charRace: "White",
            charAge: "31 - 40",
            charSpecies: "Angel",
            charJob: "Government/Law Enforcement"
        },
        {
            charName: "Vicente Hidalgo",
            charGender: "Male",
            charRace: "Latino",
            charAge: "31 - 40",
            charSpecies: "Human",
            charJob: "Security"
        },
        {
            charName: "Robert Trebor",
            charGender: "Male",
            charRace: "White",
            charAge: "21 - 30",
            charSpecies: "Human",
            charJob: "Legal Services"
        },
        {
            charName: "Jade Valberg",
            charGender: "Female",
            charRace: "White",
            charAge: "21 - 30",
            charSpecies: "Human",
            charJob: "Legal Services"
        },
        {
            charName: "Godhavari Datta",
            charGender: "Female",
            charRace: "Asian",
            charAge: "21 - 30",
            charSpecies: "Human",
            charJob: "Entertainment/Performing Arts"
        },
        {
            charName: "Mio Nakamura",
            charGender: "Female",
            charRace: "Asian",
            charAge: "21 - 30",
            charSpecies: "Human",
            charJob: "Government/Law Enforcement"
        },
        {
            charName: "Yukia Watanabe",
            charGender: "Nonbinary",
            charRace: "Asian",
            charAge: "21 - 30",
            charSpecies: "Human",
            charJob: "Government/Law Enforcement"
        },
        {
            charName: "Arya Radhakrishnan",
            charGender: "Nonbinary",
            charRace: "Asian",
            charAge: "11 - 20",
            charSpecies: "Human",
            charJob: "Student"
        },
        {
            charName: "Solon Gataki",
            charGender: "Male",
            charRace: "White",
            charAge: "50+",
            charSpecies: "Angel",
            charJob: "Government/Law Enforcement"
        },
        {
            charName: "Mickey Miller",
            charGender: "Female",
            charRace: "White",
            charAge: "11 - 20",
            charSpecies: "Human",
            charJob: "Student"
        },
        {
            charName: "Orion Karalis",
            charGender: "Nonbinary",
            charRace: "Black",
            charAge: "11 - 20",
            charSpecies: "Human",
            charJob: "Student"
        },
        {
            charName: "Cybelle Karalis",
            charGender: "Nonbinary",
            charRace: "Black",
            charAge: "21 - 30",
            charSpecies: "Human",
            charJob: "Education"
        },
        {
            charName: "Jaya Seong",
            charGender: "Female",
            charRace: "Asian",
            charAge: "21 - 30",
            charSpecies: "Human",
            charJob: "Business"
        },
        {
            charName: "Danae Laskaris",
            charGender: "Female",
            charRace: "Black",
            charAge: "21 - 30",
            charSpecies: "Angel",
            charJob: "Fine Arts"
        },
        {
            charName: "Raelin Sykes",
            charGender: "Nonbinary",
            charRace: "White",
            charAge: "11 - 20",
            charSpecies: "Demon",
            charJob: "High Society"
        },
    ]

    /* oc template
        {
            charName: "",
            charGender: "",
            charRace: "",
            charAge: "",
            charSpecies: "",
            charJob: ""
        },
    */

    greenlist = [];
    cellStore = [];
    greenCount = 0;
    guesscount = 0;
    invalid = 0;
    wincheck = false;
    typeGuess;
    pie;

// vars for randomly chosen answer
    ansname = "";
    ansgen = "";
    ansrace = "";
    ansage = "";
    ansspec = "";
    ansjob = "";
    
// vars for inputted guess
    tempname = "";
    tempgen = "";
    temprace = "";
    tempage = "";
    tempspec = "";
    tempjob = "";

    randomIndex() { //generates random index number for array
        console.log("randomIndex has run");
        this.pie = Math.floor(Math.random() * this.charlist.length);
        //console.log(this.pie);
    }

    answerPick() { //sets answer attributes to vars
        console.log("answerPick has run");
        this.ansname = this.charlist[this.pie].charName;
        this.ansgen = this.charlist[this.pie].charGender;
        this.ansrace = this.charlist[this.pie].charRace;
        this.ansage = this.charlist[this.pie].charAge;
        this.ansspec = this.charlist[this.pie].charSpecies;
        this.ansjob = this.charlist[this.pie].charJob;
    }

    guessSubmit() { //saves input to var, clears tb, calls next function
            console.log("guessSubmit has run");
        this.typeGuess = document.getElementById('tb').value;
        document.getElementById('tb').value = "";
            this.guesscount ++;
            this.guessReg(this.typeGuess);
            this.guessComp();
        if (this.invalid != this.charlist.length) { //checking to see if input is valid before displaying
            this.guessDisplay();
        }
        this.invalid = 0;
        //console.log("guess list: ", this.guesslist);
        //console.log("answer list: ", this.anslist);
        console.log("guess: ", this.tempname);
        console.log("answer: ", this.ansname);
        this.greenCount = 0;
        this.cellStore = [];
    }

    guessReg(guess) { //iterates through array + sets temp vars
        for (let x = 0; x < this.charlist.length; x++) {
            if ((this.charlist[x].charName.toString()).includes(guess)) {
                this.tempname = this.charlist[x].charName;
                this.tempgen = this.charlist[x].charGender;
                this.temprace = this.charlist[x].charRace;
                this.tempage = this.charlist[x].charAge;
                this.tempspec = this.charlist[x].charSpecies;
                this.tempjob = this.charlist[x].charJob;
                console.log("guessReg has run");
                break;
            }
            else if (!((this.charlist[x].charName.toString()).includes(guess))) {
                this.invalid ++;
                //console.log(this.invalid);
            }

            if (this.invalid == this.charlist.length) {
                alert("Invalid guess! Check spelling and capitalization and try again.");
                return;
        }
        }
    }

    guessComp() { //compares chosen character to answer
        console.log("guessComp has run");
        let anslist = [this.ansname, this.ansgen, this.ansrace, this.ansage, this.ansspec, this.ansjob];
        let guesslist = [this.tempname, this.tempgen, this.temprace, this.tempage, this.tempspec, this.tempjob];

        for (let g = 0; g < anslist.length; g++) {
            if (guesslist[g] == anslist[g]) { //if the guess list and ans list element are equal
                this.cellStore.push(g); //add index number to cellStore
                this.greenCount ++;
                console.log("this if statement works");
            }
        }
        
        if (this.tempname == this.ansname) {
            alert("woahhh omg you won holy shit");
            this.winSeq();
        }
        console.log("green: ", this.greenCount);
        console.log(this.cellStore);
    }

    guessDisplay() { //displays guess in table
        console.log("guessDisplay has run");
        let gtable = document.getElementById("guesstrack");
        let row = gtable.insertRow(0);

        let nme = row.insertCell(0);
        let gen = row.insertCell(1);
        let race = row.insertCell(2);
        let age = row.insertCell(3);
        let spec = row.insertCell(4);
        let job = row.insertCell(5);

        //pick cells w for loop and cell array
        for (let c = 0; c < this.cellStore.length; c++){
           let close = document.getElementById("guesstrack").rows[0].cells.item(this.cellStore[c]);
           close.style.backgroundColor = 'green';
        }

        nme.innerHTML = this.tempname;
        gen.innerHTML = this.tempgen;
        race.innerHTML = this.temprace;
        age.innerHTML = this.tempage;
        spec.innerHTML = this.tempspec;
        job.innerHTML = this.tempjob;
    }

    winSeq() {
        document.getElementById("tb").disabled = true;
    }
}

   