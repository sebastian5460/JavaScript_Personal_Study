

function findPerson(person){
    
    return salarios.find(element => element.name == person);
    
}

// function findEnterprise(enterprise){

//     const salaries = salarios.map(element => element.trabajos.filter(val => val.empresa == enterprise));  
    
//     // console.log(salaries);

//     const flatArr = salaries.flat();

//     console.log(flatArr);

//     const Salaries_list = []

//     for(let i = 0; i < flatArr.length; i++){

//         // current element
//         const element = flatArr[i].year;

//         // Salaries_list[element].push(flatArr[element].salario);

//         // if the current element exists, increment in 1 the value of it's respectevely key
//         if(Salaries_list[element]){
//             Salaries_list[element] += 1;
//             // Salaries_list[element].push(flatArr[element].salario);
//         }else Salaries_list[element] = 1;
//         // } else {
//         //     Salaries_list[element.year] : Salaries_list[element].year.push(flatArr[element].salario);
//         // }
        
        
//     }

//     console.log(Salaries_list);

//     const obj = {}
//     obj.enterpriseD = {}

//     for(let i = 0; i < flatArr.length; i++){
//         const newObj = 0;

//         obj.enterpriseD.year = flatArr[i].year;
//         obj.enterpriseD.salary = flatArr[i].salario;
        
//     }

//     // const obj = {flatArr};

//     // console.log(obj);

//     return salarios.find(element => element.trabajos.empresa == enterprise);
    
// }


function Median_salaries_by_pearson(person){

    // select a person from the data base (array)
    const jobs = findPerson(person).trabajos;
    console.log(jobs);
    const salaries = jobs.map(element => element.salario);

    // using map to select some key-value from the object
    // const salaries = jobs.map(element => {

    //     const obj = {empresa: element.empresa, salario: element.salario}
        
    //     return obj;
        
    // });
    console.log(salaries);

    const Median_salaries = Stats_func.calcualteMedian(salaries);

    return Median_salaries;
    
}

function projectionSalary(person){

    // select a person from the data base (array)
    const jobs = findPerson(person).trabajos;

    // filter the salary of the selected person
    const salaries = jobs.map(element => element.salario);


    // current salary difference minus last year
    const dif_per_year = [];

    for(let i = 1; i < salaries.length; i++){
        const difference = salaries[i] - salaries[i-1];

        dif_per_year.push(difference);
        
    }

    // average of the salary evolution through time
    const av = Stats_func.average(dif_per_year);

    // projected salary
    const projectedSalary = (salaries[salaries.length - 1] + av);

    // tests
    console.log(dif_per_year);
    console.log(av)

    console.log(`Projected salary: ${projectedSalary}`);

    return projectedSalary;
    
}


function Enterprises_salary_history(){
    
    let enterprises = {}

    // const ent
    // salario.find(element => element.)

    
    for(let person of salarios){




        for(job of person.trabajos){

            if(!enterprises[job.empresa]){
                enterprises[job.empresa] = {}  
            }

            if(!enterprises[job.empresa][job.year]){
                enterprises[job.empresa][job.year] = [];
            }

            enterprises[job.empresa][job.year].push(job.salario);
            
        }
        
        
    }
    
    
    
    return enterprises;


    // console.log(enterprises);


}


function Salary_median_enterprise(enterprise, year){

    /* This function returns the median of salary by enterprise in determinated year */


    // list of the all the enterprises with the salaries given per year    
    const enterpriseSalaries = Enterprises_salary_history();


    // verifies if the entered enterprise exist in the supplied database    
    if(!enterpriseSalaries[enterprise]){

        return console.log('The entered enterprise is not found in the current data base');

    }else if(!enterpriseSalaries[enterprise][year]){ /* entered year exists on data base for the current enterprise? */

        return console.log('entered year is not found in the current data base.')
        
    }else {

        // history of the selected enterprise
        // const verify = enterpriseSalaries[enterprise];
        

        // array of salaries given during the selected year
        const values = enterpriseSalaries[enterprise][year];
    
        // calculate de median of the "values" array
        const medianEnter = Stats_func.calcualteMedian(values);

        
        return medianEnter;

    }
    

    
}


function Projection_salary_enterprise(enterprise){

    const enter = Enterprises_salary_history();

    const years = [];

    const salaryEvolution = [];

    console.log(enter[enterprise])

    for( let numbers in enter[enterprise]){

        years.push(Number(numbers));
        
    }

    console.log(years);
    
    for(let i = 0; i < years.length; i++){

        const medians = Salary_median_enterprise(enterprise, years[i])

        salaryEvolution.push(medians);
        
    }

    console.log(salaryEvolution);

    const dif_per_year = [];

    for(let i = 1; i < salaryEvolution.length; i++){
        const difference = salaryEvolution[i] - salaryEvolution[i-1];

        dif_per_year.push(difference);
        
    }

    // average of the salary evolution through time
    const av = Stats_func.average(dif_per_year);
    // const med = Stats_func.calcualteMedian(dif_per_year);

    // projected salary
    const projectedSalary = (salaryEvolution[salaryEvolution.length - 1] + av).toFixed(2);
    // const projMed = (salaryEvolution[salaryEvolution.length - 1] + med).toFixed(2);

    // tests
    console.log(dif_per_year);
    console.log(av)


    console.log(`Projected salary: ${projectedSalary}`);
    // console.log(`median: ${projMed}`);
    
    // return projectedSalary;

    
}

function Top_ten_salaries(){

    const salaries = [];
    const topTen = [];
    // salarios [{},{},{}] => {name, trabajos[ {},{},{}]}

    // Trying to get top ten with its respectively name
/*     for(let person of salarios){

        if(!salaries[person.name]){

            salaries[person.name] = []
            
        }

        for(job of person.trabajos){

            salaries[person.name].push(job.salario);
        }
              
    } */

    for(let person of salarios){

        for(job of person.trabajos){

            salaries.push(job.salario);
        }
              
    }

    
    console.log(salaries);

    
    salaries.sort((a,b) => a - b);

    for(let i = (salaries.length - 1); i > (salaries.length - 11) ;i--){

        topTen.push(salaries[i]);
        
    }
    
    console.log(salaries);
    console.log(topTen);

    
    
}