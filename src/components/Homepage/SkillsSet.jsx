

import html from "../../assets/html.png"
import css from "../../assets/css.svg"
import bootstrap from "../../assets/bootstrap.png"
import tailwind from "../../assets/tailwind.png"
import js from "../../assets/js.png"
import daisy from "../../assets/daisy.png"
import flowbite from "../../assets/flowbite.png"
import react from "../../assets/react.png"
import firebase from "../../assets/firebase.png"
import node from "../../assets/node.png"
import express from "../../assets/express.png"
import mongo from "../../assets/mongo.webp"
import keepreact from "../../assets/keepreact.svg"
import photoshop from "../../assets/photoshop.png"
import illustrator from "../../assets/illustrator.png"
import premierpro from "../../assets/premierpro.webp"
import aftereffects from "../../assets/aftereffects.png"
import figma from "../../assets/figma.png"
import canva from "../../assets/canva.webp"
import blender from "../../assets/blender.png"

const SkillsSet = () => {
    return (
        <div className="pt-[10px]">
            
                <div>
                    
                        <p className="font-bold text-transparent text-[26px] text-center lg:text-[40px] bg-clip-text bg-gradient-to-r from-[#6A3DC5] to-[#331D5F]">My Skills</p>
                    
                </div>
                <div data-aos="fade-in">
                    <div className="flex justify-center mt-10 gap-5 items-center">
                        <img src={html} className="w-[30px] md:w-[50px] lg:w-[80px] animate-bounce" alt="" />
                        <img src={css} className="w-[30px] md:w-[50px] lg:w-[80px] animate-bounce" alt="" />
                        <img src={bootstrap} className="w-[30px] md:w-[50px] lg:w-[80px] animate-bounce" alt="" />
                        <img src={tailwind} className="w-[30px] md:w-[50px] lg:w-[80px] animate-bounce" alt="" />
                        <img src={daisy} className="w-[30px] md:w-[50px] lg:w-[80px] animate-bounce" alt="" />
                        <img src={flowbite} className="w-[30px] md:w-[50px] lg:w-[80px] animate-bounce" alt="" />
                        <img src={keepreact} className="w-[30px] md:w-[50px] lg:w-[80px] animate-bounce" alt="" />

                    </div>
                    <div className="flex justify-center mt-10 gap-5 items-center">
                        <img src={react} className="w-[30px] md:w-[50px] lg:w-[80px] animate-bounce" alt="" />
                        <img src={js} className="w-[30px] md:w-[50px] lg:w-[80px] animate-bounce" alt="" />
                        <img src={node} className="w-[30px] md:w-[50px] lg:w-[80px] animate-bounce" alt="" />
                        <img src={express} className="w-[30px] md:w-[50px] lg:w-[80px] animate-bounce" alt="" />
                        <img src={mongo} className="w-[30px] md:w-[50px] lg:w-[80px] animate-bounce" alt="" />
                        <img src={firebase} className="w-[30px] md:w-[50px] lg:w-[80px] animate-bounce" alt="" />
                    </div>
                </div>
                <div>
                    <h1 className="text-2xl text-center text-[#331D5F] mt-10 font-semibold">Design tools:</h1>
                    <div className="flex justify-center mt-10 mb-10 gap-5 items-center">
                        <img data-aos="zoom-in-right" src={photoshop} className="w-[30px] md:w-[50px] lg:w-[80px]" alt="" />
                        <img data-aos="zoom-in-right" src={illustrator} className="w-[30px] md:w-[50px] lg:w-[80px]" alt="" />
                        <img data-aos="zoom-in-right" src={premierpro} className="w-[30px] md:w-[50px] lg:w-[80px]" alt="" />
                        <img data-aos="zoom-in-right" src={aftereffects} className="w-[30px] md:w-[50px] lg:w-[80px]" alt="" />
                        <img data-aos="zoom-in-right" src={figma} className="w-[20px] md:w-[30px] lg:w-[50px]" alt="" />
                        <img data-aos="zoom-in-right" src={canva} className="w-[30px] md:w-[50px] lg:w-[80px]" alt="" />
                        <img data-aos="zoom-in-right" src={blender} className="w-[30px] md:w-[50px] lg:w-[80px]" alt="" />
                    </div>
                </div>
            
        </div>
    );
};

export default SkillsSet;