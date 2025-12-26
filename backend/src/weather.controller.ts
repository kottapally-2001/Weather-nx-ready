import { Controller, Get, Query } from '@nestjs/common';
import axios from 'axios';

const API_KEY = 'de9006a5c10b6461bf3f797af3e03d67';

@Controller('weather')
export class WeatherController {
  @Get()
  async getWeather(@Query('city') city: string) {
    const res = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
    );

    return {
      name: res.data.name,
      temp: res.data.main.temp,
      desc: res.data.weather[0].description,
    };
  }
}
