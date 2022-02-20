import React from "react";
import Story from "../story/Story";
import "./StoryReel.css";
const StoryReel = () => {
  return (
    <div className="storyReel">
      <Story
        image="https://upload.wikimedia.org/wikipedia/commons/8/8c/Cristiano_Ronaldo_2018.jpg"
        profileSrc="https://indianewengland.com/wp-content/uploads/2018/06/Cristiano-Ronaldo-FIFA.png"
        title="Ronaldo"
      />
      <Story
        image="https://nationaldailyng.com/wp-content/uploads/2021/06/Messi.jpg"
        profileSrc="https://upload.wikimedia.org/wikipedia/commons/c/c1/Lionel_Messi_20180626.jpg"
        title="Messi"
      />
      <Story
        image="https://thumbor.forbes.com/thumbor/fit-in/416x416/filters%3Aformat%28jpg%29/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F5ece8a5c938ec500060aae37%2F0x0.jpg%3Fbackground%3D000000%26cropX1%3D503%26cropX2%3D2965%26cropY1%3D156%26cropY2%3D2616"
        profileSrc="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/Rafael_Nadal_10%2C_Aegon_Championships%2C_London%2C_UK_-_Diliff_%28cropped%29.jpg/1200px-Rafael_Nadal_10%2C_Aegon_Championships%2C_London%2C_UK_-_Diliff_%28cropped%29.jpg"
        title="Rafel Nadal"
      />
      <Story
        image="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/2018-05-12-_Cannes-L%27acteur_Michael_B._Jordan-2721_%2842075892224%29.jpg/1200px-2018-05-12-_Cannes-L%27acteur_Michael_B._Jordan-2721_%2842075892224%29.jpg"
        profileSrc="https://www.pinkvilla.com/imageresize/michael_b_jordan_1.jpg?width=752&format=webp&t=pvorg"
        title="Michael b Jordan"
      />
      <Story
        image="https://images.indianexpress.com/2020/04/tendulkar-1200.jpg"
        profileSrc="https://i.guim.co.uk/img/media/e48964955c4ae13e460e56a0a550097208637bbd/0_286_4365_2619/master/4365.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=782322cd3e077855b0a5cf874a79afdb"
        title="Sachin Tendulkar"
      />
    </div>
  );
};

export default StoryReel;
