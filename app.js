const profile = require('./messages');
 

// Displays the created profile
const profileDisplay = (name, city, age, food, sport) => {
    name = profile.randomName();
    city = profile.randomCity();
    age = profile.age;
    food = profile.randomFood();
    sport = profile.randomSport();

    console.log('---------Profile Info------------');
    console.log(`Name: ${name}`);
    console.log(`City: ${city}`);
    console.log(`Age: ${age}`);
    console.log('\n');
    console.log('---------About me----------------');
    console.log(`Hey, my name is ${name} I am ${age} years old and I am from ${city}. My favorite sport is ${sport} and I love to eat ${food}.`);
};


profileDisplay();
