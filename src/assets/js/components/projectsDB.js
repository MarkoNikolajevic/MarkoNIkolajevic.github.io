import billWebp from '../../img/bill-lee.webp';
import billImg from '../../img/bill-lee.png';
import camlabWebp from '../../img/camlab.webp';
import camlabImg from '../../img/camlab.png';
import memoryWebp from '../../img/memory.webp';
import memoryImg from '../../img/memory.png';
import pamelaGottiImg from '../../img/pamela-gotti.png';
import pamelaGottiWebp from '../../img/pamela-gotti.webp';
import myTeamImg from '../../img/my-team.png';
import myTeamWebp from '../../img/my-team.webp';
import rockPaperImg from '../../img/rockPaper.png';
import rockPaperWebp from '../../img/rockPaper.webp';

const projectDB = [
  {
    id: 'rockPaper',
    webpImg: rockPaperWebp,
    img: rockPaperImg,
    title: 'Rock Paper Scissors Lizard Spock',
    desc:
      'Gioco stile carta, sasso, forbice creato come challenge su FrontEndMentor',
    viewCase: '#',
    linkSite: 'https://rock-paper-scissors-lizard-spock.mrknikolajevic.now.sh/',
  },
  {
    id: 'myTeam',
    webpImg: myTeamWebp,
    img: myTeamImg,
    title: 'My Team',
    desc:
      'Sito creato seguendo le linee guida della challenge su FrontEndMentor',
    viewCase: '#',
    linkSite: 'https://my-team.mrknikolajevic.now.sh/',
  },
  {
    id: 'pamelaGotti',
    webpImg: pamelaGottiWebp,
    img: pamelaGottiImg,
    title: 'Pamela Gotti',
    desc:
      'Sito personale della psicologa, ipnologa e consulente sessuale, Pamela Gotti',
    viewCase: '#',
    linkSite: 'http://www.pamelagotti.com/',
  },
  {
    id: 'billLee',
    webpImg: billWebp,
    img: billImg,
    title: 'Bill Lee',
    desc: 'Sito personale del grande artista e musicista Bill Lee Curtis',
    viewCase: '#',
    linkSite: 'https://www.billleecurtis.com/',
  },
  {
    id: 'camlab',
    webpImg: camlabWebp,
    img: camlabImg,
    title: 'CamLab Trieste',
    desc:
      'Gruppo professionale di wellness e cura della persona situato a Trieste',
    viewCase: '#',
    linkSite: 'https://www.camlabtrieste.com/',
  },
  {
    id: 'memory',
    webpImg: memoryWebp,
    img: memoryImg,
    title: 'Memory Game',
    desc:
      'Browser game creato per il programma Front End NanoDegree su Udacity',
    viewCase: '#',
    linkSite: 'https://www.markonikolajevic.com/memory-game/',
  },
];

export default projectDB;
