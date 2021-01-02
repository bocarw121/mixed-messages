const profile = {
  
    names: ['Ali', 'Bryan', 'Jennifer', 'Mahmoud', 'Hanna', 'Adam', 'Lisa', 'David', 'Charles', 'Anika', 'Edward', 'Tony', 'Nick', 'Lamar', 'Kelly', 'Michelle', 'Alex', 'Kassandra', 'Abu', 'Lenna'],

  
    cities: ['Montreal', 'Toronto', 'London', 'Barrie', 'Winnepeg', 'Saskatoon', 'Calgary', 'Edmonton', 'Vancouver', 'New York', 'Newark', 'Philadelphia', 'Boston', 'Baltimore', 'Raleigh', 'Atlanta', 'Dallas', 'Oklahoma City', 'Phoenix', 'San Diego'],

    age: Math.floor(Math.random() * 24) + 17, // Generates a number between 18 and 40

 
    favoriteSports: ['Basketball', 'Football', 'Baseball', 'Soccer', 'Hockey', 'Rugby', 'Tennis', 'Cricket', 'UFC', 'Boxing', 'Athletics', 'Volleyball', 'Wrestling', 'Skiing', 'Snowboarding', 'Skating', 'Skateboarding', 'Golf', 'Formula One', 'Squash'],


    favoriteFoods: ['Steak', 'Lasagna', 'Pizza',  "Fish 'n' Chips", 'Jerk Chicken', 'Burger', 'Chicken Stir Fry', 'Seafood Paella', 'Poutine', 'Tacos', 'Chicken Parm', 'Pho', 'Fajitas', 'Shish Kebab', 'Lobster', 'Piri-piri Chicken', 'Sushi', 'Peeking Duck', 'Domoda', 'Shawarma'],

    // Returns a random name
    randomName() {
        let names = this.names;
        let name = [];
        let rand = Math.floor(Math.random() * names.length)
        for (let i = 0; i < names.length; i++) {
            name.push(names[i]);
        }

        return name[rand];
    },

    // Returns a random city
    randomCity() {
        let cities = this.cities;
        let city = [];
        let rand = Math.floor(Math.random() * cities.length);

        for (let i = 0; i < cities.length; i++) {
            city.push(cities[i]);
        }

        return city[rand];
    },
    
    // Returns a random Sport
    randomSport() {
        let sports = this.favoriteSports;
        let sport = [];
        let rand = Math.floor(Math.random() * sports.length);

        for (let i = 0; i < sports.length; i++) {
            sport.push(sports[i]);
        }

        return sport[rand];
    },

    // Yes, you guessed it! It returns a random food.
    randomFood() {
        let foods = this.favoriteFoods;
        let food = [];
        let rand = Math.floor(Math.random() * foods.length)
        for (let i = 0; i < foods.length; i++) {
            food.push(foods[i]);
        }
       
        return food[rand];
    }
};



module.exports = profile;


