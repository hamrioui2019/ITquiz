// basically i took thoses information for the quiz from :
// https://www.indiabix.com/general-knowledge/technology/014002

let quizData= [
    {
        question:"Let's begin with something really simple : resulat of : 1+1?",
        a:"0",
        b:"1",
        c:"2",
        d:"10",
        correct:"Option D"
    },
    {
        question:"What is part of a database that holds only one type of information?",
        a:"Report",
        b:"Field",
        c:"Record",
        d:"File",
        correct:"Option B"

    },
    {
        question:"'OS' computer abbreviation usually means ?",
        a:"Order of Significance",
        b:"Open Software",
        c:"Operating System",
        d:"Optical Sensor",
        correct:"Option C"

    },
    {
        question:"'.MOV' extension refers usually to what kind of file?",
        a:"Image file",
        b:"Animation/movie file",
        c:"Audio file",
        d:"MS Office document",
        correct:"Option B"
    },
    {
        question:"Most modern TV's draw power even if turned off. The circuit the power is used in does what function?",
        a:"Sound",
        b:"Remote control",
        c:"Color balance",
        d:"High voltage",
        correct:"Option B: "
    },
    {
        question:"'.MPG' extension refers usually to what kind of file?",
        a:"WordPerfect Document file",
        b:"MS Office document",
        c:"Animation/movie file",
        d:"Image file",
        correct:"Option C"
    },
    {
        question:"Which company created the most used networking software in the 1980's",
        a:"Microsoft",
        b:"Sun",
        c:"IBM",
        d:"Novell",
        correct:"Option D: Novell (based in Provo, UT) created NetWare which is still one of the most used PC networking systems in the world"
    },
    {
        question:"Which of the following operating systems is produced by IBM?",
        a:"OS-2",
        b:"Windows",
        c:"DOS",
        d:"UNIX",
        correct:"Option A: IBM also created it's own version of DOS called PC-DOS.nn"
    },
    {
        question:"What is a GPU?",
        a:"Grouped Processing Unit",
        b:"Graphics Processing Unit",
        c:"Graphical Performance Utility",
        d:"Graphical Portable Unit",
        correct:"Option B"
    },
    {
        question:"What is TTL?",
        a:"Technical Talk Language",
        b:"Transparent Transfer Layer",
        c:"Time To Live",
        d:"True Technology Lives",
        correct:"Option C: Time To Live specifies how many more hops a packet can travel before being dropped."
    }  
];

// we are going to target our questions on our form 
let quiz = document.getElementById("quiz");
const questionEl = document.getElementById("question");
const answerEls = document.querySelectorAll(".answer");
let a=document.getElementById('a_text');
let b=document.getElementById('b_text');
let c=document.getElementById('c_text');
let d=document.getElementById('d_text');

let btn = document.getElementById("submit");
let currentQuestion = 0;
let score = 0;

loadQuiz();

function loadQuiz(){
    deselectAnswers();

    const currentQuestionData=quizData[currentQuestion];
    console.log(document.getElementById("question"));

    questionEl.innerHTML=currentQuestionData.question;
    a.innerText = currentQuestionData.a;
    b.innerText = currentQuestionData.b;
    c.innerText = currentQuestionData.c;
    d.innerText = currentQuestionData.d;
}

function getSelected(){
    let answer= undefined;
    answerEls.forEach((answerEl)=>{
        if(answerEl.checked){
            answer=answerEl.id;
        }
    });

    return answer;
}

function deselectAnswers(){
    answerEls.forEach((answerEl)=>{
        answerEl.checked = false;
    });
}

btn.addEventListener('click',()=>{
    const answerl = getSelected();
    if(answerl){
        // if (answerl === quizData[currentQuestion].correct) {
        //     score++;
        // }
        currentQuestion++;
        if(currentQuestion<quizData.length){
            loadQuiz();
        }else{
            alert("Well done")
            location.reload();         
        }
    }

});
