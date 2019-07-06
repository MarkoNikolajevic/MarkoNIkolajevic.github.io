import billWebp from '../../img/billlee.webp'
import billPng from '../../img/billlee.png'
import camlabWebp from '../../img/camlab.webp'
import camlabPng from '../../img/camlab.png'
import memoryWebp from '../../img/memory-game.webp'
import memoryPng from '../../img/memory-game.png'
import pamelaGottiWebp from '../../img/pamelagotti.webp'
import pamelaGottiPng from '../../img/pamelagotti.png'


const projectsDB = [
  {
    id: 'pamelaGotti',
    webPImage: pamelaGottiWebp,
    image: pamelaGottiPng,
    title: 'Pamela Gotti',
    description: 'Sito personale della psicologa, ipnologa e consulente sessuale Pamela Gotti',
    link: 'https://pamelagotti.netlify.com/'
  },
  {
    id: 'billLee',
    webPImage: billWebp,
    image: billPng,
    title: 'Bill Lee',
    description: 'Sito personale del grande artista e musicista Bill Lee Curtis.',
    link: 'https://www.billleecurtis.com/'
  },
  {
    id: 'camlab',
    webPImage: camlabWebp,
    image: camlabPng,
    title: 'CamLab Trieste',
    description: 'Gruppo professionale di wellness e cura della persona situato a Trieste.',
    link: 'https://www.camlabtrieste.com/'
  },
  {
    id: 'memoryGame',
    webPImage: memoryWebp,
    image: memoryPng,
    title: 'Memory Game',
    description: 'Browser game creato per il programma Front End NanoDegree su Udacity.',
    link: 'https://www.markonikolajevic.com/memory-game/'
  }
]

export default projectsDB
