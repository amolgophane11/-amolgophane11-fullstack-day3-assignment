let obj=[
    {person:"Amol",age:"25",company:"Accenture"},
    {person:"Santosh",age:"23",company:"infosys"},
    {person:"Gaurav",age:"19",company:"capgemini"}
 ]
 

//normal for loop execution treied to print person names

 for(let i=0;i<obj.length;i++)
 {
   console.log(obj[i].person)
 }
 
//ouptput:
Amol
Santosh
Gaurav

//---------------------------
//for in loop tried to print person ages
for (element in obj)
{
 console.log(obj[element].age)
}

//output:
25
23
19
//--------------
//for of loop tried to print all data using literal

for (ele of obj) 
{
    console.log(`employee ${ele.person} is ${ele.age} year old and he is working for 
${ele.company}.`);

}

//output
employee Amol is 25 year old and he is working for 
Accenture.
employee Santosh is 23 year old and he is working for
infosys.
employee Gaurav is 19 year old and he is working for
capgemini.

//--------------------------------------
//for edach loop normal

obj.forEach(ele => {
    if(ele.company=='Accenture')
    {
        console.log();
    }
});

//output:
{ person: 'Amol', age: '25', company: 'Accenture' }

//------------------------------

//for each loop using object.keys() treid to print keys and corresponding person--
Object.keys(obj).forEach(key =>{
    console.log(key,obj[key].person);
})

//output:
0 Amol
1 Santosh
2 Gaurav

Question:2 create your resume


let myResume=
{
    basic:
    {
        name:"Amol Gophane",
        address: "Bhijewadi,Beed,Maharashtra,414202",
        contact: [7218805274,9765819078]
    },

    education:
    {
       graduation:"bachelor of engineeing",
       stream:"electronics and telecommunication",
       cgpa:6.99,
       class:" First class"
     },

     experince:
     {
        company:"Accenture",
        yearOfExperience:3,
        usedTechnology:["JAVA","SQL","UNIX","PLSQL"]
     },

     skill:[
        {
            skillSet:"JAVA",
            level:"intermediate",
            experincInYear:3
        },
        {
            skillSet:"SQL",
            level:"intermediate",
            experincInYear:3
        },
        {
            skillSet:"UNIX",
            level:"intermediate",
            experincInYear:3
        },
        {
            skillSet:"PLSQL",
            level:"intermediate",
            experincInYear:2
        },
        {
            skillSet:"PYTHON",
            level:"beginner",
            experincInYear:0
        },
        {
            skillSet:"JavaScript",
            level:"beginner",
            experincInYear:0
        }
    ],
    languages:
    [
        {
            language:"English",
            levelOfProfecinecy:"intermediate"
        },
        {
            language:"Hindi",
            levelOfProfecinecy:"Master"
        },
        {
            language:"Marathi",
            levelOfProfecinecy:"Master"
        }
     ] ,

    hobbies:
    [ "reading book","Playing cricket","learning new technologies"]
}

console.log(myResume);

output:
{
  basic: {
    name: 'Amol Gophane',
    address: 'Bhijewadi,Beed,Maharashtra,414202',
    contact: [ 7218805274, 9765819078 ]
  },
  education: {
    graduation: 'bachelor of engineeing',
    stream: 'electronics and telecommunication',
    cgpa: 6.99,
    class: ' First class'
  },
  experince: {
    company: 'Accenture',
    yearOfExperience: 3,
    usedTechnology: [ 'JAVA', 'SQL', 'UNIX', 'PLSQL' ]
  },
  skill: [
    { skillSet: 'JAVA', level: 'intermediate', experincInYear: 3 },
    { skillSet: 'SQL', level: 'intermediate', experincInYear: 3 },
    { skillSet: 'UNIX', level: 'intermediate', experincInYear: 3 },
    { skillSet: 'PLSQL', level: 'intermediate', experincInYear: 2 },
    { skillSet: 'PYTHON', level: 'beginner', experincInYear: 0 },
    { skillSet: 'JavaScript', level: 'beginner', experincInYear: 0 }
  ],
  languages: [
    { language: 'English', levelOfProfecinecy: 'intermediate' },
    { language: 'Hindi', levelOfProfecinecy: 'Master' },
    { language: 'Marathi', levelOfProfecinecy: 'Master' }
  ],
  hobbies: [ 'reading book', 'Playing cricket', 'learning new technologies' ]
}
