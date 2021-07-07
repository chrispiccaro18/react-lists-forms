import React from 'react';
import Header from './Header';
import PhotoAlbum from './PhotoAlbum';
import Footer from './Footer';
import '../main.css';

const title = 'Lauren';
const photos = ['https://scontent-sea1-1.xx.fbcdn.net/v/t1.0-9/41511965_2123210371023578_939323641286361088_n.jpg?_nc_cat=104&_nc_ht=scontent-sea1-1.xx&oh=26ec6d089a211fff9ffee2d23be158ac&oe=5D64D107', 'https://scontent-sea1-1.xx.fbcdn.net/v/t1.0-9/47391737_4057930521648_211289322693853184_n.jpg?_nc_cat=104&_nc_ht=scontent-sea1-1.xx&oh=c0da68963f6868fed6ccc7ae6eb524f9&oe=5D67BAF6', 'https://scontent-sea1-1.xx.fbcdn.net/v/t1.0-9/47680897_4057935321768_6458322514606030848_n.jpg?_nc_cat=104&_nc_ht=scontent-sea1-1.xx&oh=0cbca6f479f0bf2e222b557ab227c16e&oe=5D623855', 'https://scontent-sea1-1.xx.fbcdn.net/v/t1.0-9/29356974_10154612005137395_4716436826213056512_n.jpg?_nc_cat=103&_nc_ht=scontent-sea1-1.xx&oh=2333aeb9ee4a3cd52b2d5cc7b43a91b0&oe=5D5F12C2', 'https://scontent-sea1-1.xx.fbcdn.net/v/t1.0-9/23561815_1459185304202649_3888711869867041119_n.jpg?_nc_cat=103&_nc_ht=scontent-sea1-1.xx&oh=3ded6d1d1f8befc34c168b42b1afa38d&oe=5D670E2E', 'https://scontent-sea1-1.xx.fbcdn.net/v/t1.0-9/23471925_1740191835992102_325900779737572029_n.jpg?_nc_cat=105&_nc_ht=scontent-sea1-1.xx&oh=1efd703db8dd1040e84cfc91ead2eba8&oe=5D6F59BE', 'https://scontent-sea1-1.xx.fbcdn.net/v/t1.0-9/19748897_3657774838006_7626025140522912863_n.jpg?_nc_cat=106&_nc_ht=scontent-sea1-1.xx&oh=b0f76b751ef969fd1ae80c92ac129e92&oe=5D9F1FF8', 'https://scontent-sea1-1.xx.fbcdn.net/v/t1.0-9/18950947_10154951683353172_8162040949684199714_n.jpg?_nc_cat=103&_nc_ht=scontent-sea1-1.xx&oh=489b2217d3223634d6833233ad140429&oe=5D643153', 'https://scontent-sea1-1.xx.fbcdn.net/v/t1.0-9/18119444_10154828364258172_2775372807809558365_n.jpg?_nc_cat=104&_nc_ht=scontent-sea1-1.xx&oh=b35f0f281d30f791a92f8533223cf585&oe=5D74AF8A'];

export default function App() {
  return (
    <>
      <Header title={title} />
      <PhotoAlbum title={title} photos={photos} />
      <Footer title={title} />
    </>
  );
}
