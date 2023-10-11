import React from "react";
import { facebook, github, instagram, linkedin, luksuz, mail, twitter } from '../assets'
import { motion } from "framer-motion";

const Navbar = () => {
    return(
    <motion.div
    initial={{ opacity: 0, y: -50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 1 }}
    >
    <nav className="flex items-center font-bold justify-center py-2 sm:justify-between bg-cyan-950">
        <div className="flex items-center text-center text-5xl">
            <img src={luksuz} className="sm:ml-16 w-32 object-contain"/>
            <h1>Luka <br/> Minđek</h1>
        </div>
        <div className="flex gap-2 justify-items-end mr-16 hidden sm:flex">
            <a href="https://www.instagram.com/mindekluka/?igshid=MzNlNGNkZWQ4Mg%3D%3D"> <img className="hover:opacity-50 w-7" src={instagram}/> </a> 
            <a href="https://www.facebook.com/people/Luka-Min%C4%91ek/pfbid035HTQrpMDzCkaoPKRcC9aHV1HEZnpcXd3g29a7C1RC86ka7oYuXcoyEA883iyB81Cl/"> <img className="hover:opacity-50 w-7" src={facebook}/> </a> 
            <a href="https://www.linkedin.com/authwall?trk=gf&trkInfo=AQGTQvg4HzsL7wAAAYqzELBQni3OHIlhP2B9Ig4qcxJIteWZmWN4Rn4nfw47_dWpTSvZ3RacIDUJEDChVjXUX9x12Rwy47p6hdGeWd-ng8ajzpTwQxRdkwleCcnjnkTjp0_Kvhg=&original_referer=https://lukamindek.com/&sessionRedirect=https%3A%2F%2Fwww.linkedin.com%2Fin%2Fluka-min%25C4%2591ek-a46012262%2F"> <img className="hover:opacity-50 w-7" src={linkedin}/> </a> 
            <a href="https://twitter.com/LuksuzWL"> <img className="hover:opacity-50 w-7" src={twitter}/> </a> 
            <a href="https://github.com/Luksuz"> <img className="hover:opacity-50 w-7" src={github}/> </a> 
            <a href="mailto:lukamindjek@gmail.com"> <img className="hover:opacity-50 w-7" src={mail}/> </a> 
        </div>
    </nav>
    </motion.div>
    )
}

export default Navbar