import express from "express";
import {PrismaClient} from '@prisma/client'
import cors from 'cors';

import {convertHoursToMinutes} from './utils/convert-hours-to-minutes'
import { convertMinutesToHours } from "./utils/convert-minutes-to-hours";

const app = express();
const prisma = new PrismaClient();
app.use(express.json())
app.use(cors({
  origin: 'http://localhost:5173'
}))

// when I enter www.myapp.com/ads it's gonna show the function, initially as 'console.log';
app.get('/games', async (request, response) => {
  const games = await prisma.game.findMany({
    include: {
      _count: {
        select: {
          ads: true,
        }
      }
    }
  })

  return response.json(games)
})

app.post('/games/:id/ads', async (request, response) => {
  const gameId = request.params.id;
  const body = request.body;

  const ad = await prisma.ad.create({
    data: {
      gameId,
      name: body.name,
      yearsPlaying: body.yearsPlaying,
      discord: body.discord,
      weekDays: body.weekDays.join(','),
      startTime: convertHoursToMinutes(body.startTime),
      endTime: convertHoursToMinutes(body.endTime),
      useVoiceChannel: body.useVoiceChannel
    }
  })

  return response.status(201).json(ad)
})

app.get("/games/:id/ads", async (request, response) => {
  const gameId = request.params.id;

  const ads = await prisma.ad.findMany({
    select: {
      id: true,
      name: true,
      weekDays: true,
      useVoiceChannel: true,
      yearsPlaying: true,
      startTime: true,
      endTime: true,
    },
    where: {
      gameId,
    },
    orderBy: {
      createdAt: 'desc'
    }
  })

  return response.json(ads.map(ad => {
    return {
      ...ad,
      weekDays: ad.weekDays.split(','),
      startTime: convertMinutesToHours(ad.startTime),
      endTime: convertMinutesToHours(ad.endTime),
    }
  }));
});

app.get('/ads/:id/discord', async (request, response) => {
  const adId = request.params.id;

  const ad = await prisma.ad.findUniqueOrThrow({
    select: {
      discord: true
    },
    where: {
      id: adId,
    }
  })

  return response.json({
    discord: ad.discord
  })
})

app.listen(16);
