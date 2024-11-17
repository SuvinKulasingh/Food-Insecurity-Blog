document.addEventListener("DOMContentLoaded", function() {

    // DOM elements
    const startButton = document.getElementById("start");
    const questionnum = document.getElementById("questionno");
    const container = document.querySelector('.container');
    const headings = document.getElementById("userprofile");
    const heading1 = document.getElementById("heading1");
    const heading2 = document.getElementById("heading2");
    const heading3 = document.getElementById("heading3");
    const heading4 = document.getElementById("heading4");
    const liname = document.getElementById("name");
    const lisurname = document.getElementById("surname");
    const liage = document.getElementById("age");
    const ligender = document.getElementById("gender");
    const literms = document.getElementById("terms");
    const lirational = document.getElementById("rational");
    const liintrest = document.getElementById("intrest");
    const liskills = document.getElementById("skills");
    const litype = document.getElementById("type");
    const listudyarea = document.getElementById("studyarea");
    const liinstitute = document.getElementById("institute");
    const liphone = document.getElementById("phone");
    const liemail = document.getElementById("email");
    const q = document.getElementById("question");
    const detailcon = document.querySelector(".records");
    const personal = document.getElementById("personal");
    const volunteer = document.getElementById("volunteer");
    const qualifications = document.getElementById("qualifications"); 
    const contact = document.getElementById("contact"); 
    const loadingBar = document.getElementById("loading-bar");
    const loadingText = document.querySelector('.loading-text');
    

    // Arrays containing prompts and questions
    const prompts = [
        "Enter your name: ",
        "Enter your surname; ",
        "Enter your age: ",
        "Enter your Gender (M / F)",
        "Yes / No",
        "What brings you here: ",
        "Which volunteer tasks are you interested in?",
        "Do you have any specific skills or talents you would like to contribute to our fundraising efforts?",
        "What is your assignment type?",
        "What is the main feild of study?",
        "What is your institute name:",
        "Enter your Phone No:",
        "Enter your Email:"

    ];

    const promptheading = [
        "Step 1 Personal details: ",
        " ",
        "Step 2 Volunteering tasks: ",
        "Step 3 Qualifications: ",
        "Step 4 Contact Information: "
    ];
    const questions = [
        "Question 1/4",
        "Question 2/4",
        "Question 3/4",
        "Question 4/4",
        "Do You Agree with our Privacy Terms",
        "Question 1/4",
        "Question 2/4",
        "Question 3/4",
        "Question 4/4",
        "Question 1/2",
        "Question 2/2",
        "Question 1/2",
        "Question 2/2"
    ];

    // Initial stage and step count
    let promptStage = 0;
    let titleprompt = 0;
    let totalSteps = 13;


    // Event listener for Start button click
    startButton.addEventListener("click", function() {
        container.style.display = "block";
        updatePrompt();
        startButton.style.display = "none";
        question();
        questionno();
    });
    

    // Function to handle "Next" button click
    function handleNextClick() {
        if (promptStage === 0) {
            let name ;
        do {
            name = prompt(prompts[0]);
        } while (!name.trim());
        liname.textContent = "Name: "+name;
        liname.style.display = "block";
        detailcon.style.display = "block";
            currentStep = promptStage+1;
            progressbar();
            promptStage = 1;
            question();
            questionno();
        } else if (promptStage === 1) {
            let surname;
            do {
                surname = prompt(prompts[1]);
            } while (!surname.trim());
            currentStep = promptStage+1;
            progressbar();
            lisurname.textContent = "Surname: "+surname;
            lisurname.style.display = "block";
            promptStage = 2;
            question();
            questionno();
            console.log("surname is"+surname);
        } else if (promptStage === 2) {
            let age;
            do {
                age = prompt(prompts[2]);
            } while (!age.trim());
            currentStep = promptStage+1;
            progressbar();
            liage.textContent = "Age: "+age;
            liage.style.display = "block";
            promptStage = 3;
            question();
            questionno();
        } else if (promptStage === 3) {
            let gender;
            do {
                gender = prompt(prompts[3]).toUpperCase();
            } while (!gender.trim() || !(gender == "M" || gender == "F"));
            currentStep = promptStage+1;
            progressbar();
            ligender.textContent = "Gender: "+gender;
            ligender.style.display = "block";
            promptStage = 4;
            question();
            questionno();
            titleprompt++;
            updatePrompt(); 
        } else if (promptStage === 4) {
            heading1.style.display = "none";
            let terms;
            do {
                while(true){
                terms = prompt (prompts[4]).toLowerCase(); 
                    if (terms == "yes" || terms == "no"){
                        break;
                    }
                }  
            } while (!terms.trim()); 
            literms.textContent = "Agree with policy terms: "+terms;
            currentStep = promptStage+1;
            progressbar();   
            promptStage = 5;
            titleprompt++;
            updatePrompt();
            question(); 
            questionno();
            detailcon.style.display = "none";   
        } else if (promptStage === 5) {
            let rational;
            do {
                rational = prompt(prompts[5]);
            } while (!rational.trim());
            currentStep = promptStage+1;
            progressbar();
            heading2.style.display = "block";
            detailcon.style.display = "block";
            personal.style.display = "none";
            volunteer.style.display = "block";
            lirational.textContent = "Rational: "+rational;
            lirational.style.display = "block";
            promptStage = 6;
            question();
            questionno();
        }else if (promptStage === 6){
            let intrest;
            do {
                intrest = prompt(prompts[6]);
            } while (!intrest.trim());
            liintrest.textContent = "Intrested in: "+intrest;
            liintrest.style.display = "block";
            currentStep = promptStage+1;
            progressbar();
            promptStage = 7
            question();
            questionno();
        }else if(promptStage === 7){
            let skills;
            do{
                skills = prompt(prompts[7])
            }while(!skills.trim())
            liskills.textContent = "Skills: "+skills;
            liskills.style.display = "block";
            currentStep = promptStage+1;
            progressbar();
            promptStage = 8
            question();
            questionno();
        }else if(promptStage === 8){
            let type;
            do{
                type = prompt(prompts[8]);
            }while(!type.trim());
            litype.textContent = "Assignment Type: "+type;
            litype.style.display = "block";
            currentStep = promptStage+1;
            progressbar();
            promptStage = 9
            titleprompt++;
            updatePrompt();
            question();
            questionno();
            volunteer.style.display = "none";
            heading2.style.display = "none";
            heading3.style.display = "block";
        }else if (promptStage === 9){
            let studyarea;
            do{
                studyarea = prompt(prompts[9]);
            }while(!studyarea.trim());
            listudyarea.textContent = "Area of Study: "+studyarea;
            listudyarea.style.display = "block";
            qualifications.style.display = "block";
            currentStep = promptStage+1;
            progressbar();
            promptStage = 10
            question();
            questionno();
        }else if(promptStage === 10){
            let institute;
            do{
                institute = prompt(prompts[10]);
            }while(!institute.trim());
            liinstitute.textContent = "Institute: "+institute;
            liinstitute.style.display = "block";
            currentStep = promptStage+1;
            progressbar();
            promptStage = 11
            titleprompt++;
            updatePrompt();
            question();
            questionno();
            qualifications.style.display = "none";
            heading3.style.display = "none";
            heading4.style.display = "block";
        }else if(promptStage === 11){
            let phoneno;
            do{
                phoneno = prompt(prompts[11]);
            }while(!phoneno.trim());
            liphone.textContent = "Phone No: "+phoneno;
            contact.style.display = "block";
            liphone.style.display = "block";
            currentStep = promptStage+1;
            progressbar();
            promptStage = 12
            question();
            questionno();
        }else if(promptStage === 12){
            let email;
            do{
                email = prompt(prompts[12])
            }while(!email.trim());
            liemail.textContent = "Email: "+email;
            liemail.style.display = "block";
            heading1.style.display = "block";
            personal.style.display = "block";
            literms.style.display = "block";
            heading2.style.display = "block";
            volunteer.style.display = "block";
            heading3.style.display = "block";
            qualifications.style.display = "block";
            currentStep = promptStage+1;
            progressbar();
        }
    }
    
    // Function to handle "Skip" button click
    function handleSkip() {
        if (promptStage === 0) {
            promptStage = 1;
            detailcon.style.display = "block";
            liname.style.display = "block";
            question();
            questionno()
        } else if (promptStage === 1) {
            promptStage = 2;
            lisurname.style.display = "block";
            question();
            questionno()
        } else if (promptStage === 2) {
            promptStage = 3;
            liage.style.display = "block";
            question();
            questionno()
        } else if (promptStage === 3) {
            ligender.style.display = "block";
            promptStage = 4;
            question();
            questionno()
            titleprompt++; 
            updatePrompt();
        } else if (promptStage === 4) {
            alert("Skipping not available"); 
            skipButton.disabled = ture;
            promptStage = 5;
            question();
            questionno()
            titleprompt++; 
            updatePrompt();
        }else if (promptStage === 5){
            detailcon.style.display = "block";
            personal.style.display = "none";
            heading2.style.display = "block";    
            volunteer.style.display = "block";
            lirational.style.display = "block";
            promptStage = 6
            question();
            questionno()
        }else if (promptStage === 6){
            promptStage = 7;
            liintrest.style.display = "block";
            question();
            questionno()

        }else if (promptStage === 7){
            promptStage = 8;
            liskills.style.display = "block";
            question();
            questionno()
        }else if (promptStage === 8){
            promptStage = 9;
            litype.style.display = "block";
            volunteer.style.display = "none";
            heading2.style.display = "none"; 
            heading3.style.display = "block";  
            titleprompt++;
            updatePrompt();
            question();
            questionno()
        }else if (promptStage === 9){
            listudyarea.style.display = "block";
            promptStage = 10; 
            question();
            questionno()
        }else if (promptStage === 10){
            promptStage = 11;
            liinstitute.style.display = "block";
            qualifications.style.display = "none";
            heading3.style.display = "none";  
            heading4.style.display = "block"; 
            titleprompt++;
            updatePrompt();
            question();
            questionno()
        }else if (promptStage === 11){
            contact.style.display = "block";
            liphone.style.display = "block";
            promptStage = 12
            question();
            questionno()
        }else if (promptStage === 12){
            liemail.style.display = "block";
            heading1.style.display = "block";
            personal.style.display = "block";
            literms.style.display = "block";
            heading2.style.display = "block";
            volunteer.style.display = "block";
            heading3.style.display = "block";
            qualifications.style.display = "block";
        }
    }

    // Creating "Next" button dynamically
    const nextButton = document.createElement("button");
    nextButton.textContent = "Next";
    nextButton.className = "button";
    nextButton.id = "next";
    container.appendChild(nextButton);


    // Creating "Skip" button dynamically
    const skipButton = document.createElement("button");
    skipButton.textContent = "Skip";
    skipButton.className = "button";
    skipButton.id = "skip";
    container.appendChild(skipButton);


    // Event listeners for "Next" and "Skip" buttons
    nextButton.addEventListener("click", handleNextClick);
    skipButton.addEventListener("click", handleSkip);

    // Function to update question number
    function questionno(){
        questionnum.textContent = questions[promptStage];
    }

    // Function to update question prompt
    function question(){
        q.textContent = prompts[promptStage];
    }

    // Function to update heading prompt
    function updatePrompt() {
        headings.textContent = promptheading[titleprompt];
    }

    // Function to update progress bar
    function progressbar() {
        const percent = (currentStep / totalSteps) * 100;
        loadingBar.style.width = percent + '%';
        loadingText.textContent = 'Profile completed '+percent.toFixed(0) + '%';
    }
});