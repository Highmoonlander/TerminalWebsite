const output = document.getElementById('output');
const input = document.getElementById('input');
const terminalContent = document.querySelector('.terminal-content');
const nav = document.querySelectorAll('.nav');
const Description = "Btech CS'26 student at VIT,Pune\nJust here to convert code to magic!\n<b>Event Management Secretory at ICON Club</b>\n\nCheck out by Socials\n<a href='https://github.com/Highmoonlander/Highmoonlander'>Github</a>\t<a href='https://www.linkedin.com/in/arya-rajvaidya-260039249/'>LinkedIn</a>"
const skills = `Programming Langs:\tJAVA\tC\tPython\tR\nFrontEnd:\tHTML\tCSS\tJavaScript\nBackEnd:\tSQL\tSpring/SpringBoot`;
function changeNavs(x){
    if(x === 1){
        nav[0].innerHTML = '&#x2715';
        nav[1].innerHTML = '&#8211;';
        nav[2].innerHTML = '&#x2B;';
    } else {
        nav[0].innerHTML = '';
        nav[1].innerHTML = '';
        nav[2].innerHTML = '';
    }
}

nav.forEach(nav => {
    nav.addEventListener('mouseover', () => {
        changeNavs(1);
    })
    nav.addEventListener('mouseout', () => {
        changeNavs(0);
    })
})

const commands = {
    about: () => {
        return `
            <div class='about' style="font-family: Arial, sans-serif; max-width: 600px; margin: 10px auto; padding: 20px; background-color: rgba(255, 255, 255, 0.8); border-radius: 10px; box-shadow: 0 0 10px rgba(0,0,0,0.1); display: flex; flex-direction: column; align-items: center; justify-content: center;">
                <div id="about-container" style="display: flex; align-items: center; margin-bottom: 20px;">
                    <img id="about-image" src="photo.png" alt="Arya Rajvaidya" style="width: 150px; height: 150px; border-radius: 50%; object-fit: cover; margin-right: 20px; border: 3px solid white; box-shadow: 0 5px 15px rgba(0,0,0,0.2);">
                    <div>
                        <h2 style="margin: 0; font-size: 24px; color: #2c3e50;">Arya Rajvaidya</h2>
                        <p><span style="background-color: #3498db; color: white; padding: 5px 10px; border-radius: 5px;">Java Full Stack Developer</span></p>
                        <p style="margin: 0; color: #5e6f70;">${Description}</p>
                    </div>
                </div>
                <p style="line-height: 1.6; color: #34495e; text-align: center;">Use HELP cmd to list all cmds</p>
            </div>
        `;
    },
    help: () => {
        return `<p>Available commands:
            <i>about</i> - Display information about me
            <i>skills</i> - List my skills
            <i>experience</i> - Show my work experience
            <i>education</i> - Display my educational background
            <i>contact</i> - Show my contact information
            <i>clear</i> - Clear the terminal
            <i>help</i> - Display this help message</p>`;
    },
    skills: () => {
        return `<p>${skills}</p>`;
    },
    projects: () => {
        return `<div style='text-align=justified'>Check out my <a style='color: #3498db' href='https://github.com/Highmoonlander/Highmoonlander'>GITHUB</a> for more\n
<b>Check out the VIRTUAL internship - JP Morgan Chase & Co.</b>
    ●	Certificate is uploaded on my LinkedIn Profile
    ●	4 Tasks that were assigned to me can be seen on my Github Profile.

<b>PoseBased Gaming - EDI Sem’3 Project</b>
    Tech Stack: Python, OpenCV
    ●	The project effectively utilized OpenCV and basic Python to create a 
        pose-based gaming system,enabling real-time gesture detection for 
        keyboard actions.
    ●	It was tested on both mobile platforms and intense AAA title games,
        showcasing its versatility and adaptability.            
    ●	The software demonstrated reliable gesture and posture recognition 
        capabilities in complex gaming scenarios, maintaining accuracy in 
        triggering keyboard actions.
    ●	By integrating computer vision techniques, it created engaging 
        gaming experiences.

<b>Multithreaded Web Server – CN basic Project</b>
    Tech Stack: Java
    ●	Implemented web server project featuring single-threaded, 
        multi-threaded, and thread-pooled server implementations for efficient 
        client-server communication.
    ●	Demonstrated expertise in handling concurrent client requests by 
        implementing a thread pool mechanism, enabling the multi-threaded 
        server to efficiently serve up to 1 million clients while 
        maintaining a throughput of 1000 requests per second.

<b>Inventory Manager for Stores - DBMS Project</b>
    Tech Stack:  Java, C, MySQL
    ●	Incorporating features for customers to purchase and return products
        , and for shopkeepers to manage functionalities including adding, 
        modifying, and deleting products with attributes such as ID, Name, 
        Quantity, and Price to streamline shop operations.
    ●	Established a secure connection with a MySQL database in Java.
    ●	Enhanced a previous C-based system that utilized linked lists for 
        data storage.</div>`;
    },
    education: () => {
        return `Vishwakarma Institute of Technology, Pune | BTech | CS | Nov’22 to March'26
    current cgpa: 8.66
JEE Mains | 2022 | 95.82%ile
MHT-CET | 2022 | 98.60%ile
`;
    },
    contact: () => {
        return "Phno: +918668671311\nEmail: aryarajvaidya@gmail.com\nAddress: Mahesh Society, Bibwewadi, Pune\nInsta-page: <a style='color: #3498db' href='https://www.instagram.com/aryarajvaidya?igsh=MXRyMWk3NXMyOXJ1bA%3D%3D&utm_source=qr'>Instagram</a>\nLinkedIn: <a <a style='color: #3498db' href='https://www.linkedin.com/in/arya-rajvaidya-260039249/'>LinkedIn</a>";
    },
    '':()=>{
        return '';
    },
    clear: () => {
        output.innerHTML = '';
        return '';
    }
};

function runCommand(cmd) {
    const responseDiv = document.createElement('div');
    responseDiv.innerHTML = `<div style='font-family: "Courier New", Courier, monospace'><span style='color: #3498db'>aryarajvaidya@Aryas-ProfileBook ~ %</span> ${cmd}</div>`;
    if (cmd in commands) {
        const output = commands[cmd]();
        responseDiv.innerHTML += `<pre>${output}</pre>`;
    } else {
        responseDiv.innerHTML += `Command not found: ${cmd}. Type 'help' for available commands.`;
    }
    output.appendChild(responseDiv);
    terminalContent.scrollTop = terminalContent.scrollHeight;
}

function initializeTerminal() {
    runCommand('about');
}

input.addEventListener('keyup', function(event) {
    if (event.key === 'Enter') {
        const cmd = this.value.toLowerCase().trim();
        this.value = '';
        runCommand(cmd);
    }
});

document.addEventListener('DOMContentLoaded', initializeTerminal);
