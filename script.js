//Exercise 1: Your Favorite Food


    let FavoriteFood="Leaf Sauce and Rice";
    let FavoriteMeal="Dinner";
    console.log("I eat "+FavoriteFood+" at every "+FavoriteMeal);


/****************************************************
Correcteur: Yannick GOUGUIA

Il faut bien documenter et formater ton code.
code tres illisible, pas d'espace apres les =

****************************************************/
//Exercise 2 : Series

    //Part I
    const myWatchedSeries =["black mirror", "money heist", "the big bang theory"];
    myWatchedSeries[2]="and the big bang theory";
    let myWatchedSeriesLength=myWatchedSeries.length;
    myWatchedSeriesSentence=myWatchedSeries.join(', ');
    console.log("I watched "+myWatchedSeriesLength+" series : "+myWatchedSeriesSentence);

    //PART II
    myWatchedSeries[2]="fiends";
    myWatchedSeries.push("Uncle Drew");
    myWatchedSeries.unshift("SWAT");
    let MirrorIndex=myWatchedSeries.indexOf("black mirror");
    myWatchedSeries.splice(MirrorIndex,1);
    let moneyHeistIndex=myWatchedSeries.indexOf("money heist");
    let lastIndex=myWatchedSeries.length;
    console.log(myWatchedSeries[moneyHeistIndex][2]);
    console.log(myWatchedSeries);



//Exercise 3 : The Temperature Converter
    let celsius=30;
    let fahrenheit=(celsius/2)*9+32;
    console.log(celsius+" °C is "+fahrenheit+" °F.");




//Exercise 4 : Guess The Answers #1

    let c;
    let a = 34;
    let b = 21;

    //1 What will be the outcome of a + b in the first expression ?
    console.log(a+b) //first expression
    // Prediction:It will output 55, because 34 and 21 are numbers
    // Actual:55

    a = 2;

    //2 What will be the outcome of a + b in the second expression ?
    console.log(a+b) //second expression
    // Prediction: It will output 23, because the value of a have changed and b still the same. They  are numbers
    // Actual:23


    //3 What is the value of c?
    console.log(c);
    // Prediction: It will output Null
    // Actual:undefined


    //4 Analyse the code below, what will be the outcome?
    console.log(3 + 4 + '5');
    /* Prediction: It will output '75', because firstly the sum is done after that
    the String have a great level and consider all input to string*/
    // Actual:'75'












//Exercise 5 : Guess The Answers #2
    //1 What is the output of each of the expressions below?


    typeof(15)
    // Prediction:number
    // Actual:number

    typeof(5.5)
    // Prediction:real
    // Actual:number

    typeof(NaN)
    // Prediction:Bult-in
    // Actual:number

    typeof("hello")
    // Prediction:string
    // Actual:string

    typeof(true)
    // Prediction:boolean
    // Actual:boolean

    typeof(1 != 2)
    // Prediction:true
    // Actual:boolean

    "hamburger" + "s"
    // Prediction:hamburgers
    // Actual:'hamburgers'

    "hamburgers" - "s"
    // Prediction:string
    // Actual:NaN

    "1" + "3"
    // Prediction:"13"
    // Actual:'13'

    "1" - "3"
    // Prediction:NaN
    // Actual:-2

    "johnny" + 5
    // Prediction:johnny5
    // Actual:johnny5

    "johnny" - 5
    // Prediction:NaN
    // Actual:NaN

    99 * "hello"
    // Prediction:NaN
    // Actual:NaN

    1 != 1
    // Prediction:boolean
    // Actual:false

    1 == "1"
    // Prediction:true  
    // Actual:true

    1 === "1"
    // Prediction:false
    // Actual:false





//Exercise 6 : Guess The Answers #3


    5 + "34"
    // Prediction:534
    // Actual:534

    5 - "4"
    // Prediction:1
    // Actual:1

    10 % 5
    // Prediction:0
    // Actual:0

    5 % 10
    // Prediction:10
    // Actual:5

    "Java" + "Script"
    // Prediction:JavaScript
    // Actual:JavaScript

    " " + " "
    // Prediction:  
    // Actual:'  '

    " " + 0
    // Prediction:' 0'
    // Actual:' 0'

    true + true
    // Prediction:true
    // Actual:2

    true + false
    // Prediction:false
    // Actual:1

    false + true
    // Prediction:1
    // Actual:1

    false - true
    // Prediction:NaN
    // Actual:-1

    !true
    // Prediction:false
    // Actual:false

    3 - 4
    // Prediction:-1
    // Actual:-1

    "Bob" - "bill"
    // Prediction:NaN   
    // Actual:NaN

