# Weather Guesser

## Setup Instructions

1. **Install MongoDB with Docker**

    To run MongoDB, use Docker Compose. This will start MongoDB in the background:  

   ```bash
   docker compose up -d
   ```

2. **Install dependencies**

    Make sure to install the necessary dependencies before running the app:
    
   ```bash
   npm install
   ```

3. **Create .env file**

   Create .env file by copying .env.example file and replace "YOUR_API_KEY" by your Open Weather Map Api key (https://openweathermap.org/) :
    
   ```bash
   WEATHER_FORECAST_SERVICE_API_KEY=YOUR_API_KEY
   ```

4. **Compile the project**

   ```bash
   npm run build
   ```

5. **Run the app and start the game**

   ```bash
   npm run start
   ```

6. **Play**

    Follow the prompts in the terminal to play the game:

    You'll first be asked to select a difficulty level.
    Then, you'll need to guess the temperature of a randomly selected city.
    After each guess, you'll receive feedback ("C'est plus !" if your guess is too low, "C'est moins !" if it's too high).
    Once you guess the correct temperature, you'll be asked for your pseudonym, and your score will be saved to MongoDB.