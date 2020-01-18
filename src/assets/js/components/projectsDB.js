import billWebp from '../../img/bill-lee.webp';
import billImg from '../../img/bill-lee.png';
import camlabWebp from '../../img/camlab.webp';
import camlabImg from '../../img/camlab.png';
import memoryWebp from '../../img/memory.webp';
import memoryImg from '../../img/memory.png';
import pamelaGottiImg from '../../img/pamela-gotti.png';
import pamelaGottiWebp from '../../img/pamela-gotti.webp';

const projectDB = [
  {
    id: 'pamelaGotti',
    webpImg: pamelaGottiWebp,
    img: pamelaGottiImg,
    title: 'Pamela Gotti',
    desc:
      'Sito personale della psicologa, ipnologa e consulente sessuola, Pamela Gotti',
    viewCase: '#',
    linkSite: '#'
  },
  {
    id: 'billLee',
    webpImg: billWebp,
    img: billImg,
    title: 'Bill Lee',
    desc: 'Sito personale del grande artista e musicista Bill Lee Curtis',
    viewCase: '#',
    linkSite: 'https://www.billleecurtis.com/'
  },
  {
    id: 'camlab',
    webpImg: camlabWebp,
    img: camlabImg,
    title: 'CamLab Trieste',
    desc:
      'Gruppo professionale di wellness e cura della persona situato a Trieste',
    viewCase: '#',
    linkSite: 'https://www.camlabtrieste.com/'
  },
  {
    id: 'memory',
    webpImg: memoryWebp,
    img: memoryImg,
    title: 'Memory Game',
    desc:
      'Browser game creato per il programma Front End NanoDegree su Udacity',
    viewCase: '#',
    linkSite: 'https://www.markonikolajevic.com/memory-game/'
  }
];

export default projectDB;
