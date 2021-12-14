import './AboutMe.scss'

const AboutMe = (): JSX.Element => {
    return (
        <div className="AboutMe Tile">
            <div className="AboutMe-About">
                <div className='TileTitle'>About Me</div>
                <p>Hi, I am Michel Bongard, a full-stack software engineer from Rapperswil-Jona, Switzerland.</p>
                <p>I am currently working at the INS Institute for Networked Solutions at the OST – Eastern Switzerland University of Applied Sciences. Here, I am employed as a full-stack software engineer for network applications (mainly in the field of Segment Routing) and as an assistant to the professors.</p>
            </div>
            <div className="AboutMe-Bio">
                <div className='TileTitle'>Bio</div>
                <div className="AboutMe-Bio-Item">
                    <div className="AboutMe-Bio-Item-Name">Name</div>
                    <div className="AboutMe-Bio-Item-Value">Michel Bongard</div>
                </div>
                <div className="AboutMe-Bio-Item">
                    <div className="AboutMe-Bio-Item-Name">Age</div>
                    <div className="AboutMe-Bio-Item-Value">{getAgeByBirthday(new Date('1994-1-9'))}</div>
                </div>
                <div className="AboutMe-Bio-Item">
                    <div className="AboutMe-Bio-Item-Name">Academic Title</div>
                    <div className="AboutMe-Bio-Item-Value">Bachelor of Science FHO in Computer Science</div>
                </div>
                <div className="AboutMe-Bio-Item">
                    <div className="AboutMe-Bio-Item-Name">Languages</div>
                    <div className="AboutMe-Bio-Item-Value">German, English, Portuguese</div>
                </div>
                <div className="AboutMe-Bio-Item">
                    <div className="AboutMe-Bio-Item-Name">Email</div>
                    <div className="AboutMe-Bio-Item-Value">mail@michelbongard.ch</div>
                </div>
            </div>
        </div>
    )
}

const getAgeByBirthday = (birthday: Date) : number => {
    var diffInMilliseconds = Date.now() - birthday.getTime();
    var ageDate = new Date(diffInMilliseconds);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
}

export default AboutMe